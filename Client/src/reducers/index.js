import { combineReducers } from "redux";
import auth from './Auth'
import currentUser from './currentUser'
import Questions from './Questions'
import  users from './User'

export default combineReducers({
    auth, currentUser, Questions, users
})