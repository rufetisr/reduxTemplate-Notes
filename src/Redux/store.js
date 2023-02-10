import { createStore } from "redux";
import {rootReducer} from "./Reducer/rootReducer";

export let store = createStore(rootReducer);
