import React from 'react'
import { SecondHeading} from '../common/secondHeading'
import {SmallHeading } from '../common/smallHeading'
import { Container } from '../common/container'
import { HeadingWrapper } from '../common/headingWrapper'
const Promotion = () => {
  return (
    <Container $height="" style={{backgroundImage:`url("/bluebackground.png")`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"60px"}} id="Download-Mobile">
        <HeadingWrapper>
          <SecondHeading $weight="bolder" $size="50px" $color="white" style={{display:"flex",gap:"28px",justifyContent:"center",alignItems:"center"}}>
          Explore the  
            <span style={{fontFamily:"Caveat",fontSize:"80px",fontWeight:400}} >Unexplored</span>
          </SecondHeading>
          <SmallHeading $size="24px" $weight="medium" style={{marginTop:"20px"}} $color="White">
          Discover your city with unlimited hidden gems and <br /> a wonderful community 
          </SmallHeading>
        </HeadingWrapper>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
            <button style={{background:"transparent",border:"none"}}><img src="/appstore.png" alt="App-Store-Image" /></button>
            <button style={{background:"transparent",border:"none"}}><img src="/playstore.png" alt="Play-Store-Image" /></button>
        </div>
    </Container>
  )
}

export default Promotion