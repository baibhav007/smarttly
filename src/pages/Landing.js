import React from 'react'
import Landing from '../Components/LandingPage/Landing';
import HomePageTop from '../Components/HomePage/HomePageTop/HomePageTop';
import HomeAudit from '../Components/HomePage/HomeAudit/HomeAudit';
import WpBot from '../Components/WpBot/WpBot'
export default function LandingPage() {
  return (
    <>
    <HomePageTop/>
   
    <Landing/>
    <HomeAudit/>
    <WpBot/>
    </>
  )
}
