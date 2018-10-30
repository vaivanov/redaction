import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

import FilterLink from '../containers/FilterLink'

const TodoList = ({ todos }) => (
  <div>
    <ul>
      {
        todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))
      }
    </ul>
    <p>
      Show:
    &nbsp;<FilterLink filter="SHOW_ALL">All</FilterLink>
      , <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      , <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>

  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
}

export default TodoList
