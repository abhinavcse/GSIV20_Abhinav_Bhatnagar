import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import DefaultLayout from "./DefaultLayout";
import MovieDetails from "./components/MovieDetails";
import { Container, } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

class Routing extends Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        return (
            <Container >
                <Router>
                    <Switch>
                        <Route path="/movies/list" name="Movies List"
                            component={DefaultLayout} />
                        <Route path="/movie/:movieId" name="Movies Details"
                            component={MovieDetails} />
                        <Redirect exact from="/" to="/movies/list" />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </Container>
        );
    }
}

export default Routing;
