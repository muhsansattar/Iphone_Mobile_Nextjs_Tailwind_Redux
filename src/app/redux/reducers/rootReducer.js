import { combineReducers } from "redux";
import mobileReducer from "./reducer";

const rootReducer=combineReducers({
    mobileReducer,
})

export default rootReducer;