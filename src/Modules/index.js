import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import axios from 'axios'
//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";


enableES5();

const initState = []

const loadItem = async () => {
  try {
      const items = await axios.get("https://api.punkapi.com/v2/beers")
      console.log(items.data)       // Array(25)
      dispatch({type: "UPDATE_DATA", data: items.data})
  }
  catch {
    console.log('error')
  }
};
loadItem()
console.log(initState)

// const loadItem = async () => {
//   const items = await axios.get("https://api.punkapi.com/v2/beers")
//     .then((res) => {
//       dispatch({ action: "UPDATE_DATA", data: res.data })
//       console.log(data)
//   })
//     .catch(() => console.log('error'))
//   return items
// };
// loadItem()
// console.log(initState)

function reducer(state=initState, action) {
  switch(action.type) {
    case "UPDATE_DATA":
    console.log('action-type:', action.type, action.data[1])
      { return action.data };
    default: return state
  }
}

//axios 로 데이터 받아오기
// const loadItem = async () => {
//   const items = await axios.get("https://api.punkapi.com/v2/beers")
//     .then(res => {
//       //console.log(res.data)
//       beer = res.data;
//       return res.data
//     })
//     .catch(() => {
//       console.log('error')
//     });
//   console.log(items)
//   return items
// };
// loadItem()
// console.log(beer)

// let beer;
// function loadItem() {
//   return fetch("https://api.punkapi.com/v2/beers", {
//     method: 'GET',
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       let info = JSON.parse(data);
//       console.log(info);
//       beer = info;
//       return info
//   })
// }
// loadItem()
// console.log(await loadItem)



const rootReducer = combineReducers({
  reducer
});

// export default rootReducer;
export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([
  ]);
}
