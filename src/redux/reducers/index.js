import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import AppReducer from './AppReducer';

export default combineReducers({
    auth: AuthReducer,
    profile:ProfileReducer,
    app: AppReducer
});
