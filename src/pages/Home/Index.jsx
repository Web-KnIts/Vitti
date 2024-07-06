import React from 'react'
import FindSurfExplore from '../../components/FindSurfExplore'
import TravelPlanner from '../../components/TravelPlanner'
import ConnectTraveler from '../../components/ConnectTraveler'
import Reviews from '../../components/Reviews'
import Promotion from '../../components/Promotion'
import AboutVitti from '../../components/AboutVitti'
import Footer from '../../components/Footer'

function Index() {
  return (
    <>
    <main>
    <FindSurfExplore/>
    <TravelPlanner/>
    <ConnectTraveler/>
    <Reviews/>
    <Promotion/>
    <AboutVitti/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Index