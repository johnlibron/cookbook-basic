import gql from "graphql-tag";
import React from "react";
import { graphql } from "react-apollo";

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

class CategoryByNameView extends React.Component {
  render() {
    let { data } = this.props;
    if (data.loading || !data.categoryByName) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <p key={data.categoryByName.id}>
          Category {data.categoryByName.id}: {data.categoryByName.name}
        </p>
        {data.categoryByName.ingredients.map((item) => (
          <p key={item.id}>
            Ingredient {item.id}: {item.name}
          </p>
        ))}
      </div>
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
