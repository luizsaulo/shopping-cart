import react from "react";
import { Query } from "react-apollo";
import ProductCard from "../../components/product-card/product-card";
import { GET_PRODUCT_QUERY } from "./graphql/query/getproducts";
import { CardHomeContainer } from "./styles/card-home-container";
import { ProductCardContainer } from "./styles/product-card-container";

export default class Women extends react.Component {
  render() {
    return (
      <Query query={GET_PRODUCT_QUERY}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <h1>Loading...</h1>;

          return (
            <CardHomeContainer>
              {data.category.products.map((product, index) => (
               <ProductCardContainer>
               <ProductCard
                  key={index}
                  gallery={product.gallery}
                  name={product.name}
                  prices={product.prices}
                />
                </ProductCardContainer>
              ))}
            </CardHomeContainer>
          );
        }}
      </Query>
    );
  }
}
