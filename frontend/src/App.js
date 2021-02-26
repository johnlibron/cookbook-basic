import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React, { Component } from "react";
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
          <div>
            <ul>
              <li>
                <Link to="/ingredients">Ingredients</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/categoryByName">CategoryByName</Link>
              </li>
            </ul>
            <Route exact path="/ingredients" component={IngredientListView} />
            <Route exact path="/categories" component={CategoryListView} />
            <Route
              path="/categoryByName/:name/"
              component={CategoryByNameView}
            />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
