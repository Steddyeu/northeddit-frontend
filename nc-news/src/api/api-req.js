import axios from "axios"; 


// const instance = axios.create({
//   baseURL: 'https://ed-fe-nc-news-api.herokuapp.com/api',

// })

export const getTopics = () => {
  return axios
  .get('https://ed-fe-nc-news-api.herokuapp.com/api/topics')
  .then((res) => {
    //console.log('res -->', topics.data)
    return res.data.topics;
  })
}

export const getAllArticles = () => {
  return axios
    .get("https://ed-fe-nc-news-api.herokuapp.com/api/articles")
    .then((res) => {
     // console.log('res -->', res.data)
      return res.data.articles;
    });
};
//, { params: { topic: this.props.topic } })
export const getArticleByArticleId = (id) => {
  return axios
    .get(`https://ed-fe-nc-news-api.herokuapp.com/api/articles/${id}`)
    .then((res) => {
     // console.log('res -->', res.data)
      return res.data.article
    });
};

export const getCommentsByArticleId = (article_id) => {
  return axios.get(`https://ed-fe-nc-news-api.herokuapp.com/api/articles/${article_id}/comments`)
  .then((res) => {
   // console.log('res -->', res)
    return res.data.comments;
  })
}

//VOTES
export const upVoteArticle = (article_id) => {
  return axios
    .get(`https://ed-fe-nc-news-api.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
      console.log('upVote--->', res)
    })
}

export const downVoteArticle = (article_id) => {
  return axios
    .get(`https://ed-fe-nc-news-api.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
      console.log('downvote --->', res)
    })
}

//SORTBY
// export const sortByRecent= () => {
//   return axios
//     .get(`https://ed-fe-nc-news-api.herokuapp.com/api/articles?`)
//     .then((res) => {
//       console.log('downvote --->', res)
//     })
// }  make a query?????