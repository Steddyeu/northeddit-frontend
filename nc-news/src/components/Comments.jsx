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
        <p>author: {comment.author}</p>
        <p>created at: {comment.created_at}</p>
        <p>body: {comment.body}</p>
        <p>votes: {comment.votes}</p>
<div>

</div>
</div>
      ))}
      </div>
    )
  }
}
