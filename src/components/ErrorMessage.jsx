import React from 'react'

export default function ErrorMessage(props) {
  return (
    <div className='ErrorMessage'>
      <p>{props.ErrorMessage}</p>
    </div>
  )
}
