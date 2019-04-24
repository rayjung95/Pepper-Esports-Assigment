import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { multiClientMiddleware } from 'redux-axios-middleware'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import ReduxThunk from 'redux-thunk'
import { client } from './constants/ApiServices'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk,multiClientMiddleware(client)))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
