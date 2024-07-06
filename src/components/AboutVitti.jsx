import React from 'react'
import { Container } from './FindSurfExplore'
import styled from 'styled-components'
import { Content, SecondHeading } from './TravelPlanner'
import { HeadingWrapper, SmallHeading } from './ConnectTraveler'
import {TeamMember} from "./Data.json"
const About = styled.div`
width:72vw;
margin:auto;
padding:100px 0px;
display:flex;
flex-direction:column;
gap:85px
`
const Team = styled.div`
width:100%;
margin:auto;
padding:100px 0px;
`
const responsive = `
`

const AboutVitti = () => {
  return (
    // <div style={{background:"url(\"/wavebackground.svg\")",backgroundRepeat:"no-repeat"}}></div>
    <Container id="About-Vitti" $backgroundcolor="#191919 !important" style={{background:"url(\"/wavebackground.svg\")",backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"contain",width:"100% !important"}}>
        <About>
            <div >
                <img src="/text.png" alt="vitti-text" width="100%"/>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"50px",gap:"75px"}}>
                <Content $size="24px" $color="white">
                        <p style={{wordSpacing:"-1px"}}>
                        India is a place full of stories at every corner some of which even the locals haven't heard of. Vitti’s mission lies in discovering those underrated and unknown places and allowing users to explore them. 
                        </p>
                </Content>
                <Content $size="24px" $color="white">
                        <p style={{wordSpacing:"-1px"}}>
                        Vitti integrates intuitive navigation with essential travel tools, ensuring a smooth and stress-free journey. It empowers you to focus on the true essence of travel – exploration and discovery.
                        </p>
                    </Content>
                </div>
            </div>
                <div style={{display:"flex",flexDirection:"column",gap:"40px"}}>
                <img src="/vitti.png" alt="" width="100%"/>
                <Content $size="24px" $color="white">
                        <p style={{width:"100%",wordSpacing:"-1px"}}>
                        While travelling around the places travellers usually have “been there and done that” kind of feeling, cause that's the case most of the time when everyone follows the same itineraries and visits the same old and boring places, to solve that problem Vitti comes in the role.
                        </p>
                </Content>
                <Content $size="24px" $color="white">
                        <p style={{width:"100%",wordSpacing:"-1px"}}>
                        Travelling isn’t just about ticking off places on a list it is more than that, it's about creating memories by visiting places that the masses haven't explored. Enjoying the peace and hearing the stories of the lanes that have been lost under the pile of common attractions. Vitti will help its users experience those places and make even the smallest trips unforgettable.  
                        </p>
                    </Content>
            </div>
      </About>
        <Team>
        <HeadingWrapper $mb="120px">
          <SecondHeading $weight={900} $size="50px" $color="white">
          Our Wonderful Team
          </SecondHeading>
          <SmallHeading $size="20px" $weight="medium" $color="#707070">
          Without whom Vitti wouldn't be a delightful travel experience
          </SmallHeading>
        </HeadingWrapper>  
        <div style={{width:"90%",margin:"auto"}}>
            <img src="/2k24.png" alt="sanskar-founder" style={{width:"100%"}} /> 
            <Content $size="14px" $color="white">
                        <p style={{width:"20%",wordSpacing:"-1px"}}>
                        Founded in 2024 by<br/> Sanskar Verma, a <br/>  student and founder of a <br/>  new travel experience.
                        </p>
            </Content>
        </div>

        <div style={{width:"90%",margin:"auto",display:"grid",gridTemplateColumns:"repeat(3,auto)",justifyContent:"center",alignContent:"center",rowGap:"49px",columnGap:"133px",marginTop:"80px"}}>
          {
            TeamMember.map((value)=>
            (
              <div key={value.id}>
                <img src={`/${value.name}.png`} alt={`${value.name}-image-role`} />
                <p style={{color:"#707070",fontSize:"18px",fontWeight:"normal",textAlign:"center"}}>{value.role}</p>
              </div>
            ))
          }
        </div>

        </Team>
        <div style={{width:"100%",
          background: "linear-gradient(180deg, rgba(9,67,152,1) 0%, rgba(35,124,255,1) 100%)"}}>
        <HeadingWrapper style={{display:"flex",justifyContent:"space-around",textAlign:"center",width:"80% !important",margin:"auto",padding:"100px 20px"}}>
          <SecondHeading $weight={900} $size="70px" $color="white">
          Enquiries?
          </SecondHeading>
          <SmallHeading $size="35px" $weight="medium" $color="white" style={{margin:"0px",display:"flex",alignItems:"center"}}>
          support@vitti.com
          </SmallHeading>
        </HeadingWrapper>
        </div>
    </Container>
  )
}

export default AboutVitti