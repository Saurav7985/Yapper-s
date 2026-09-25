import React from 'react';
import Hero from '../components/Hero/Hero';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import UpcomingMeetups from '../components/UpcomingMeetups/UpcomingMeetups';
import CommunityMoments from '../components/CommunityMoments/CommunityMoments';
import JoinYappers from '../components/JoinYappers/JoinYappers';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <WhatWeDo />
      <UpcomingMeetups />
      <CommunityMoments />
      <JoinYappers />
    </main>
  );
};

export default Home;
