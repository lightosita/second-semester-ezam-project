import {useState} from 'react'


function useNormalCounter() {
  const [count,setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const setValue = (e) => {
    const val = e.target.value
    setCount(val)

  }

  return[count,increment,decrement,reset,setValue]
}

export default useNormalCounter