import gql from "graphql-tag";
import React from "react";
import { graphql } from "react-apollo";

const QUERY_ALL_INGREDIENTS = gql`
  query {
    allIngredients {
      id
      name
    }
  }
`;

class IngredientListView extends React.Component {
  render() {
    let { data } = this.props;
    if (data.loading || !data.allIngredients) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {data.allIngredients.map((item) => (
          <p key={item.id}>
            Ingredient {item.id}: {item.name}
          </p>
        ))}
      </div>
    );
  }
}

IngredientListView = graphql(QUERY_ALL_INGREDIENTS)(IngredientListView);
export default IngredientListView;
