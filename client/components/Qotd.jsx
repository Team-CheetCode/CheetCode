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
  const [theme, setTheme] = useState('twilight');
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

  const problem = "<p>You are given an integer array <code>nums</code>. You are initially positioned at the array&#39;s <strong>first index</strong>, and each element in the array represents your maximum jump length at that position.</p>\n\n<p>Return <code>true</code><em> if you can reach the last index, or </em><code>false</code><em> otherwise</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,3,1,1,4]\n<strong>Output:</strong> true\n<strong>Explanation:</strong> Jump 1 step from index 0 to 1, then 3 steps to the last index.\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,2,1,0,4]\n<strong>Output:</strong> false\n<strong>Explanation:</strong> You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>\n</ul>\n";



  return (
    <div id="qotd">
      <div id="prompt">
        <h1 id="question">QOTD: Two-Sum</h1>
        <p id="problem" dangerouslySetInnerHTML={{__html: problem}}></p>
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