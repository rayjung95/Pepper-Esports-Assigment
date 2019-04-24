import axios from 'axios';

export const client = {
  django_api: {
    client: axios.create({
      baseURL: 'http://127.0.0.1:8000/api/todoItems/',
      responseType: 'json'
    })
  }
}


// Header
export const HEADERS = {
  'Content-Type': 'application/json'
}
  // 'api-key': 'j05wd2ae49d212578ef13cb607cef64b',
  // 'sessiontoken': '7GJZh/PzWvDabpAIqw5qnKY/dvjc/3Xe'
  //'sessiontoken': 'Kw/xlaGwyV/6mmf6CF2oxo9Y4eqokxzO'