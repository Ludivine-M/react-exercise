import React, { Component } from 'react'

class PasswordField extends React.Component {
    constructor (props) {
        super(props)
    }
    onFieldChange(event) {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }
    render() {
        return (
            <div className="form-group row">
                <label htmlFor={this.props.name} className="col-md-2 col-form-label">{this.props.name}</label>
                <div className="col-md-auto">
                    <input className="px-1"
                       type="password"
                       id={this.props.name}
                       name={this.props.name}
                       className="form-control"
                       defaultValue={this.props.setValue}
                       onChange={this.onFieldChange.bind(this)}
                    />
                    <span className="d-block invalid-feedback" role="alert">
                        <strong>{this.props.error || ''}</strong>
                    </span>
                </div>
            </div>
        )
    }
}
export default PasswordField
