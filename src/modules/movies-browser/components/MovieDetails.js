import React from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Navbar, Media
} from 'react-bootstrap';
import * as movieActions from '../../../redux/movie-browser.actions';
import Navigation from '../../shared/components/Navigation';
import Api from '../../../utility/Api';
import { imageBaseUrl } from '../../../utility/configuration';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: {
        poster_path: '',
        release_date: '',
        title: ''
      },
    };
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    this.props.getMovieDetails(446893);

    const { match: { params } } = this.props;
    if (params.movieId) {
      Api.get(`/movie/${params.movieId}`, { auth: true })
        .then((res) => {
          if (res.data) {
            this.setState({
              currentMovie: res.data,
            })
          }
        }).catch(() => {
          this.props.history.push("/");
        });
    }
  }

  render() {
    const imgPath = imageBaseUrl + "/" + this.state.currentMovie.poster_path;
    const year = this.state.currentMovie.release_date.substring(0, 4);
    return (
      <div>
        <Navigation homeRoute='false' title={this.state.currentMovie.title} />
        <div style={{ marginTop: '10px' }}>
          {
            (this.state.currentMovie.title != '')
              ?
              <Media>
                <img
                  width='250px'
                  height='300px'
                  className="mr-3"
                  src={imgPath}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>{this.state.currentMovie.title} ({this.state.currentMovie.vote_average})</h5>
                  <p>{year} | {this.state.currentMovie.runtime} Min </p>
                  <p>
                    {this.state.currentMovie.overview}
                  </p>
                </Media.Body>
              </Media> : null
          }
        </div>
      </div>
    );
  }
}
export default connect((state) => ({
  movieDetails: state.movieBrowser.movieDetails.response
}),
  { ...movieActions }
)(MovieDetails);