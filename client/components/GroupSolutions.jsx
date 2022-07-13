import React, { useState, useEffect } from 'react'
import SolutionCard from './SolutionCard';
import Upvotes from './Upvotes';
import axios from 'axios';
import { uuid } from 'uuidv4'

const GroupSolutions = () => {
   // arr of solutions
   const [allSolutions, setAllSolutions] = useState([]);

   // axios req to get all solutions 
   const getSolutions = async () => {
    const day1 = new Date('07/10/2022');
    const day2 = new Date();
    const difference = day1.getTime() - day2.getTime();
    const days = Math.abs(Math.ceil(difference / (1000 * 3600 * 24)));
    const solutions = await axios.get(`/api/userData/${days}`);
    console.log('Solutions from query: ', solutions.data);
    setAllSolutions(solutions.data);
   }
   
   useEffect(() => {
     getSolutions();
   }, []);

   let cardId = 0;

   const solutionList = allSolutions.map((solution) => {
    cardId++;
    console.log(solution);
    if(solution.name) return (<div key={'div' + cardId} className='solutionList'>
        <Upvotes key={'upvote' + cardId} qid={solution.qid} upvotes={solution.upvotes}/>
        <SolutionCard key={'solution' + cardId} solution={solution.solution} name={solution.name}/>
      </div>)
    else {
      return (<div key={'div' + cardId} className='solutionList'>
        <Upvotes key={'upvote' + cardId} qid={solution.qid} upvotes={solution.upvotes}/>
        <SolutionCard key={'solution' + cardId} solution={solution.solution} name='Anonymous'/>
      </div>)
    }
   });

  return (
    <div id="GroupSolutions">
      <h1 className='solutions-title'>Today's Solutions</h1>
      <div className="solution-cards">
        {solutionList}
      </div>
    </div>
  );
};

export default GroupSolutions;