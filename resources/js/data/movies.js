
export function getMovies() {
    return axios.get(apiURL + '/api/movie')
        .then(response => {
            return response.data
        }).catch(err => {
            return err;
        })
}

export function getMovie(id) {
    return axios.get(apiURL + '/api/movie/' + id)
        .then(response => {
            return response.data
        }).catch(err => {
            return err;
        })
}

export function updateMovie(id, data) {
    return axios.put(apiURL + '/api/movie/' + id, data)
        .then(response => {
            return response.data
        }).catch(err => {
            return err;
        })
}
