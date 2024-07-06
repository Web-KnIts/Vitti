import React from 'react'
import { Container } from './FindSurfExplore'
import styled from 'styled-components'
import { SecondHeading,Content} from './TravelPlanner'
import { HeadingWrapper,SmallHeading } from './ConnectTraveler'

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
font-size:30px;
background: #084297;
background: linear-gradient(to right, #084297 0%, #0D6EFD 70%, #084297 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

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
justify-content:center;
gap:20px;
padding:30px;
align-itme:center;
flex-direction:column;
border:1px solid black;
border-radius:20px;
width:505px;
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
          <SecondHeading $weight={900} $size="50px">
          Hear from our explorers
          </SecondHeading>
          <SmallHeading $size="18px" $weight="medium" style={{marginTop:"35px"}}>
          Here are a few of the many success stories from our <br /> Vitti users hailing from all over the world
          </SmallHeading>
        </HeadingWrapper>
        <ReviewWrapper>
        <Review>
          <PrimaryHeading $right={false}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda illum maxime eum placeat accusantium laboriosam voluptas impedit vero facere accusamus aperiam ipsum delectus blanditiis id incidunt iste, enim et ullam omnis nam fugiat!"</PrimaryHeading>
          <Tag $right={false}>
            <p style={{fontSize:"22px",color:"#707070",fontWeight:"bold",display:"flex",alignItems:"center"}}>Jackson <span><img src="/avatar.png" alt="" style={{margin:"0px 10px"}}/></span> Maholmes</p>
            <p style={{fontSize:"16px",color:"#707070",fontWeight:"medium",marginTop:"1px"}}>Product Manager</p>
          </Tag>
        </Review>
        <CommentWrapper>
        <Comment>
            <div style={{textAlign:"center"}}><img src="/vector.png" alt="X-Logo" width={"43px"} height={"38px"}/></div>
            <Content>
                        <p>
                           "Vitti helps you plan your multitude of travel cravings with the click of a button. Access our catalogues list of places to visit, stay and dine at to ensure a seamless travel experience."
                        </p>
            </Content>
            <h4></h4>
        </Comment>
        <Comment>
            <div style={{textAlign:"center"}}><img src="/vector.png" alt="X-Logo" width={"43px"} height={"38px"}/></div>
            <Content>
                        <p>
                           " Vitti helps you plan your multitude of travel cravings with the click of a button. Access our catalogues list of places to visit, stay and dine at to ensure a seamless travel experience."
                        </p>
            </Content>
            <h4></h4>
        </Comment>
        </CommentWrapper>
        <Review>
          <PrimaryHeading $right={true}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda illum maxime eum placeat accusantium laboriosam voluptas impedit vero facere accusamus aperiam ipsum delectus blanditiis id incidunt iste, enim et ullam omnis nam fugiat!"</PrimaryHeading>
          <Tag $right={true}>
            <p style={{fontSize:"22px",color:"#707070",fontWeight:"bold",display:"flex",alignItems:"center"}}>Jackson <span><img src="/avatar.png" alt="" style={{margin:"0px 10px"}}/></span> Maholmes</p>
            <p style={{fontSize:"16px",color:"#707070",fontWeight:"medium",marginTop:"1px"}}>Product Manager</p>
          </Tag>
        </Review>
        <Review>
          <PrimaryHeading $right={false}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda illum maxime eum placeat accusantium laboriosam voluptas impedit vero facere accusamus aperiam ipsum delectus blanditiis id incidunt iste, enim et ullam omnis nam fugiat!"</PrimaryHeading>
          <Tag $right={false}>
            <p style={{fontSize:"22px",color:"#707070",fontWeight:"bold",display:"flex",alignItems:"center"}}>Jackson <span><img src="/avatar.png" alt="" style={{margin:"0px 10px"}}/></span> Maholmes</p>
            <p style={{fontSize:"16px",color:"#707070",fontWeight:"medium",marginTop:"1px"}}>Product Manager</p>
          </Tag>
        </Review>
        <CommentWrapper>
        <Comment>
            <div style={{textAlign:"center"}}><img src="/vector.png" alt="X-Logo" width={"43px"} height={"38px"}/></div>
            <Content>
                        <p>
                           "Vitti helps you plan your multitude of travel cravings with the click of a button. Access our catalogues list of places to visit, stay and dine at to ensure a seamless travel experience."
                        </p>
            </Content>
            <h4></h4>
        </Comment>
        <Comment>
            <div style={{textAlign:"center"}}><img src="/vector.png" alt="X-Logo" width={"43px"} height={"38px"}/></div>
            <Content>
                        <p>
                           "Vitti helps you plan your multitude of travel cravings with the click of a button. Access our catalogues list of places to visit, stay and dine at to ensure a seamless travel experience."
                        </p>
            </Content>
            <h4></h4>
        </Comment>
        </CommentWrapper>
        </ReviewWrapper>
    </Container>
  )
}

export default Reviews