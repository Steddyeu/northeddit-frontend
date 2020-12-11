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
  return NcNewsApi.get("/articles", {
    params: { topic: topic, limit: 50 },
  }).then((res) => {
    // console.log('res -->', res.data)
    return res.data.articles;
  });
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

export const getUser = (username) => {
  return NcNewsApi.get(`/users/${username}`);
};
//VOTES
export const upVoteArticle = (article_id) => {
  return NcNewsApi.patch(`/articles/${article_id}`, { inc_votes: 1 });
};

export const downVoteArticle = (article_id) => {
  return NcNewsApi.patch(`/articles/${article_id}`, { inc_votes: -1 });
};

export const commentUpVote = (article_id) => {
  return NcNewsApi.patch(`/articles/${article_id}/comments`, { inc_votes: 1 });
};

export const commentDownVote = (article_id) => {
  return NcNewsApi.patch(`/articles/${article_id}/comments`, { inc_votes: 1 });
};

export const postComment = (newComment, article_id) => {
  return NcNewsApi.post(`/articles/${article_id}/comments`, newComment).then(
    ({ data }) => {
      // console.log("data", data);
      return data.comment;
    }
  );
};

export const removeComment = (comment_id) => {
  return NcNewsApi.delete(`/comments/${comment_id}`).then((delCount) => {
    console.log("delcount", delCount);
    return delCount;
  });
};

//SORTBY
export const getSortByDateAsc = () => {
  return NcNewsApi.get(`/articles?&sort_by=created_at&order=asc`).then(
    (res) => {
      //console.log("sort-by-res-->", res.data.articles);
      return res.data.articles;
    }
  );
};

export const getSortByDateDesc = () => {
  return NcNewsApi.get(`/articles?&sort_by=created_at&order=desc`).then(
    (res) => {
     //console.log("sort-by-res-->", res.data.articles);
     return res.data.articles;
    }
  );
};

export const getSortByVotesAsc = () => {
  return NcNewsApi.get(`/articles?&sort_by=votes&order=desc`).then((res) => {
    // console.log(res.data.articles)
    return res.data.articles;

  });
};

export const getSortByVotesDesc = () => {
  return NcNewsApi.get(`/articles?&sort_by=votes&order=asc`).then((res) => {
    // console.log(res.data.articles)
    return res.data.articles;

  });
};
