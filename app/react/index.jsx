import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import axios from 'axios';

import TodoList from './components/todo_list';
import reducer from './reducers';
import { fetchTodoLists } from './actions'

const store = createStore(reducer);

const rootElement = document.getElementById('main');

class Sample extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodoLists());
  }

  render() {
    const { todoLists } = this.props;

    return (
      <div className="todo-lists">
        { todoLists.map(list =>
          <TodoList key={list.id} id={list.id} name={list.name}/>
        )}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    todoLists: state.todos.todoLists
  }
}

const Container = connect(mapStateToProps)(Sample);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>
, rootElement);
