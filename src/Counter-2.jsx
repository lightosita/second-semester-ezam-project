import React from 'react'
import useNormalCounter from './NormalCustom'
import {Link} from 'react-router-dom'


const Counter_2 = () => {
  // states
    const [count,increment,decrement,reset,setValue] = useNormalCounter()
  return (
    <div className='counter_2'>
         <div className="counter-wrapper">
      <div className="counter">
        <div className="value">
          <h1> {count} </h1>
        </div>
{/* buttons for counter */}
        <div className="button">
          <button onClick={increment}> increment</button>
          <button onClick={decrement}> decrement</button>
          <button onClick={reset}> reset</button>
          <input type='number' name='setValue' onChange={(e) => setValue(e)} />
        </div>
{/* link back to home page */}
        <div className="link">
          <Link className="links" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Counter_2