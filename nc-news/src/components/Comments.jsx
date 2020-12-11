import React, { Component } from "react";
import * as api from "../api/api-req";
import AddComments from "../components/AddComments";
import CommentVote from './CommentVote';
export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    isDeleted: false,
  };

  componentDidMount() {
    // console.log('this.props-->', this.props)
    api.getCommentsByArticleId(this.props.article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  addComment = (commentToPost) => {
    console.log(commentToPost)
       const {article_id} = this.props
    api.postComment(commentToPost, article_id).then((newComment) => {
      this.setState(currentState => {
        return{
          comments: [newComment, ...currentState.comments]
        }
      })
    })
  };


deleteComment(comment_id) {
  console.log('delcomm', comment_id)
  api.removeComment(comment_id);
  this.setState(currentState => {
    currentState.comments.filter(delComment => {
     if(comment_id === delComment.comment_id) 
     return false;
    })
    return {
      comments: [false, ...currentState.comments]
    }
  })
}


  render() {
    //console.log('COMMENTS -->', this.props)

    if (this.state.isLoading) {
      return <p>Comments Loading...</p>;
    }
    const { comments } = this.state;
    // console.log('this.state--->', this.state)
    return (
      <div className="comments-container">
        <AddComments addComment={this.addComment} />
        {comments.map((comment) => (
          <div className="comment-card" key={comment.comment_id}>
            <p className="author-time">
              <em className="author-time-em">created by: </em>
              {comment.author} <em className="author-time-em">at:</em>{" "}
              {comment.created_at}{" "}
            </p>
            <p>{comment.body}</p>
            <div>
              <CommentVote comment_id={comment.comment_id} votes={comment.votes} />
            </div>
            <button className="gen-buttons" onClick={() => this.deleteComment(comment.comment_id)}>delete comment</button>
            <div></div>
          </div>
        ))}
      </div>
    );
  }
}
