import React from 'react';
import { Container, } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Navigation from '../shared/components/Navigation';
import MovieList from './components/MovieList';
import * as scrolling from '../shared/scrolling';
import { connect } from 'react-redux';
import * as movieActions from '../../redux/movie-browser.actions';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      currentMovies: []
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(this.state.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { topMovies } = this.props;
    if (!topMovies.isLoading) {
      let percentageScrolled = scrolling.getPercentageScrolledDown(window);
      if (percentageScrolled > .8) {
        const nextPage = this.state.currentPage + 1;
        this.props.getTopMovies(nextPage);
        this.setState({ currentPage: nextPage });
      }
    }
  }

  render() {
    const movies = this.props.topMovies;
    return (
      <Container>
        <Navigation />
        <MovieList movies={movies} />
      </Container>
    );
  }
}
export default connect((state) => ({
  topMovies: state.movieBrowser.topMovies.response
}),
  { ...movieActions }
)(DefaultLayout);