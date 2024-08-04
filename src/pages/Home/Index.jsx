import React, { useEffect, useState } from 'react'
import FindSurfExplore from '../../components/FindSurfExplore'
import TravelPlanner from '../../components/TravelPlanner'
import ConnectTraveler from '../../components/ConnectTraveler'
import Reviews from '../../components/Reviews'
import Promotion from '../../components/Promotion'
import AboutVitti from '../../components/AboutVitti'
import Footer from '../../components/Footer'
import Home from '../../components/Home'

function Index() {

  // const [glass,setGlass] = useState(false)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setGlass(true);
  //     } else {
  //       setGlass(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); 
  return (
    <>
    <Home/>
    <main>
    <FindSurfExplore/>
    <TravelPlanner/>
    <ConnectTraveler/>
    <Reviews/>
    <Promotion/>
    {/* <AboutVitti/> */}
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Index