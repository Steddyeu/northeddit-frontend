import axios from "axios"; 

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
