import React, { PropTypes } from 'react';
import TodoItem from './todo_item';

export default class TodoList extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    todo_items: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="todo__list">
        { this.props.todo_items.map(todo =>
          <TodoItem
            body={todo.body}
            finished={todo.finished}
            key={todo.body}
          />
        )}
      </div>
    )
  }
}
