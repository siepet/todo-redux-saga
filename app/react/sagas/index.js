import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchTodoLists(action) {
  try {
    debugger
  } catch(e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeEvery("FETCH_TODO_LISTS", fetchTodoLists);
}

export default mySaga;
