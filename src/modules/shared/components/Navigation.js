import React from 'react';
import {
  Row, Col, Navbar, FormControl, Form, Media
} from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Api from '../../../utility/Api';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  render() {
    let page = 1;
    return (
      <Navbar className="bg-light">
        <div className="navbar-collapse collapse" id="navbar5">
          <Form className="w-100" >
            <Row>
              <Col xs="10">
                {
                  (this.props.homeRoute == 'true')
                    ?
                    <div className="form-group has-search">
                      <span className="fa fa-search form-control-feedback"></span>
                      <FormControl type="text"
                        onChange={(event) => {
                          let state = Object.assign({}, this.state)
                          state.searchTerm = event.target.value
                          this.setState(state)
                        }}
                        onKeyUp={(event) => {
                          let query = event.target.value;
                          Api.getMovies('/search/movie', {
                            page,
                            query
                          }).then((res) => {
                            this.props.data.updateList(res.data);
                            this.setState({
                              searchTerm: res.data,
                            })
                          });
                        }} placeholder="Search" />
                    </div>
                    : <a className="navbar-brand" href="#">{this.props.title} Details</a>
                }
              </Col>
              <Col style={{ textAlign: 'right' }} xs="2" >
                <Link to='/'>
                  <HomeIcon />
                </Link>
              </Col>
            </Row>
          </Form>
        </div>
      </Navbar>
    );
  }
}

export default Navigation;