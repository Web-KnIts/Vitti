import React from 'react'
import { Container } from './FindSurfExplore'
import { Button } from './TravelPlanner'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = ({glass,user}) => {


  return (
    <>
    <div style={{width:"100%",padding:"15px 0px"
      // marginTop:`${(glass)?"30px":"0px"}`
    }}>
        <div style={{width:"65vw",margin:"auto"}}>
          <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
              <img src="/homelogo.png" alt="" />
              <nav style={{display:"flex",gap:"18px",listStyle:"none",fontSize:"20px",color:"white",alignItems:"center"}}>
              <li><a className='hover-effect' href="#" style={{textDecoration:"none",color:"white"}}>Home</a></li>
                <li><a className='hover-effect' href="#About-Vitti" style={{textDecoration:"none",color:"white"}}>About Us</a></li>
                <li> <a className='hover-effect' href="#Travel-Planner" style={{textDecoration:"none",color:"white"}}>Travel Planner</a> </li>
                <li> <a className='hover-effect' href="#contact-us"  style={{textDecoration:"none",color:"white"}}>Contact Us</a></li>
                <Link to={user?"/":"/register"}><Button  style={{padding:"15px 25px",border:"none",width:"fit-content",fontSize:"18px",marginLeft:"40px",boxShadow:" 0px 0px 22px 0px rgba(255,255,255,0.25)"}}>{user?"Logout":"sign in"}</Button></Link>
              </nav>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar