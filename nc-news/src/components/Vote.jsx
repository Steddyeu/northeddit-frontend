import React, { Component } from "react";
import * as api from "../api/api-req";

export default class Vote extends Component {
  state = {
    votes: this.props.votes,
    hasVoted: false,
    vote_change: 1,
    vote_down: -1,
  };

  handleClick = () => {
    const { article_id } = this.props;
    // console.log("handleClick-->", article_id);
    api.upVoteArticle(article_id);
    this.setState((currentState) => {
      const newState = { votes: currentState.votes + currentState.vote_change };
      return newState;
    });
  };

  handleClickDown = () => {
    const { article_id } = this.props;
     console.log("handleClick-->", article_id);
    api.downVoteArticle(article_id);
    this.setState((currentState) => {
      const newState = { votes: currentState.votes - currentState.vote_change };
      return newState;
    });
  };

  render() {
    //console.log('vote', this.props)
    //const { votes } = this.props;

    return (
      <div>
        <button className='vote-plus' onClick={this.handleClick}>➕</button>
        <p className='votes'>votes {this.state.votes}</p>
        <button className='vote-minus' onClick={this.handleClickDown}>➖</button>
      </div>
    );
  }
}
