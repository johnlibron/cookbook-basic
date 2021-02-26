import gql from "graphql-tag";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Container, Row, Table } from "react-bootstrap";

const QUERY_CATEGORY_BY_NAME = gql`
  query CategoryByNameView($name: String!) {
    categoryByName(name: $name) {
      id
      name
      ingredients {
        id
        name
      }
    }
  }
`;

class CategoryByNameView extends Component {
  render() {
    let { data } = this.props;
    if (data.loading || !data.categoryByName) {
      return <div>Loading...</div>;
    }
    return (
      <Row>
        <Container>
          <Row>
            Category {data.categoryByName.id}: {data.categoryByName.name}
          </Row>
          <br />
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Category ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {data.categoryByName.ingredients.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Row>
    );
  }
}

const queryOptions = {
  options: (props) => ({
    variables: {
      name: props.match.params.name,
    },
  }),
};

CategoryByNameView = graphql(
  QUERY_CATEGORY_BY_NAME,
  queryOptions
)(CategoryByNameView);
export default CategoryByNameView;
