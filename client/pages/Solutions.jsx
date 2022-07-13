import React from 'react'
import Sidenav from '../components/Sidenav';
import GroupSolutions from '../components/GroupSolutions';
import PrevHH from '../components/PrevHH';
import '../styles/main.scss';
const Solutions = () => {
  return (
    <div id="solutionPage">
      <Sidenav />
      <GroupSolutions />
      <PrevHH />
    </div>
  );
};

export default Solutions;