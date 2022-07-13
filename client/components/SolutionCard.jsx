import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SolutionCard = () => {
  // arr of solutions
  const [allSolutions, setAllSolutions] = useState([]);

  // axios req to get all solutions 
  const getSolutions = async () => {
    const solutions = await axios.get('/api/userData');

  }
  
  return (
    <div className='solution-card'>SolutionCard</div>
  )
}

export default SolutionCard