import { Component } from "react";
import { CardContainer } from "./styles/card-container";
import { ContentContainer } from "./styles/content-container";
import { ImageContainer } from "./styles/image-container";
import { NameContainer } from "./styles/name-container";
import { PriceContainer } from "./styles/price-container";
import { Image } from "./styles/image";

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <CardContainer
          inStock={this.props.inStock}
          image={this.props.gallery[0]}
        >
          {!this.props.inStock && <div>OUT OF STOCK</div>}

          {this.props.inStock && (
            <>
              <ImageContainer>
                <Image src={this.props.gallery[0]} />
              </ImageContainer>
              <ContentContainer>
                <NameContainer>{this.props.name}</NameContainer>
                <PriceContainer>
                  {this.props.prices[0].currency.symbol +
                    String(this.props.prices[0].amount)}
                </PriceContainer>
              </ContentContainer>
            </>
          )}
        </CardContainer>
        {!this.props.inStock && (
          <ContentContainer>
            <NameContainer>{this.props.name}</NameContainer>
            <PriceContainer>
              {this.props.prices[0].currency.symbol +
                String(this.props.prices[0].amount)}
            </PriceContainer>
          </ContentContainer>
        )}
      </>
    );
  }
}

export default ProductCard;
