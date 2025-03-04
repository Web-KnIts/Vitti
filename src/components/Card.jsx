import React from 'react'
import styled from "styled-components"
const Card = ({children}) => {
  
  const StyleCard =  styled.div`
  position:relative;
  width:275px;
  height:354px;
  display:inline-flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color:rgba(255,255,255,0.24);
  margin:10px 0px;
  margin-right:25px;
  border-radius:16px;
  @media (max-width:1280px)
  {
    width:250px;
    height:330px;
  }
  
  `

  return (
    <StyleCard >
        {children}
    </StyleCard>
  )
}

export default Card