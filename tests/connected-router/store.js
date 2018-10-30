import { combineReducers as reduxCombineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, combineReducers } from '../../lib'
import localReducers from './reducers'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const reducers = reduxCombineReducers({ ...combineReducers(localReducers) })

const store = createStore({
  connectedReducers: connectRouter(history)(reducers),
  initialState: {},
  middleware: [routerMiddleware(history)]
})


export default store
