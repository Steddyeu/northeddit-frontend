import React, { Component } from "react";
import * as api from "../api/api-req";

export default class Article extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    console.log(this.props.article_id);
    api.getArticleByArticleId(this.props.article_id).then((article) => {
      console.log("----->", article);
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    const { article } = this.state;
    return (
      <div className="articles-card">
        <p>title: {article.title}</p>
        <p>topic: {article.topic}</p>
        <p>body: {article.body}</p>
        <p>votes: {article.votes}</p>
        <p>author: {article.author}</p>
        <p>comment count: {article.comment_count}</p>
        <p>created at: {article.created_at}</p>
      </div>
    );
  }
}
