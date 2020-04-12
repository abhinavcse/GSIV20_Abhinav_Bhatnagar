import React, { Component } from 'react';
import {
  Row, Col, Navbar, FormControl, Form, InputGroup, Card, ListGroup, ListGroupItem,
  Container,

} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Navigation from '../shared/components/Navigation';
import MovieCard from './components/MovieCard';

class DefaultLayout extends React.Component {

  render() {
    return (
      <Container>
        <Navigation />
        <MovieCard />
      </Container>
    );
  }
}

export default DefaultLayout;