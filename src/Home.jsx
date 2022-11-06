import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <h1> Light Osita</h1>
        <h3> Counter App</h3>
      <p>This site demonstrates nested routes with react,<br></br>
        error boundary
        404(Notfoundpage),custom Hooks,Use Reducer Hooks<br></br>
         implemented in differnt 
        Pages for Alt-school second semester Exam Project.
        </p>
      
    <Link className='links1' to='/counter'> Use Counter</Link>
    <Link className='links1' to='/counter-2'> Use Counter - 2 </Link>
  
    </div>
  )
}

export default Home