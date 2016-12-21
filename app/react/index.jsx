import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo_list';

const rootElement = document.getElementById('main');

class Sample extends React.Component {
  render() {
    const todos = [{body:"hel1lo", finished:false},{body:"hello2",finished:true}];
    return (
      <TodoList name={"hello"} todo_items={todos}/>
    )
  }
};

ReactDOM.render(<Sample />, rootElement);
