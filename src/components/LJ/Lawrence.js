import React from 'react'
import styled from 'styled-components';
import './Lawrence.css'

const TypeStyle = styled.p`
  font-size:45px;
  fontFamily: 'Montserrat', sans-serif;
  color:  #999C9D;
  top: 5%;
  left:43%;
  placeItems: center
  bottom: 20%;
  opacity: 0.8;
  white-space: pre;
  overflow: auto;
  width: 3.9em;
  position: relative; 
  animation: type 1s steps(10, end); 
  @keyframes type{ from { width: 0 } 
  } 

`
const Lawrence = () => (

        <TypeStyle > 
        <h1>Lawrence</h1>
        </TypeStyle> 
    )

export default Lawrence
