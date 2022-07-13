import React from 'react'
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <nav>
      <h1 id="Logo">CheetCode</h1>
      <Link to="/">Home</Link>
      <Link to="/solutions">Solutions</Link>
    </nav>
  )
}

export default Sidenav;