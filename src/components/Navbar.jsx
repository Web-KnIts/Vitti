import React from 'react'
import { Container } from './FindSurfExplore'
import { Button } from './TravelPlanner'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
    <div style={{width:"100%", background: "" ,padding:"15px 0px"}}>
        <div style={{width:"65vw",margin:"auto"}}>
          <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
              <img src="/homelogo.png" alt="" />
              <nav style={{display:"flex",gap:"18px",listStyle:"none",fontSize:"20px",color:"white",alignItems:"center"}}>
                <li>Home</li>
                <li>Travel Planner</li>
                <li>About</li>
                <li>Contact Us</li>
                <Button style={{padding:"15px 25px",border:"none",width:"fit-content",fontSize:"18px",marginLeft:"40px",boxShadow:" 0px 0px 22px 0px rgba(255,255,255,0.25)"}}>Sign in</Button>
              </nav>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar