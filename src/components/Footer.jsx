import React from "react";
import { Container } from "../common/container";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 85%;
  margin: auto;
`;

const Handles = styled.div`
margin-bottom:100px;
display:flex;
justify-content:start;
gap:100px
`
const Sitemap = styled.div`
& nav li:hover{
  cursor:pointer;
}
`
const Footer = () => {
  return (
    <Container $backgroundcolor="#191919" style={{ paddingBottom: "50px",paddingTop:"0px"}}>
      <FooterWrapper>
        <Handles>
            <Sitemap>
              <h3 style={{fontSize:'28px',color:"white",marginBottom:"20px"}}>Sitemap</h3>
              <nav style={{listStyle:"none",color:"white",fontSize:"24px"}}>
                <li><a className='hover-effect' href="#" style={{textDecoration:"none",color:"white"}}>Home</a></li>
                <li><a className='hover-effect' href="#About-Vitti" style={{textDecoration:"none",color:"white"}}>About Us</a></li>
                <li> <a className='hover-effect' href="#Travel-Planner" style={{textDecoration:"none",color:"white"}}>Travel Planner</a> </li>
                <li> <a className='hover-effect' href="#contact-us"  style={{textDecoration:"none",color:"white"}}>Contact Us</a></li>
              </nav> 
            </Sitemap>
            <Sitemap>
            <h3 style={{fontSize:'28px',color:"white",marginBottom:"20px"}}>Social Media</h3>
              <nav style={{listStyle:"none",color:"white",fontSize:"24px"}}>
                <li><a className='hover-effect' href="" target="_blank" style={{textDecoration:"none",color:"white"}}> Instagram</a></li>
                <li><a className='hover-effect' href="" target="_blank" style={{textDecoration:"none",color:"white"}}> Linkedin</a></li>
              </nav> 
            </Sitemap>
        </Handles>
        <div style={{color:"white",display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
            <img src="/vittiLogo.png" alt="" />
            <a href="#" style={{textDecoration:"none",color:"white"}}><p>Go Back to Top &#8593;</p></a>
            <p>Copyright &#169; Vitti 2024</p>
        </div>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;
