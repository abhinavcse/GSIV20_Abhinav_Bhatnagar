import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Row, Col, Navbar, FormControl, Form, InputGroup, Card, ListGroup, ListGroupItem,
    Container,

} from 'react-bootstrap';
import LinesEllipsis from 'react-lines-ellipsis';

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }

    truncate(input) {
        if (input.length > 40)
            return input.substring(0, 50) + '...';
        else
            return input;
    };

    render() {
        let movieData = this.props.movie;
        let movieOverview = this.truncate(movieData.overview);
        const movieDetailsLink = `/movie/${movieData.id}`;
        return (
            <Card style={{ height: '500px' }} >
                <Link to={movieDetailsLink}>
                    <Card.Img style={{ height: '300px' }}
                        variant="top" src={movieData.poster_path} />
                </Link>
                <Card.Body>
                    <Row className="float-left" >
                        <Col xs="8">
                            <strong>{movieData.title} </strong>
                        </Col>
                        <Col xs="4" style={{ textAlign: 'right' }}>
                            <small>({movieData.vote_average})</small>
                        </Col>
                        <Col xs="12">
                            <LinesEllipsis
                                text={movieOverview}
                                maxLine='4'
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default MovieCard;