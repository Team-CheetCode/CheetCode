import React, {useState, useEffect} from 'react'
import Sidenav from '../components/Sidenav.jsx';
import Qotd from '../components/Qotd.jsx';
import Answers from '../components/Answers.jsx';
import styles from '../styles/main.scss';
import { Hook, Unhook, Console } from 'console-feed';
const Home = props => {
  const [data, setData] = useState([]);
  
  // const grabData = async () => {
  //   Hook(window.console, log => {
  //     setData(data => [...data, Decode(log)])
  //   })
  // };

  useEffect(() => {
    Hook(
    window.console, 
    (log) => setData((currLogs) => [...currLogs, log]),
    false
    )
    return () => Unhook(window.console)
  }, []);

  return (
    <div id="Home">
      <Sidenav />
      {/* <Answers /> */}
      <Qotd 
      consoleData={data}
      problem={props.problem}
      title={props.title}
      difficulty={props.difficulty}
      solution={props.solution}
      setSolution={props.setSolution}
      langSnippets={props.langSnippets}
      />
      {/* <div id="dashboard">
      </div> */}
    </div>
  );
};

export default Home