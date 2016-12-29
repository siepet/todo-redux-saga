const todoList = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO_LIST':
      return {
        id: action.id,
        items: action.items,
      }
    default:
      return state
  }
}

const initialState = {
  todoLists: [],
}

const todoLists = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO_LIST':
      return Object.assign({}, state, {
        todos: [...state.todoLists, todoList(undefined, action)]
      })
    case 'FETCH_TODO_LISTS':
      return Object.assign({}, state, {
        todos: action.todoLists
      })
    default:
      return state
  }
}

export default todoLists
