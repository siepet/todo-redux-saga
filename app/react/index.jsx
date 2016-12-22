import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import TodoList from './components/todo_list';

const rootElement = document.getElementById('main');

class Sample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todo_lists: [],
    }
  }

  componentWillMount() {
    axios.get('/todo_lists')
    .then((response) =>
      this.setState((state, props) => {
        return {
          todo_lists: response.data.todo_lists
        }
      })
    )
    .catch((response) => {
    });
  }

  render() {
    return (
      <div className="todo-lists">
        { this.state.todo_lists.map(list =>
          <TodoList key={list.id} id={list.id} name={list.name}/>
        )}
      </div>
    )
  }
};

ReactDOM.render(<Sample />, rootElement);
