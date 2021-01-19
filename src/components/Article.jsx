import React, { Component } from "react";
import * as api from "../api/api-req";
import Comments from './Comments';
import { Link } from '@reach/router';
import Vote from './Vote';
import ErrorMessage from './ErrorMessage'

export default class Article extends Component {
  state = {
    article: {},
    hasError: false,
    errorMessage:'',
    isLoading: true,
  };

  componentDidMount() {
   // console.log(this.props.article_id);
    api.getArticleByArticleId(this.props.article_id).then((article) => {
     // console.log("----->", article);
      this.setState({ article, isLoading: false })
    })
    .catch((err) => {
      // 400 - not found
      // 404 - invalid
      const {response: {status, statusText}} = err
      this.setState({
        hasError:true,
        errorMessage: `${status}!! ${statusText}`
      })
    })
  }


  render() {
    const { article, hasError, errorMessage, isLoading } = this.state;

    if (isLoading) {
      return <p>article loading...</p>;
    } else if(hasError) {
      return <ErrorMessage errorMessage={errorMessage}/>
    } else {

    return (
      <div>
        <Link to='/'> <button className='gen-buttons'>Return to main page</button></Link>
      <div className="single-articles-card">
          <p className='author-time'> <em className='author-time-em'>created by: </em>{article.author} <em className='author-time-em'>at:</em> {article.created_at} <div className='topic'>Topic: <strong>{article.topic}</strong></div></p>
          <p className='art-title'>{article.title}</p>
        <p> {article.body}</p>
          <Vote article_id={article.article_id} votes={article.votes} />
          <p className='article-footer'>{article.comment_count} comments...💬</p>
        <div>
            <Comments article_id={article.article_id} comments={article.article_id} />
        </div>
      </div>
      </div>
    );
    }
  }
}
