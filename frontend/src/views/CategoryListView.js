import gql from "graphql-tag";
import React from "react";
import { graphql } from "react-apollo";

const QUERY_ALL_CATEGORIES = gql`
  query {
    allCategories {
      id
      name
    }
  }
`;

class CategoryListView extends React.Component {
  render() {
    let { data } = this.props;
    if (data.loading || !data.allCategories) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {data.allCategories.map((item) => (
          <p key={item.id}>
            Category {item.id}: {item.name}
          </p>
        ))}
      </div>
    );
  }
}

CategoryListView = graphql(QUERY_ALL_CATEGORIES)(CategoryListView);
export default CategoryListView;
