import {createStore} from "redux"
import rootred from "./components/services/reducers/main"
const store = createStore(
    rootred
);
export default store;
