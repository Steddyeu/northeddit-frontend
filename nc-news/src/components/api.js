import axios from "axios"; 

export const getTopics = () => {
  return axios.get('https://ed-fe-nc-news-api.herokuapp.com/api/topics')
  .then((res) => {
    console.log('res -->', res)
  })
}