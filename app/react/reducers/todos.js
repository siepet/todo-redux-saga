const todoList = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO_LIST':
      return {
        id: action.id,
        name: action.name,
      }
    case 'ADD_TODO_LISTS':
      const lists = action.todoLists.map(list => {
        return {
          id: list.id,
          name: list.name
        }
      })
      return lists
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
        todoLists: [...state.todoLists, todoList(undefined, action)]
      })
    case 'ADD_TODO_LISTS':
      return Object.assign({}, state, {
        todoLists: [...state.todoLists, ...todoList(undefined, action)]
      })
    default:
      return state
  }
}

export default todoLists
