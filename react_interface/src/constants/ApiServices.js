import axios from 'axios';

export const client = {
  django_api: {
    client: axios.create({
      baseURL: 'http://127.0.0.1:8000/api/todoItems/',
      responseType: 'json'
    })
  }
}

// Api-key and Token
export const API_KEY = 'j05wd2ae49d212578ef13cb607cef64b';
export const SESSION_TOKEN = '7GJZh/PzWvDabpAIqw5qnKY/dvjc/3Xe';
//export const SESSION_TOKEN = 'Kw/xlaGwyV/6mmf6CF2oxo9Y4eqokxzO';
export const SONGKICK_API_KEY = 'mzzfkojpy82tOJLz';
export const GOOGLE_API_KEY = 'AIzaSyCdkuIQGc6zBWg22z3i7EalpRQL_79RLjU';

// Header
export const HEADERS = {
  'Content-Type': 'application/json'
}
  // 'api-key': 'j05wd2ae49d212578ef13cb607cef64b',
  // 'sessiontoken': '7GJZh/PzWvDabpAIqw5qnKY/dvjc/3Xe'
  //'sessiontoken': 'Kw/xlaGwyV/6mmf6CF2oxo9Y4eqokxzO'