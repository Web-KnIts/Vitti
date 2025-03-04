import React, { useEffect, useState } from "react";
import FindSurfExplore from "../../components/FindSurfExplore";
import TravelPlanner from "../../components/TravelPlanner";
import ConnectTraveler from "../../components/ConnectTraveler";
import Reviews from "../../components/Reviews";
import Promotion from "../../components/Promotion";
import AboutVitti from "../../components/AboutVitti";
import Footer from "../../components/Footer";
import Home from "../../components/Home";
import { Container } from "../../common/container";

function Index() {

  return (
    <>
      <Container $width={'100vw'} $padding={'0px'}>
        <Home />
        <main>
          <FindSurfExplore />
          <TravelPlanner />
          <ConnectTraveler />
          <Reviews />
          <Promotion />
          <AboutVitti />
        </main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  );
}

export default Index;
