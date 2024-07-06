import React from 'react'

const Card = ({children}) => {

  return (
    <div style={{width:"275px",height:"354px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"rgba(255,255,255,0.24)",borderRadius:"16px",margin:"10px 5px",position:"relative"}}>
        {children}
    </div>
  )
}

export default Card