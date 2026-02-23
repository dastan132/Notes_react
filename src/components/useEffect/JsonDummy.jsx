import React from 'react'
import useJsonApi from './useJsonApi'
import useJsonCatApi from './useJsonCatApi'

const JsonDummy = () => {
    useJsonApi()
    useJsonCatApi()
  return (
    <div>JsonDummy</div>
  )
}

export default JsonDummy