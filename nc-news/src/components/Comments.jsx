import React, { Component } from 'react'
import * as api from '../api/api-req';
import AddComments from '../components/AddComments';

export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  }

  componentDidMount() {
   // console.log('this.props-->', this.props)
    api.getCommentsByArticleId(this.props.articleid).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }


  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    const {comments} = this.state;
   // console.log('this.state--->', this.state)
<AddComments />
    return (
      <div>
      {comments.map((comment) => (
        <div className='comment-card' key={comment.comment_id}>
        
          <p className='author-time'><em className='author-time-em'>created by: </em>{comment.author} <em className='author-time-em'>at:</em> {comment.created_at} </p>
        <p>{comment.body}</p>
          <div>
            <button>⬆️</button>
            <p>Votes {comment.votes}</p>
            <button>⬇️</button>
          </div>
        <button className='del-comment-button'>delete comment</button>
<div>

</div>
</div>
      ))}
      </div>
    )
  }
}
