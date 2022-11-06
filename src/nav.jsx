import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div>
        <nav>
            <Link className='nav-link' to='/'> Home </Link>
            <Link className='nav-link' to='/counter'> Count 1</Link>
            <Link className='nav-link' to='/counter-2'> Count 2</Link>

            <Link className='nav-link' to='/error'>Test Error Boundary</Link>
        </nav>
    </div>
  )
}

export default Nav