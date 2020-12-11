import React from 'react'
import { Link } from "@reach/router";
import * as api from "../api/api-req";

export default function SortBy(props) {
  //console.log('sortby props', props)






  return (
    <div>
      <Link className='all-art-link' to={`/`}>All articles</Link>
      <button className= 'gen-buttons' onClick ={() => props.sortByDateAsc()}>Most recent</button>
      <button className='gen-buttons' onClick={() => props.sortByDateDesc()}>Oldest</button>
      <button className='gen-buttons' onClick={() => props.sortByVoteAsc()}>Highest Votes</button>
      <button className='gen-buttons' onClick={() => props.sortByVoteDesc()}>Lowest Votes</button>
    </div>
  )
}
