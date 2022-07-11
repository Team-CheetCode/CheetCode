import React from 'react'
import Sidenav from '../components/Sidenav.jsx';
import Qotd from '../components/Qotd.jsx';
import Answers from '../components/Answers.jsx';
import Rightbar from '../components/Rightbar.jsx';
import styles from '../styles/main.scss';
const Home = () => {
  return (
    <div id="Home">
      <Sidenav />
      {/* <Answers /> */}
      <Qotd />
      <Rightbar />
      {/* <div id="dashboard">
      </div> */}
    </div>
  );
};

export default Home