import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const Qotd = () => {

  return (
    <div id="qotd">
      <div id="question">
        <h1>QOTD: Two-Sum</h1>
      </div>
      <div id="userInput">
        <h1>Input Your Solution</h1>
        <AceEditor
        className="testtest"
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        fontSize={14}
        height="50vh"
        width="30vw"
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
        setOptions={{
        // enableBasicAutocompletion: false,
        // enableLiveAutocompletion: false,
        // enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
        }}/>
        <button id="submit">Submit Solution</button>
      </div>
    </div>
  )
}

export default Qotd;