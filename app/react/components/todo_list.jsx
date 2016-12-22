import React, { PropTypes } from 'react';
import axios from 'axios';
import TodoItem from './todo_item';

export default class TodoList extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      todo_items: [],
    }
  }

  componentWillMount() {
    axios.get(`/todo_lists/${this.props.id}/todo_items`)
    .then((response) => {
      this.setState((state, props) => {
        return {
          todo_items: response.data.todo_items
        }
      })
    })
    .catch((response) => {
    })
  }

  render() {
    return (
      <div className="todo__list">
        <div className="todo__list-name">{ this.props.name }</div>
        { this.state.todo_items.map(todo =>
          <TodoItem
            id={todo.id}
            body={todo.body}
            finished={!!todo.finished}
            key={todo.id}
          />
        )}
      </div>
    )
  }
}
