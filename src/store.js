import { createStore } from "redux";
import counter from "./reducers/counter";
import { increment, decrement } from "./actions/index";

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
