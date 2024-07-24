import React, { useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Container } from "./FindSurfExplore";
import { Button, Content } from "./TravelPlanner";

// Import videos correctly (assuming they are correctly exported)
import { video1, video2, video3, video4, video5 } from "../videos";

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
  overflow: hidden;
`;

const BackgroundSelector = styled.div`
  display: flex;
  gap: 10px;
  width: 72vw;
`;

const BackgroundOption = styled.video`
  width: 16vw;
  min-height: 19vh;
  border-radius: 10px;
  cursor: pointer;
`;

const Header = styled.header`
  backdrop-filter: blur(2.1px);
  z-index: 10;
  transition: background-color 0.35s ease-in-out;
`;

const Home = (props) => {
  const bgOptions = [video1, video2, video3, video4, video5];
  const [background, setBackground] = useState(bgOptions[4]);

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
            background: props.glass
              ? "rgba(0,0,0,1)"
              : "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 80%)",
          }}
        >
          <Navbar glass={props.glass} user={props.user} />
        </Header>
        <HomeWrapper>
          <div style={{width:"100%"}}>
            <img src="/heading.svg" alt="" style={{ marginTop: "90px",width:"100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              gap: "60px",
              alignItems: "center",
              flexWrap:"wrap"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
            >
              <Content $size="22px" $color="white">
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
            <div
              style={{
                width: "550px",
                height:"250px",
                borderRadius: "10px",
                transition: "all 0.5s ease",
                overflow:"hidden",
            }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              src={background}     
              style={{
                width:"100%",
              }}     
            />
            </div>
          </div>
          <BackgroundSelector>
            {bgOptions.map((video, idx) => (
              <BackgroundOption
                src={video}
                muted
                key={idx}
                onClick={() => setBackground(video)}
              />
            ))}
          </BackgroundSelector>
        </HomeWrapper>
      </Container>
    </React.Fragment>
  );
};

export default Home;
