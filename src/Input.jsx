import React from 'react'

const Input = (props) => {
  const {id, onChange, ...otherInputs} = props
  return (
   <input {...otherInputs} onChange={onChange}  />
  )
}

export default Input