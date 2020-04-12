import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import * as movieHelpers from '../../shared/movie-browser.helpers';

const styles = {
    grid: {
        paddingTop: '10px',
        paddingBottom: '10px',
    },
};

const MovieListComponent = ({ movies }) => {
    let moviesData = [];
    if (movies) {
        moviesData = movieHelpers.getMoviesList(movies.results);
    }
    let movieColumns = moviesData ? moviesData.map(movie => (
        <Col xs="3" style={styles.grid} >
            <MovieCard movie={movie} />
        </Col>
    )) : null;

    return (
        <Row>
            {movieColumns}
        </Row>
    );
}

export default MovieListComponent;
