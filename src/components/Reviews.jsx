import React from 'react'
import { Container } from '../common/container'
import styled from 'styled-components'
import {Content} from "../common/content"
import { HeadingWrapper } from '../common/headingWrapper'
import { SecondHeading } from '../common/secondHeading'
import { SmallHeading } from '../common/smallHeading'

const ReviewWrapper = styled.div`
width:72vw;
margin:auto;
display:flex;
flex-direction:column;
gap:200px
`
const PrimaryHeading = styled.h2`
width: calc(100% - 100px);
margin-left:${(props)=>props.$right === true ?"auto":"0px"};
text-align:${(props)=>props.$right === true ?"right":"left"};
font-size:2.6vw;
line-height:1.5;
background: #084297;
background: linear-gradient(to right, #084297 0%, #0D6EFD 70%, #084297 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-weight:400;

`
const Tag =styled.div`
display:flex;
justify-content:${(props)=>props.$right === true ?"flex-end":"flex-start"};
align-items:center;
gap:80px;
`

const Review = styled.div`
display:flex;
flex-direction:column;
gap:10px;

`

const Comment = styled.div`
display:flex;
gap:20px;
padding:30px;
align-itme:center;
flex-direction:column;
border:1px solid black;
border-radius:20px;
width:33vw;
position:relative;

div p{
  letter-spacing:-0.6px;
  font-weight:400;
  font-family:poppins;
}

`
const CommentWrapper = styled.div`
display:flex;
justify-content:space-between;
align-itme:center;
`
const Reviews = () => {


  return (
    <Container $padding="200px 0px" id="client-reviews">
        <HeadingWrapper $mb="120px">
          <SecondHeading $weight={900} $size="50px" $lg_responsive={{$size:"45px"}}>
          Hear from our explorers
          </SecondHeading>
          <SmallHeading $size="18px" $weight="medium" style={{marginTop:"35px"}}>
          Here are a few of the many success stories from our <br /> Vitti users hailing from all over the world
          </SmallHeading>
        </HeadingWrapper>
        <ReviewWrapper>
        <Review>
          <PrimaryHeading $right={false}>"Vitti made planning my vacation a breeze! With its intuitive interface and comprehensive features, I was able to book flights, accommodations, and activities seamlessly. It truly enhanced my travel experience!"</PrimaryHeading>
          <Tag $right={false}>
            <p style={{fontSize:"22px",color:"#707070",fontWeight:"bold",display:"flex",alignItems:"center"}}>Jackson <span><img src="/avatar.png" alt="" style={{margin:"0px 10px"}}/></span> Maholmes</p>
            <p style={{fontSize:"16px",color:"#707070",fontWeight:"medium",marginTop:"1px"}}>Product Manager, Make my trip</p>
          </Tag>
        </Review>
        <CommentWrapper>
        <Comment>
            <div style={{textAlign:"center"}}><img src="/vector.png" alt="X-Logo" width={"43px"} height={"38px"}/></div>
            <Content>
                <p>
                Because of Vitti, my travel experience was seamless and enjoyable.  Engaging with the travel community added valuable insights and recommendations, making my journey better.
                </p>
            </Content>
            <p style={{margin:"0px",textAlign:"right",fontWeight:700}}>- Jim Barton, Twitter User</p>
        </Comment>
        <Comment>
            <div style={{textAlign:"center"}}><img src="/vector.png" alt="X-Logo" width={"43px"} height={"38px"}/></div>
            <Content>
                        <p>
                        Using Vitti was a game-changer for my trip. It helped me uncover local gems. The community feature provided me with tips and recommendations, enhancing my overall travel experience.
                        </p>
            </Content>
            <p style={{margin:"0px",textAlign:"right",fontWeight:700}}>- Jim Barton, Twitter User</p>
        </Comment>
        </CommentWrapper>
        <Review>
          <PrimaryHeading $right={true}>Vitti is definitely not like other trip-planning websites, the different features helped me throughout, and there were places that were  mesmerizing. Away from the overrated destinations, I got a chance to experience the quiet</PrimaryHeading>
          <Tag $right={true}>
            <p style={{fontSize:"22px",color:"#707070",fontWeight:"bold",display:"flex",alignItems:"center"}}>Jackson <span><img src="/avatar.png" alt="" style={{margin:"0px 10px"}}/></span> Maholmes</p>
            <p style={{fontSize:"16px",color:"#707070",fontWeight:"medium",marginTop:"1px"}}>Product Manager, Make my trip</p>
          </Tag>
        </Review>
        <Review>
          <PrimaryHeading $right={false}>Leaving reviews is not my cup of tea, but using Vitti was the best decision ever. I definitely recommend using and planning your trips, and getaways with this. It is a must-try app for every traveler like me.</PrimaryHeading>
          <Tag $right={false}>
            <p style={{fontSize:"22px",color:"#707070",fontWeight:"bold",display:"flex",alignItems:"center"}}>Jackson <span><img src="/avatar.png" alt="" style={{margin:"0px 10px"}}/></span> Maholmes</p>
            <p style={{fontSize:"16px",color:"#707070",fontWeight:"medium",marginTop:"1px"}}>Product Manager, Make my trip</p>
          </Tag>
        </Review>
        <CommentWrapper>
        <Comment>
            <div style={{textAlign:"center"}}><img src="/vector.png" alt="X-Logo" width={"43px"} height={"38px"}/></div>
            <Content>
                        <p>
                        I never thought that using an app would be so helpful in planning a trip, Vitt’s is definitely an all-in-one website that helped me manage the whole trip without the need to switch to different apps.
                        </p>
            </Content>
            <p style={{margin:"0px",textAlign:"right",fontWeight:700}}>- Jim Barton, Twitter User</p>
        </Comment>
        <Comment>
            <div style={{textAlign:"center"}}><img src="/vector.png" alt="X-Logo" width={"43px"} height={"38px"}/></div>
            <Content>
                        <p>
                        Vitti made planning so easy, travelling to a new place is always scary at first but with its unique features i was made aware of everything. Travelling was never this easy for me. 
                        </p>
            </Content>
            <p style={{margin:"0px",textAlign:"right",fontWeight:700}}>- Jim Barton, Twitter User</p>
        </Comment>
        </CommentWrapper>
        </ReviewWrapper>
    </Container>
  )
}

export default Reviews