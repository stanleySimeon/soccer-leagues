import React from 'react';
import Navbar from './navbar/Navbar';
import ConsumeTeam from './consumeTeam/ConsumeTeam';
import Footer from './Footer';

const HomePage = () => (
  <>
    <Navbar />
    <div id="homePage_header" className="text-center">
      <h1>
        Welcome to the
        {' '}
        <span className="text-white">Football</span>
        {' '}
        Leagues
      </h1>
    </div>
    <div id="homePage_container">
      <ConsumeTeam />
    </div>
    <Footer />
  </>
);
export default HomePage;
