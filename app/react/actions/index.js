let id = 0;

export const addTodoList = (todoList) => {
  return {
    type: 'ADD_TODO_LIST',
    id: id++,
    items: todoList,
  }
}

export const fetchTodoLists = (todoLists) => {
  return {
    type: 'FETCH_TODO_LISTS',
    todoLists
  }
}
