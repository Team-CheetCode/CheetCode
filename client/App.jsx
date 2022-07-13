import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
const axios = require('axios');

const App = () => {
  // const [problem, setProblem] = useState('');
  // const [title, setTitle] = useState('');
  // const [difficulty, setDifficulty] = useState('');
  // const [solution, setSolution] = useState('');
  // const [langSnippets, setLangSnippets] = useState('')
  
  // async function getQuestion () {
  //   const qData = await axios.get('/api/qotd')
  //   console.log('data', qData)
  //   setProblem(qData.data.question.content);
  //   setLangSnippets(qData.data.question.codeSnippets);
  //   setSolution(qData.data.question.codeSnippets[6].code);
  //   setTitle(qData.data.question.title);
  //   setDifficulty(qData.data.question.difficulty);
    
  // }
  // useEffect(() => {
  //   getQuestion();
  // }, []);
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/solutions' element={<Solutions />} />
      </Routes>
  );
};

export default App;
