import React, { useState } from "react";
import Navbar from "./Navbar";
import styled, { keyframes } from "styled-components";
import { Container } from "../common/container";
import {Content} from "../common/content"
import {Button} from "../common/button"
import { video1, video2, video3, video4, video5 } from "../videos";
import { useAuthContext } from "../Authcomponents/useAuthContext";

const HomeWrapper = styled.div`
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 72vw;
  gap: 50px;
  margin: auto;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1280px) {
    width: 80vw;
    gap:40px;

    div > img{
    margin-top:125px !important;
    }
    .responsive-homecontent
    {
      justify-content:space-between;
      gap:50px !important;

      div{
        gap:20px !important;
      }
    }
  }
`;


const BackgroundSelector = styled.div`
  display: flex;
  scrollbar-width:none;
  gap: 10px;
  overflow:auto;
  width: 72vw;

  @media (max-width: 1280px) {
    width: 80vw;
  }
`;

const BackgroundOption = styled.video`
  width: 16vw;
  min-height: 19vh;
  border-radius: 10px;
  cursor: pointer;
  object-fit:cover;

  @media (max-width: 1280px) {
    height:20vh !important;
    width:20vw !important;
  }

`;

const Header = styled.header`
  backdrop-filter: blur(2.1px);
  z-index: 10;
  transition: background-color 0.35s ease-in-out;
`;
const  pulse =  keyframes`
    0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

const SkeletonLoader = styled.div`
  width: 100%;
  height: 100%;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const Video = styled.div`
    width: 38vw;
    height: 250px;
    border-radius: 10px;
    transition: all 0.5s ease;
    overflow: hidden;

    @media (max-width:1280px)
    {
      width:40vw;
      height:30vh;
    } 
    `;


const Home = () => {
  const bgOptions = [video1, video2, video3, video4, video5, video1, video2, video3, video4, video5];
  const [background, setBackground] = useState(bgOptions[1]);
  const [loading, setLoading] = useState(true);
  const { glass, user, setUser } = useAuthContext();

  const handleVideoLoad = () => {
    setLoading(false);
  };
  const handleVideoChange = (video) => {
    console.log(video);
    
    setBackground((prev) => {
      if (prev === video) {
        return prev; 
      }
      setLoading(true);
      return video;
    });
  };
  
  return (
    <React.Fragment>
      <Container
        style={{
          backgroundImage: `url("/homebackground.png")`,
          backgroundColor:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 80%)",
          padding: "0px",
          minHeight: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Header
          style={{
            position: "fixed",
            width: "100%",
            background: glass
              ? "mix-blend-mode: exclusion"
              : "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 80%)",
          }}
        >
          <Navbar glass={glass} />
        </Header>
        <HomeWrapper>
          <div>
            <img src="/heading.svg" alt="" style={{ marginTop: "150px",width:"70vw"}} />
          </div>
          <div
            className="responsive-homecontent"
            style={{
              display: "flex",
              gap: "60px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
            >
              <Content $size="22px" $color="white" $lg_responsive={{$size:"18px !important",$p_width:"33vw !important"}}>
                <p style={{ width: "28vw" }}>
                  Your anchor to seasoned places and unexplored regions across
                  India.
                  <br />
                  Enjoy the beauty of India with Vitti, your own personalized
                  travel companion.
                </p>
              </Content>
              <Button style={{ width: "80%" }}>Begin Journey</Button>
            </div>
            <Video>
              {loading && <SkeletonLoader />}
              <video
                autoPlay
                loop
                muted
                playsInline
                src={background}
                onCanPlayThrough={handleVideoLoad}
                style={{
                  width: "100%",
                  display: loading ? 'none' : 'block',
                }}
              />
            </Video>
          </div>
          <div>
            <BackgroundSelector>
              {bgOptions.map((video, idx) => (
                <BackgroundOption
                  src={video}
                  muted
                  key={idx}
                  onClick={() => handleVideoChange(video)}
                />
              ))}
            </BackgroundSelector>
          </div>
        </HomeWrapper>
      </Container>
    </React.Fragment>
  );
};

export default Home;
