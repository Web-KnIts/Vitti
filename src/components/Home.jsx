import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Container } from "./FindSurfExplore";
import { Button, Content } from "./TravelPlanner";

const HomeWrapper = styled.div`
padding-bottom: 100px;
display: flex;
justify-content: center;
height: 100%;
width: 72vw;
gap: 30px;
margin: auto;
align-items: center;
flex-direction: column;
overflow:hidden;
`;

const BackgroundSelector = styled.div`
  display: flex;
  gap: 10px;
  width:72vw;
`;

const BackgroundOption = styled.div`
  min-width: 15vw;
  min-height: 20vh;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  cursor: pointer;
`;

const Header = styled.header`
backdrop-filter:blur(2.1px);
z-index:10;
transition:background-color .35s ease-in-out;
`
const Home = (props) => {
  const [background, setBackground] = useState("red");
  const selectBackground = (color) => {
    setBackground(color);
  };

  const bgOptions = ["red", "black", "green", "yellow","orange"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground(bgOptions[Math.floor(Math.random() * bgOptions.length)]);
    }, 10000);

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <React.Fragment>
      <Container
        style={{
          backgroundImage: `url("/homebackground.png")`,
          backgroundColor: `linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 80%)`,
          padding: "0px",
          minHeight: "100vh",
          backgroundSize:"cover",
        }}
      >
        <Header style={{position:"fixed",width:"100%",

          background:`${(props.glass)?"rgba(0,0,0,1)":"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 80%)"}`}}>
          <Navbar glass={props.glass} user={props.user}/>
        </Header>
        <HomeWrapper>
          <div>
            <img src="/heading.svg" alt="" style={{marginTop:"80px"}}/>
          </div>
          <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <Content $size="22px" $color="white">
                <p style={{ width: "28vw" }}>
                Your anchor to seasoned places and unexplored regions across India.
                <br />
                Enjoy the beauty of India with Vitti, your own personalized travel companion.
                </p>
              </Content>
              <Button style={{ width: "80%" }}>Begin Journey</Button>
            </div>
            <div
              style={{
                width: "38vw",
                height: "33vh",
                backgroundColor: background,
                borderRadius: "10px",
                transition: "background-color 0.5s ease",
              }}
            ></div>
          </div>
          <BackgroundSelector>
            {bgOptions.map((color, idx) => (
              <BackgroundOption
                key={idx}
                color={color}
                onClick={() => selectBackground(color)}
              ></BackgroundOption>
            ))}
          </BackgroundSelector>
        </HomeWrapper>
      </Container>
    </React.Fragment>
  );
};

export default Home;
