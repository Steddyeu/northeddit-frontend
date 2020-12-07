import axios from "axios"; 

const getTopics = () => {
  return axios
  .get('https://ed-fe-nc-news-api.herokuapp.com/api/topics')
  .then((res) => {
    console.log('res -->', res.topics)
    return res.topics;
  })
}

export default getTopics;
