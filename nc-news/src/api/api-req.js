import axios from "axios"; 

export const getTopics = () => {
  return axios
  .get('https://ed-fe-nc-news-api.herokuapp.com/api/topics')
  .then((topics) => {
    console.log('res -->', topics.data.topics)
    return topics.data;
  })
}
