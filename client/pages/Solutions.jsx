import React from 'react'
import Sidenav from '../components/Sidenav';
import GroupSolutions from '../components/GroupSolutions';
import PrevHH from '../components/PrevHH';

const Solutions = () => {
  return (
    <div id="solutions">
      <Sidenav />
      <GroupSolutions />
      <PrevHH />
    </div>
  );
};

export default Solutions;