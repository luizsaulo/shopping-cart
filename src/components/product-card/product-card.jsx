import { Component } from "react";
import { CardContainer } from "./styles/card-container";
import { ContentContainer } from "./styles/content-container";
import { ImageContainer } from "./styles/image-container";
import { NameContainer } from "./styles/name-container";
import { PriceContainer } from "./styles/price-container";
import { Image } from './styles/image';


class ProductCard extends Component {
    constructor(props){
        super(props)
    }
    render (){
        return(
            <CardContainer>
                <ImageContainer>
                    <Image src={this.props.gallery[0]} />
                </ImageContainer>
                <ContentContainer>
                <NameContainer>{this.props.name}</NameContainer>
                <PriceContainer>
                    {this.props.prices[0].currency.symbol + String(this.props.prices[0].amount)}
                </PriceContainer>
                </ContentContainer>                
            </CardContainer>
        )

    }
    

}

export default ProductCard;