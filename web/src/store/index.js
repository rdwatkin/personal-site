import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {
  createStore,
  applyMiddleware
} from '@reduxjs/toolkit'
import rootReducer from './reducers'

const configureStore = (initialState) => {
  if (process.env.NODE_ENV === 'production') {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, logger),
    )
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  )
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
