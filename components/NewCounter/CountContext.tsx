import React from 'react'

type CountContext = {
  count: number
  countHandler: () => number
}

export default React.createContext<CountContext>({
  count: 0,
  countHandler: () => 0,
})
