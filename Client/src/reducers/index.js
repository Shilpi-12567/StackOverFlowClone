import { combineReducers } from "redux";
import authReducer from './Auth'
 import currentUserReducer from './currentUser'
import QuestionReducer from './Questions'
import UserReducer from './Users'

export default combineReducers({
    authReducer, 
 currentUserReducer,
    QuestionReducer, UserReducer
})