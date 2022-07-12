import React, { useState, useEffect } from 'react';
import AceEditor from "react-ace";
const axios = require('axios');
// possible languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-csharp";

//possible themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-github";

import "ace-builds/src-noconflict/ext-language_tools";
import { constantOtherSymbol } from 'ace-builds/src-noconflict/mode-ruby';



const Qotd = props => {
  const [theme, setTheme] = useState('twilight');
  
  const changeTheme = (e) => {
    setTheme(e.target.textContent);
  };

  const handleChange = (e) => {
    setSolution(e);
  };

  const handleSubmit = () => {
    alert(solution);
  }

  return (
    <div id="qotd">
      <div id="prompt">
        <h1 id="question">QOTD: {props.title}</h1>
        <div className="problem">
          <p>Difficulty: {props.difficulty}</p>
          <p id="problem" dangerouslySetInnerHTML={{__html: props.problem}}></p>
        </div>
      </div>
      <div id="userInput">
        <h1>Input Your Solution</h1>
        <div className="themeBtns">
          <button onClick={changeTheme}>twilight</button>
          <button onClick={changeTheme}>monokai</button>
          <button onClick={changeTheme}>terminal</button>
          <button onClick={changeTheme}>tomorrow</button>
          <button onClick={changeTheme}>github</button>
          <button onClick={changeTheme}>xcode</button>
        </div>
        <AceEditor
          className="testtest"
          placeholder="Type your solution here..."
          mode="javascript"
          theme={theme}
          fontSize={14}
          // height="50vh"
          // width="40vw"
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={props.solution}
          onChange={handleChange}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }} />
        <button id="submit" onClick={handleSubmit} >Submit Solution</button>
      </div>
    </div>
  )
}

export default Qotd;