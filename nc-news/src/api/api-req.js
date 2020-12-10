import axios from "axios";

const NcNewsApi = axios.create({
  baseURL: "https://ed-fe-nc-news-api.herokuapp.com/api",
});

export const getTopics = () => {
  return NcNewsApi.get("/topics").then((res) => {
    //console.log('res -->', topics.data)
    return res.data.topics;
  });
};

export const getAllArticles = (topic) => {
  return NcNewsApi.get("/articles", { params: { topic: topic } }).then(
    (res) => {
      // console.log('res -->', res.data)
      return res.data.articles;
    }
  );
};

export const getArticleByArticleId = (id) => {
  return NcNewsApi.get(`/articles/${id}`).then((res) => {
    // console.log('res -->', res.data)
    return res.data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  //console.log("artId-->", article_id);
  return NcNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
    // console.log('res -->', res)
    return res.data.comments;
  });
};

//VOTES
export const upVoteArticle = (article_id) => {
  return NcNewsApi.patch(`/articles/${article_id}`, { inc_votes: 1 });
};

export const downVoteArticle = (article_id) => {
  return NcNewsApi.patch(`/articles/${article_id}`, { inc_votes: -1 });
};


export const postComment = (article_id) => {
  return NcNewsApi.post(`/articles/${article_id}/comments`);
}


// export const deleteComment = (article_id) => {
//   return NcNewsApi.delete(`/articles/${article_id}/comments`);
// }