
import React from "react"
import AuthorSelect from "./fields/AuthorSelect";
import TextField from "./fields/TextField";
import ButtonField from "./fields/ButtonField";
import {updateMovie} from "../../data/movies";


class MovieForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        updateMovie(this.props.location.movie.id, this.state)
            .then(response => {
                console.info(response);
                // todo: handle validation errors from API response
                if(response.errors) {
                    this.setState({
                        errors: response.errors,
                        messages: response.messages,
                    });
                    return;
                }
                this.props.history.push(`/movies`)
            }).catch(err => {
                console.error(err)
        });
        e.preventDefault()
    }
    componentDidMount() {
        const formData = $('#frmMovie').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        this.setState(formData)
    }
    onChange(field, value) {
        // parent class change handler is always called with field name and value
        this.setState({[field]: value});
    }
    render() {
        const movie = this.props.location.movie;
        const author = this.props.location.movie.author;
        if(movie) {
            return (
                <div>
                    <h3>Movie Form</h3>
                    <form id="frmMovie" name="frmMovie" onSubmit={this.onSubmit}>
                        <AuthorSelect
                            defaultValue={author}
                            onChange={this.onChange.bind(this)}
                        />
                        <TextField name="title" setValue={movie.title} onChange={this.onChange.bind(this)} />
                        <TextField name="price" setValue={movie.price} onChange={this.onChange.bind(this)} />
                        <ButtonField label="Save" type="submit" />
                    </form>
                </div>
            )
        } else {
            return (
                <div className="error">
                    <h3>No Movie Data</h3>
                </div>
            )
        }
    }
}

export default MovieForm
