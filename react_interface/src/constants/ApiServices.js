import axios from 'axios';

//  Api Clients
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
