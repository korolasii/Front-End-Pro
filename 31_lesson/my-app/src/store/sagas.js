import { takeEvery, put } from "redux-saga/effects";

function* loadTodos() {
    const todos = [
        { id: 1, text: "Learn Redux", completed: false },
        { id: 2, text: "Build a Todo App", completed: true },
    ];
    yield put({ type: "LOAD_TODOS_SUCCESS", payload: todos });
}

export default function* rootSaga() {
    yield takeEvery("LOAD_TODOS", loadTodos);
}
