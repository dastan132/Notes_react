import React, { memo } from 'react'

const Other = memo(({onSomething, other}) => {
    console.log("Other is also rerander")
    
  return (
    <div>
    
    <button onClick={onSomething} className='p-2 m-2 rounded-lg font-bold text-2xl bg-green-700 hover:bg-green-900 cursor-pointer'>Incremnet Other</button>
    <span className='p-2 m-2 font-bold text-lg '>{other}</span>
    </div>
  )
})

export default Other