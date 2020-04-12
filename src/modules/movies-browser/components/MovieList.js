import React, { Component } from 'react';
import MovieBrowser from '../../../services/MovieBrowser';
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.loadDataForPage()
    }

    loadDataForPage() {
        let movies = MovieBrowser.getTopMovies(1);
    }

    render() {
        return (
            <div>
                Movie List
            </div>
        );
    }
}

export default MovieList;