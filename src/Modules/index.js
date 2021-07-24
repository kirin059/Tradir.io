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



const initState = [];

const loadItem = async () => {
  try {
    const res = await axios.get("https://api.punkapi.com/v2/beers");
    initState.push(...res.data);
  }
  catch {
    console.log('error')
  }
};
loadItem()

function reducer (state = initState, action) {
    switch(action.type) {
      // case "OPEN": {
      //   return action.payload;
      // }
      default:
        return state;
    }
}

function reducer2 (state = initState, action) {
  switch(action.type) {
    case "OPEN": {
      const found = initState.findIndex((a) => { return a.id === action.payload })
      console.log(found)
      if (found >= 0) {
        const setBeer = [...initState];
        
        return setBeer[found]
      }
      return action.payload;
    }
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  reducer, reducer2
})

// export default rootReducer;
export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([
  ]);
}

