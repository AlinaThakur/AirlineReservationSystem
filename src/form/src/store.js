
import { createStore } from "redux";
// import rootReducer from "./reducers/index";

import changeUserNumber from "./reducers/updown";
const store = createStore(changeUserNumber,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;



