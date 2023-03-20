'use client'

import { useState } from 'react'
import CountContext from './CountContext'
import CountChild from './CountChild'

const CountParent = () => {
  const [count, setCount] = useState(0)

  const countHandler = () => {
    setCount(count + 1)
    return count
  }

  return (
    <CountContext.Provider value={{ count, countHandler }}>
      <CountChild />
      <h2>Parent Count: {count}</h2>
    </CountContext.Provider>
  )
}

export default CountParent
