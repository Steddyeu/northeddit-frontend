import React, { Component } from 'react'

export default class AddComments extends Component {


  render() {
    return (
      <form>
      <p>add comment:</p>
      <label>
      <textarea type='text' placeholder='comment...' />
      </label>
      <button>Submit comment</button>
      </form>
    )
  }
}
