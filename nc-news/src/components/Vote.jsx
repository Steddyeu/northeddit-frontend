import React, { Component } from 'react'
import * as api from '../api/api-req';
export default class Vote extends Component {
  state = {hasVoted:false, vote_change: 0}



handleClickUp = (event) => {
  const {vote} = this.props;
  //console.log(vote)
api.upVoteArticle(vote)
  this.setState({hasVoted:true, vote_change: 1})
}

  // handleClickDown = (event) => {
  //   const { vote } = this.props;
  //   console.log(vote)
  //   api.downVoteArticle(vote)
  //   this.setState({ hasVoted: true, vote_change: -1 })
  // }

  render() {
    //console.log(this.props)
    const {votes} = this.props

    return (
      <div>
        <button onClick={this.handleClickUp}>⬆️</button>
      <p>{votes}</p>
        <button onClick={this.handleDown}>⬇️</button>
      </div>
    )
  }
}
