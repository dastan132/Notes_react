import React from 'react'
import { forwardRef } from 'react'

const Circle = forwardRef((props, ref) => {
  return (
    <div
    ref={ref}
    className=' fixed w-10 h-10 border-2 rounded-full bg-indigo-800'
    >
    
    </div>
  )
})

export default Circle