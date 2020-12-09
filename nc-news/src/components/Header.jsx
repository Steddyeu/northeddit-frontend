import React from 'react'
import beelogo from '../assets/beelogo.png'
export default function Header() {
  return (
    <div className='header-container'>
      <img className ='bee-logo' src={beelogo} alt='bee logo'/>
      <h1 className='page-header'>NorthEddit</h1>
      <h4 className='header-subhead'>For all your Northern Newsly Needs</h4>
    </div>
  )
}
