import React from 'react'
import styled from 'styled-components';


const TypeStyle = styled.p`
  font-size:45px;
  top: 5%;
  left: 43%;
  bottom: 20%;
  white-space: nowrap;
  overflow: hidden;
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
