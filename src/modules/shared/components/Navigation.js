import React, { Component } from 'react';
import {
  Row, Col, Navbar, FormControl, Form, InputGroup, Card, ListGroup, ListGroupItem,
  Container,

} from 'react-bootstrap';

class Navigation extends React.Component {

  render() {

    return (
      <Navbar className="bg-light">
        <div className="navbar-collapse collapse" id="navbar5">
          <Form className="w-100" >
            <Row>
              <Col xs="10">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <FormControl type="text" placeholder="Search" />
                </div>
              </Col>
              <Col style={{ textAlign: 'right' }} xs="2" >
                <a className="nav-link" href="#">
                  <span class="fa fa-home fa-2x"></span>
                </a>
              </Col>
            </Row>
          </Form>
        </div>
      </Navbar>
    );
  }
}

export default Navigation;