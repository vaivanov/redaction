import { applyMiddleware, compose, combineReducers, createStore as reduxCreateStore } from 'redux'
import thunk from 'redux-thunk'
import data from '../../lib/data'


const devTools = typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : (v) => v

const defaultMiddleware = [
  thunk,
]

const defaultEnhancers = []

const createStore = ({
  initialState = {},
  connectedReducers = null,
  reducers = {},
  middleware = [],
  enhancers = [],
}) => {
  const finalMiddleware = [
    ...defaultMiddleware,
    ...middleware,
  ]

  const finalEnhancers = [
    ...defaultEnhancers,
    ...enhancers,
    devTools,
  ]

  const store = reduxCreateStore(
    connectedReducers !== null ? connectedReducers : combineReducers(reducers),
    initialState,
    compose(
      applyMiddleware(...finalMiddleware),
      ...finalEnhancers,
    ),
  )

  data.store = store

  return store
}


export default createStore
