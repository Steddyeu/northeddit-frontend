import React, { Component } from "react";

export default class AddComments extends Component {
  state = { body: "", username: "jessjelly", commentSubmitted: false };

  handleSubmit = (event) => {
    event.preventDefault();
    const { addComment } = this.props;
    const { body, username } = this.state;
    addComment({ body, username });
  };

  handleChange = (event) => {
    //console.log(event.target.value);
    const { value } = event.target;
    this.setState({ body: value });
  };

  render() {
    return (
      <form className="add-comment-form" onSubmit={this.handleSubmit}>
        <p>add comment:</p>
        <label>
          <textarea
            rows="4"
            cols="40"
            type="text"
            name="body"
            id="body"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="comment..."
          ></textarea>
        </label>
        <button className='gen-buttons' type="submit">Submit comment</button>
      </form>
    );
  }
}
