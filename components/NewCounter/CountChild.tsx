'use client'

import { useContext } from 'react'
import CountContext from './CountContext'

const CountChild = () => {
  const { count, countHandler } = useContext(CountContext)
  return (
    <div>
      <p>Child Count: {count}</p>
      <button className="btn" onClick={() => countHandler()}>
        Increment
      </button>
    </div>
  )
}

export default CountChild
