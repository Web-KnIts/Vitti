import React, { useEffect, useState } from 'react'
import {Button} from "../common/button"
import { Link } from 'react-router-dom'
import { useAuthContext } from '../Authcomponents/useAuthContext'

const Navbar = () => {
  const {user,setUser} = useAuthContext();
  const [signed,setSigned] = useState(false)
  const LinkStyle ={
      padding:"15px 25px",border:"none",width:"fit-content",fontSize:"18px",boxShadow:" 0px 0px 22px 0px rgba(255,255,255,0.25)"
  }
  const linkStyle = {textDecoration:"none",color:"white"}
  const NavWrapper = {display:"flex",gap:"18px",listStyle:"none",fontSize:"20px",color:"white",alignItems:"center"};

  useEffect(()=>{
   
  })

  return (
    <>
    <div style={{width:"100%",padding:"15px 0px"
    }}>
        <div style={{width:"70vw",margin:"auto"}}>
          <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
              <img src="/homelogo.png" alt="" />
              <nav style={NavWrapper}>
              <li><a className='hover-effect' href="#" style={linkStyle}>Home</a></li>
                <li><a className='hover-effect' href="#About-Vitti" style={linkStyle}>About Us</a></li>
                <li> <a className='hover-effect' href="#Travel-Planner" style={linkStyle}>Travel Planner</a> </li>
                <li> <a className='hover-effect' href="#"  style={linkStyle}>Blog</a></li>
                <li> <a className='hover-effect' href="#contact-us"  style={linkStyle}>Contact Us</a></li>
              </nav>
                <Link to={signed?"/":"/register"}><Button  style={LinkStyle}>{signed?"Logout":"sign in"}</Button></Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar