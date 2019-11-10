import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import AppReducer from './AppReducer';
import SuperLikeReducer from './SuperLikeReducer';
import Auth2Reducer from './Auth2Reducer';
import ChatReducer from './ChatReducer';
export default combineReducers({
    auth: AuthReducer,
    profile:ProfileReducer,
    app: AppReducer,
    superLikes:SuperLikeReducer,
    auth2:Auth2Reducer,
    chat:ChatReducer

});
