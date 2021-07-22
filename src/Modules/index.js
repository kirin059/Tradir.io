import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";
import axios from "axios";

enableES5();

// const initState = []

// function loadItem() {
//   const items = axios.get("https://api.punkapi.com/v2/beers")
//     .then(res => {
//       console.log(res.data)
//       dispatch({ type: "UPDATE_DATA", data: res.data })
//     })
//     .catch(() => {
//       console.log('error')
//     });
//   console.log(items)
//   return items
// };
// loadItem()
// console.log(initState)





const loadItem = async () => {
  try {
    const res = await axios.get("https://api.punkapi.com/v2/beers");
      console.log(items.data)       // Array(25)
      dispatch({ type: "SUCCESS", data: res.data })
  }
  catch {
    console.log('error')
  }
};
loadItem()

function reducer (state = [], action) {
    switch(action.type) {
      case "SUCCESS":
        return action.data;
      default:
        return state;
    }
}


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

