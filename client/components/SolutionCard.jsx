import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SolutionCard = (props) => {
  const solutionBreak = props.solution.replace(/(?:\r\n|\r|\n)/g, '<br>');

  return (
    <div className='solution-card'>
      <div className="card-container">
        <h1>{props.name}'s Solution</h1>
      </div>
      <p id="problem" dangerouslySetInnerHTML={{__html: solutionBreak}}></p>
    </div>
  );
};

export default SolutionCard;