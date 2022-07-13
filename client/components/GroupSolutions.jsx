import React from 'react'
import SolutionCard from './SolutionCard';

const GroupSolutions = () => {
  return (
    <div id="GroupSolutions">
      <h1 className='solutions-title'>Today's Solutions</h1>
      <div className="solution-cards">
        <SolutionCard />
      </div>
    </div>
  );
};

export default GroupSolutions;