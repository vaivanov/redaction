import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import { Switch, Route } from 'react-router'

const App = () => (
  <div>
    <Switch>
      <Route exact path={'/'} component={VisibleTodoList} />
      <Route path={'/add'} component={AddTodo} />
    </Switch>
    <Footer />
  </div>
)

export default App
