import React, { Component } from "react";

export default class AddComments extends Component {
  state = { body: "", username: "jessjelly", commentSubmitted: false };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("event-->", event);
    console.log("event.target-->", event.target);
  };

  render() {
    return (
      <form className="add-comment-form" onSubmit={this.handleSubmit}>
        <p>add comment:</p>
        <label>
          <textarea
            type="text"
            name="body"
            id="body"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="comment..."
          />
        </label>
        <button type="submit">Submit comment</button>
      </form>
    );
  }
}
