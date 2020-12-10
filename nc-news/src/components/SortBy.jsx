import React from 'react'

export default function SortBy(props) {
  //console.log(props)
  return (
    <div>
      <button ClassName= 'sort-by'>Most recent</button>
      <button ClassName='sort-by'>Oldest</button>
      <button ClassName='sort-by'>Most Voted</button>
      <button ClassName='sort-by'>Least Voted</button>
    </div>
  )
}
