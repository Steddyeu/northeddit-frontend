import React from 'react'
import { Link } from "@reach/router";

export default function SortBy(props) {
  //console.log(props)
  return (
    <div>
      <Link className='all-art-link' to={`/`}>All articles</Link>
      <button className= 'gen-buttons'>Most recent</button>
      <button className='gen-buttons'>Oldest</button>
      <button className='gen-buttons'>Highest Votes</button>
      <button className='gen-buttons'>Lowest Votes</button>
    </div>
  )
}
