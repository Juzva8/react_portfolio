import React from  'react'
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal'


const StyledCol = styled.div`
    margin: 20
    img {
    border: ${props => props.active ? "2px solid palevioletred" : "2px solid gray"};
    border-radius: 20px;
    cursor: pointer
       :hover {
        border-color: red
    }
`
const GridComponent= (props) => {

    return (
        
        <Reveal effect="fadeIn" duration={2000}>
          <StyledCol><div>{props.children}</div></StyledCol>
        </Reveal>
         
          
          
      );
}

export default GridComponent;