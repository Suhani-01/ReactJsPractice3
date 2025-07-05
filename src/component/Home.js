import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigator=useNavigate();

  function handleClick(){
    navigator('/about');
  }
  return (
    <div>
      I am Home page :
      <button onClick={handleClick}>Move to About page</button>
    </div>
  )
}

export default Home
