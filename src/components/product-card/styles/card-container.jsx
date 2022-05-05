import styled from 'styled-components';

export const CardContainer = styled.div`
width: 250px;
height: 250px;
display: flex;
flex-direction: column;
${(props)=>{return !props.inStock&&'opacity: 0.5;'}}
${(props)=>{
    if (props.image && !props.inStock){
        return `
        background-size: 150px;
        background-repeat: no-repeat;
        background-position: center;
        align-items: center;
        justify-content: center;
        background-image: url(${props.image})`
    }
}}
`
