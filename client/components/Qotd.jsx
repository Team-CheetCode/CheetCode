import React, { useState } from 'react';
import AceEditor from "react-ace";

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


const Qotd = () => {
  const [theme, setTheme] = useState('monokai');
  const [solution, setSolution] = useState(`const twoSum = (array, target) => {

}`);

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

      <h1 id="question">QOTD: Two-Sum</h1>

      <div id="userInput">
        <h1>Input Your Solution</h1>
        <div className="themeBtns">
          <button onClick={changeTheme}>monokai</button>
          <button onClick={changeTheme}>terminal</button>
          <button onClick={changeTheme}>twilight</button>
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
          value={solution}
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