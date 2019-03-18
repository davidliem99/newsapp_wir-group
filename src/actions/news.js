import axios from 'axios';
import { GET_NEWS } from './types';

const NEWSAPI_BASEURL = "https://newsapi.org/v2/"
const NEWSAPI_KEY = "8fd304b52fab4e2cb6edb2c0a7d12251"

export const getNews = (category) => {
    return dispatch => {
        if(navigator.onLine){
            axios.get(`${NEWSAPI_BASEURL}top-headlines?country=id&category=${category}&apiKey=${NEWSAPI_KEY}`)
            .then((res) => {
                // console.log(res.data)
                // console.log(res.data.articles)
                localStorage.setItem('news', JSON.stringify(res.data.articles))
                dispatch({
                    type: GET_NEWS,
                    payload: res.data.articles
                })
            }).catch(err => console.log(err))
        } 
        else {
            let local = localStorage.getItem('news', JSON.parse('news'))
            dispatch({
                type: GET_NEWS,
                payload: local
            })
        }
        
    }

}