import react from 'react';
import { Query } from 'react-apollo';
import {GET_PRODUCT_QUERY} from './graphql/query/getproducts';

export default class Women extends react.Component {
  render() {
    return (
      <Query  query={GET_PRODUCT_QUERY}> 
         {({ loading, error, data }) => {
            if (error) return <h1>Error...</h1>;
            if (loading || !data) return <h1>Loading...</h1>;

            return (
              <h1>teste</h1>
            )
        }}

        

      </Query>
    )
  }
}
