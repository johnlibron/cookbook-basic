import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React, { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CategoryByNameView from "./views/CategoryByNameView";
import CategoryListView from "./views/CategoryListView";
import IngredientListView from "./views/IngredientListView";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  opts: {
    credentials: "same-origin",
  },
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Container>
            <Row>
              <h1>Cookbook - Basic</h1>
            </Row>
            <Row>
              <Link to="/ingredients">
                <Button variant="link">Ingredients</Button>
              </Link>
              <Link to="/categories">
                <Button variant="link">Categories</Button>
              </Link>
            </Row>
            <br />
            <Route exact path="/ingredients" component={IngredientListView} />
            <Route exact path="/categories" component={CategoryListView} />
            <Route
              exact
              path="/categoryByName/:name/"
              component={CategoryByNameView}
            />
          </Container>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
