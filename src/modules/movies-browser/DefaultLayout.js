import React from 'react';
import MovieList from './components/MovieList';
import * as scrolling from '../shared/scrolling';
import { connect } from 'react-redux';
import * as movieActions from '../../redux/movie-browser.actions';
import Navigation from '../shared/components/Navigation';
import { Container, } from 'react-bootstrap';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      currentMovies: ''
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
  updateList(list) {
    this.setState({ currentMovies: list });
  }

  render() {
    let movies = {};
    if (this.state.currentMovies) {
      console.log(this.state.currentMovies)
      movies = this.state.currentMovies;
    } else {
      movies = this.props.topMovies;
    }
    return (
      <Container >
        <Navigation homeRoute='true' data={{
          updateList: this.updateList.bind(this)
        }} />
        <MovieList movies={movies} />
      </Container >
    );
  }
}
export default connect((state) => ({
  topMovies: state.movieBrowser.topMovies.response
}),
  { ...movieActions }
)(DefaultLayout);