import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
const axios = require('axios');

const App = () => {
  const [problem, setProblem] = useState('');
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  
  const [langSnippets, setLangSnippets] = useState('')
  const [solution, setSolution] = useState('');

  useEffect(() => {
    async function getQuestion () {
      const qData = await axios.get('/api/qotd')
      console.log('data', qData)
      setProblem(qData.data.question.content);
      setLangSnippets(qData.data.question.codeSnippets);
      setSolution(qData.data.question.codeSnippets[6].code);
      setTitle(qData.data.question.title);
      setDifficulty(qData.data.question.difficulty);
    }
    getQuestion();
  }, [])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home 
        problem={problem}
        title={title}
        difficulty={difficulty}
        solution={solution}
        setSolution={setSolution}
        langSnippets={langSnippets}
        />} />
        <Route path='/solutions' element={<Solutions />} />
      </Routes>
    </Router>
  );
};

export default App;
