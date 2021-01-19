import React, { Component } from "react";

export default class postArticle extends Component {
  state = { body: "", username: "jessjelly", commentSubmitted: false }


  render() {
  
    return (
        <form className='add-article-form' onSubmit = {this.handleSubmit}>
        <p>Post Article here</p>
        <label>Article title</label>
        <input label='article-title'></input>
        <label>Article</label>
        <input label='article-body'>
        <input type='textarea' placeholder='type'></input>
        <p>select topic</p>
        </input>
        
        </form>
    );
  }
}
