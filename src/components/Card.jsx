import React from 'react'

const Card = ({children}) => {

  const StyleCard ={width:"275px",height:"354px",display:"inline-flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"rgba(255,255,255,0.24)",borderRadius:"16px",margin:"10px 0px",marginRight:"25px",position:"relative"}

  return (
    <div style={StyleCard}>
        {children}
    </div>
  )
}

export default Card