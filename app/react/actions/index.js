let id = 0;

export const addTodoList = (todoList) => {
  return {
    type: 'ADD_TODO_LIST',
    id: id++,
    items: todoList,
  }
}

export const addTodoLists = (inTodoLists) => {
  let todoLists = inTodoLists.map(list => {
    return {
      id: list.id,
      name: list.name,
    }
  })

  return {
    type: 'ADD_TODO_LISTS',
    todoLists
  }
}

export const fetchTodoLists = (todoLists) => {
  return {
    type: 'FETCH_TODO_LISTS',
    todoLists
  }
}
