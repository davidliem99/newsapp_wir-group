import axios from 'axios';
import { GET_NEWS } from './types';

const NEWSAPI_BASEURL = "https://newsapi.org/v2/"
const NEWSAPI_KEY = "8fd304b52fab4e2cb6edb2c0a7d12251"

export const getNews = (category) => {
    return dispatch => {
        axios.get(`${NEWSAPI_BASEURL}top-headlines?country=id&category=${category}&apiKey=${NEWSAPI_KEY}`)
        .then((res) => {
            // console.log(res.data)
            // console.log(res.data.articles)
            dispatch({
                type: GET_NEWS,
                payload: res.data.articles
            })
        }).catch(err => console.log(err))
    }

}