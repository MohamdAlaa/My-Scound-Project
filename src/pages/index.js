import React from 'react';
import Features from '../component/Features';
import Hero from '../component/Hero'
import Listings from '../component/Listing'
import {InfoData , InfoDataTwo} from '../data/InfoData'
import { SliderData } from '../data/SliderData';
import InfoSection from '../component/InfoSection'
const Home = () => {
    return (
        <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Listings />
      <Features />
      <InfoSection {...InfoDataTwo} /> 
        </>
    )
}

export default Home
