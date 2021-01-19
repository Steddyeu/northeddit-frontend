import React from 'react'

export default function ErrorMessage(props) {
  return (
    <div className='ErrorMessage'>
      <p>{props.status} {props.ErrorMessage}</p>
    </div>
  )
}
