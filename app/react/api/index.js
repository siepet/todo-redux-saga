import axios from 'axios';

const Api = {
  fetchTodoLists: () => {
    return axios.get('/todo_lists')
    .then((response) => {
      return response.data.todo_lists
    })
    .catch((response) => {
      debugger
    })
  }
}

export default Api
