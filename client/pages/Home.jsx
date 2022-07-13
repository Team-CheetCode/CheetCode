import React, {useState, useEffect} from 'react'
import Sidenav from '../components/Sidenav.jsx';
import axios from 'axios';
import Qotd from '../components/Qotd.jsx';
import Answers from '../components/Answers.jsx';
import styles from '../styles/main.scss';
import { Hook, Unhook, Console } from 'console-feed';
const Home = props => {
  // const [problem, setProblem] = useState('');
  // const [title, setTitle] = useState('');
  // const [difficulty, setDifficulty] = useState('');
  // const [startingCode, setStartingCode] = useState('');
  // const [langSnippets, setLangSnippets] = useState('')
  
  // async function getQuestion () {
  //   const qData = await axios.get('/api/qotd')
  //   console.log('data', qData)
  //   setProblem(qData.data.question.content);
  //   setLangSnippets(qData.data.question.codeSnippets);
  //   setStartingCode(qData.data.question.codeSnippets[6].code);
  //   setTitle(qData.data.question.title);
  //   setDifficulty(qData.data.question.difficulty);
    
  // }
  // useEffect(() => {
  //   getQuestion();
  // }, []);

  // const [data, setData] = useState([]);
  
  // // const grabData = async () => {
  // //   Hook(window.console, log => {
  // //     setData(data => [...data, Decode(log)])
  // //   })
  // // };

  // useEffect(() => {
  //   Hook(
  //   window.console, 
  //   (log) => setData((currLogs) => [...currLogs, log]),
  //   false
  //   )
  //   return () => Unhook(window.console)
  // }, []);

  // const [logs, setLogs] = useState([])

  // // run once!
  // useEffect(() => {
  //   Hook(
  //     window.console,
  //     (log) => setLogs((currLogs) => [...currLogs, log]),
  //     false
  //   )
  //   return () => Unhook(window.console)
  // }, [])

  return (
    <div id="Home">
      <Sidenav />
      {/* <Answers /> */}
      <Qotd 
      // problem={problem}
      // title={title}
      // difficulty={difficulty}
      // startingCode={startingCode}
      // // setSolution={setSolution}
      // langSnippets={langSnippets}
      />
      {/* <div id="dashboard">
      </div> */}
    </div>
  );
};

export default Home