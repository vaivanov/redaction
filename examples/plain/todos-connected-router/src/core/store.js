import { combineReducers as reduxCombineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, combineReducers } from '../../../../../lib'
import reducers from '../reducers'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const appReducer = reduxCombineReducers({ ...combineReducers(reducers) })

const initialState = {}

const store = createStore({
  connectedReducers: connectRouter(history)(appReducer),
  initialState,
  middleware: [routerMiddleware(history)]
})


export default store
