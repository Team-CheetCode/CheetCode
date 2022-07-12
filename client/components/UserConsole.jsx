import React, { useState, useEffect } from 'react'
import { Console, Hook, Unhook } from 'console-feed'

const LogsContainer = () => {
  const [logs, setLogs] = useState([])

  // run once!
  useEffect(() => {
    Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    )
    return () => Unhook(window.console)
  }, [])

  return <Console logs={logs} variant="dark" />
}

export default LogsContainer;