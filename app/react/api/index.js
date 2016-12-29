import axios from 'axios';

const Api = {
  fetchTodoLists: () => {
    debugger
    return axios.get('/todo_lists')
    .then((response) => {
      debugger
    })
    .catch((response) => {
      debugger
    })
  }
}

export default Api
