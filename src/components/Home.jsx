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
`;

const BackgroundSelector = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, auto);
`;

const BackgroundOption = styled.div`
  min-width: 20vw;
  min-height: 20vh;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  cursor: pointer;
`;

const Home = () => {
  const [background, setBackground] = useState("red");
  const selectBackground = (color) => {
    setBackground(color);
  };

  const bgOptions = ["red", "black", "green", "yellow"];
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
        }}
      >
        <header>
          <Navbar />
        </header>
        <HomeWrapper>
          <div>
            <img src="/heading.svg" alt="" />
          </div>
          <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <Content $size="18px" $color="white">
                <p style={{ width: "25vw" }}>
                  Your anchor to seasoned places and plates across India. <br />
                  Enjoy the true beauty of India with Vitti, your personalized
                  travel companion.
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
