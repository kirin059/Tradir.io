import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import axios from 'axios'
//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();



// axios 로 데이터 받아오기
const loadItem = async () => {
  const items = await axios.get("https://api.punkapi.com/v2/beers")
    .then(res => {
      //console.log(res.data)
      return res.data;
    })
    .catch(() => {
      console.log('error')
    });
  return [items]
};
const beer = loadItem();

function reducer(state = beer, action) {
  return state
}



// 리듀서 생성
const rootReducer = combineReducers({
  // 리듀서 넣기
});

// export default rootReducer;
export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([
  ]);
}
