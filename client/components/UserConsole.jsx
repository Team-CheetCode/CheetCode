// import React, { useState, useEffect } from 'react'
// import { Console, Hook, Unhook } from 'console-feed'

// const UserConsole = () => {
//   const [logs, setLogs] = useState([])

//   // run once!
//   useEffect(() => {
//     Hook(
//       window.console,
//       (log) => setLogs((currLogs) => [...currLogs, log]),
//       false
//     )
//     return () => Unhook(window.console)
//   }, [])

//   return <Console logs={logs} variant="dark" />
// }

// export default UserConsole;

import React from 'react'
import { Hook, Console, Decode } from 'console-feed'

class UserConsole extends React.Component {
  state = {
    logs: [],
  }

  componentDidMount() {
    Hook(window.console, (log) => {
      this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }))
    })

  }

  render() {
    return (
      <div style={{ backgroundColor: '#242424' }}>
        <Console logs={this.state.logs} variant="dark" />
      </div>
    )
  }
}

export default UserConsole;