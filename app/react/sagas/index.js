import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from './../api';

function* fetchTodoLists(action) {
  try {
    const todoLists = yield call(Api.fetchTodoLists, action);
    yield put({type: 'ADD_TODO_LISTS', todo_lists: todoLists})
  } catch(e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeEvery("FETCH_TODO_LISTS", fetchTodoLists);
}

export default mySaga;
