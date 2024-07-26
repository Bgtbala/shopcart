import {createStore} from "redux";
import itemfetch from "./reducer";

const store=createStore(itemfetch);

export default store;