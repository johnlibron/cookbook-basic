import gql from "graphql-tag";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Row, Table } from "react-bootstrap";

const QUERY_ALL_INGREDIENTS = gql`
  query {
    allIngredients {
      id
      name
      notes
      category {
        id
        name
      }
    }
  }
`;

class IngredientListView extends Component {
  render() {
    let { data } = this.props;
    if (data.loading || !data.allIngredients) {
      return <div>Loading...</div>;
    }
    return (
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Notes</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.allIngredients.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.notes}</td>
                <td>{item.category.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    );
  }
}

IngredientListView = graphql(QUERY_ALL_INGREDIENTS)(IngredientListView);
export default IngredientListView;
