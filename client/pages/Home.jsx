import React from 'react'
import Sidenav from '../components/Sidenav.jsx';
import Qotd from '../components/Qotd.jsx';

const Home = () => {

  return (
    <div id="Home">
      <Sidenav />
      <Qotd />
    </div>
  );
};

export default Home