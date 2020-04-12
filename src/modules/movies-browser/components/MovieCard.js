import React, { Component } from 'react';
import {
    Row, Col, Navbar, FormControl, Form, InputGroup, Card, ListGroup, ListGroupItem,
    Container,

} from 'react-bootstrap';

const styles = {
    grid: {
        paddingTop: '10px',
        paddingBottom: '10px',
    },
};
class MovieCard extends React.Component {

    render() {

        return (
            <Row >
                <Col xs="3" style={styles.grid} >
                    <Card >
                        <Card.Img style={{ height: '300px' }}
                            variant="top" src="http://2.bp.blogspot.com/-4w4dG13LfMU/VVwESmBmz-I/AAAAAAAAAEI/7xjND-YTHaQ/s320/Download%2BFree%2BAvanger%2BAge%2BOf%2BUltron%2BWallpaper%2Bfor%2Biphone%2560.jpg" />
                        <Card.Body>
                            <Row >
                                <Col xs="8">
                                    Movie Title
                                 </Col>
                                <Col xs="4">
                                    <small>(Rating)</small>
                                </Col>
                                <Col xs="12">
                                    <small> Description</small>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs="3" style={styles.grid} >
                    <Card >
                        <Card.Img style={{ height: '300px' }} variant="top" src="http://2.bp.blogspot.com/-4w4dG13LfMU/VVwESmBmz-I/AAAAAAAAAEI/7xjND-YTHaQ/s320/Download%2BFree%2BAvanger%2BAge%2BOf%2BUltron%2BWallpaper%2Bfor%2Biphone%2560.jpg" />
                        <Card.Body>
                            <Row >
                                <Col xs="8">
                                    Movie Title
                                 </Col>
                                <Col xs="4">
                                    <small>(Rating)</small>
                                </Col>
                                <Col xs="12">
                                    <small> Description</small>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs="3" style={styles.grid} >
                    <Card >
                        <Card.Img style={{ height: '300px' }} variant="top" src="http://2.bp.blogspot.com/-4w4dG13LfMU/VVwESmBmz-I/AAAAAAAAAEI/7xjND-YTHaQ/s320/Download%2BFree%2BAvanger%2BAge%2BOf%2BUltron%2BWallpaper%2Bfor%2Biphone%2560.jpg" />
                        <Card.Body>
                            <Row >
                                <Col xs="8">
                                    Movie Title
                                 </Col>
                                <Col xs="4">
                                    <small>(Rating)</small>
                                </Col>
                                <Col xs="12">
                                    <small> Description</small>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs="3" style={styles.grid} >
                    <Card >
                        <Card.Img style={{ height: '300px' }} variant="top" src="http://2.bp.blogspot.com/-4w4dG13LfMU/VVwESmBmz-I/AAAAAAAAAEI/7xjND-YTHaQ/s320/Download%2BFree%2BAvanger%2BAge%2BOf%2BUltron%2BWallpaper%2Bfor%2Biphone%2560.jpg" />
                        <Card.Body>
                            <Row >
                                <Col xs="8">
                                    Movie Title
                  </Col>
                                <Col xs="4">
                                    <small>(Rating)</small>
                                </Col>
                                <Col xs="12">
                                    <small> Description</small>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="3" style={styles.grid} >
                    <Card >
                        <Card.Img style={{ height: '300px' }} variant="top" src="http://2.bp.blogspot.com/-4w4dG13LfMU/VVwESmBmz-I/AAAAAAAAAEI/7xjND-YTHaQ/s320/Download%2BFree%2BAvanger%2BAge%2BOf%2BUltron%2BWallpaper%2Bfor%2Biphone%2560.jpg" />
                        <Card.Body>
                            <Row >
                                <Col xs="8">
                                    Movie Title
                  </Col>
                                <Col xs="4">
                                    <small>(Rating)</small>
                                </Col>
                                <Col xs="12">
                                    <small> Description</small>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        );
    }
}

export default MovieCard;