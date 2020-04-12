import React from 'react';
import { Container, } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Navigation from '../shared/components/Navigation';
import MovieList from './components/MovieList';

class DefaultLayout extends React.Component {

  render() {
    return (
      <Container>
        <Navigation />
        <MovieList />
      </Container>
    );
  }
}

export default DefaultLayout;