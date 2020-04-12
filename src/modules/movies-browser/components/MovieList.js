import React, {Component} from 'react';
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.loadDataForPage()
    }
    
    loadDataForPage() {
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