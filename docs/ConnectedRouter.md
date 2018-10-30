## Usage

#### `actions/users.js`
```js
import reducers from 'core/reducers'

export const getAll = () => {
  fetch({
    endpoint: '/api/users',
    method: 'GET'
  })
    .then((result) => {
      reducers.users.put(result)
    })
}
```

#### `reducers/users.js`
```js
export const initialState = {
  list: [],
}

export const put = (state, payload) => ({
  ...state,
  list: [
    ...state.list,
    payload,
  ]
}) 
```

#### `core/store.js`

```js
import { combineReducers as reduxCombineReducers } from 'redux'
import { createStore, combineReducers } from 'redaction'
import { reducer as form } from 'redux-form'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import reducers from 'reducers'
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const initialState = {}

const rootReducer = {
  ...combineReducers(reducers),
  form
};

const connectedReducers = connectRouter(history)(reduxCombineReducers(rootReducer));

const store = createStore({
  connectedReducers,
  initialState,
  middleware: [routerMiddleware(history)]
})

export default store
```

#### `core/reducers.js`

```js
import { wrapReducers } from 'redaction'
import reducers from 'reducers'

export default wrapReducers(reducers)
```

#### `components/Posts.js`

```js
import React from 'react'
import { users } from 'actions'

export default class Posts extends React.Component {
  componentWillMount() {
    users.getAll()
  }
}
```


## Features

#### Connect

There is sugar to connect state to components nifty:

```js
import React, { Component } from 'react'
import { connect } from 'redaction'

// option 1
@connect(state => ({
  todos: state.todos.list,
}))
// option 2
@connect({
  todos: 'todos.list',
})
// option 3
@connect({
  todos: (state) => state.todos.list,
})
export default class TodosList extends Component {}
```


## Examples

[Repo example](https://github.com/pavelivanov/redaction/tree/master/examples/plain/todos-connected-router)
