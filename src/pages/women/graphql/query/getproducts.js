import gql from 'graphql-tag';

export const GET_PRODUCT_QUERY = gql`
query Query{
    category{
      
      
    name
    products {
      gallery
      prices {
        currency{
          label
          symbol
        }
        amount
      }
      id
      name
     }
     }
  }`