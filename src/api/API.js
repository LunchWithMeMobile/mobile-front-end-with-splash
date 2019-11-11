export const PROTOCOL = 'http://';
export const HOST = '192.168.8.101:8080';
//API URL
export const BASEURL = `${PROTOCOL}${HOST}`;
export const LOGIN = `${PROTOCOL}${HOST}/users/authenticate`;
export const SIGNUP = `${PROTOCOL}${HOST}/users/register`;
export const SIGNUP2=`${PROTOCOL}${HOST}/users/registerdetails`;
export const FORGOTPASSWORD1=`${PROTOCOL}${HOST}/users/MforgotpasswordEmailVerification`;
export const FORGOTPASSWORD3=`${PROTOCOL}${HOST}/users/forgotPassword`;
export const CHAT_LIST = `${PROTOCOL}${HOST}/users/muserList`;
export const MESSAGE = `${PROTOCOL}${HOST}/messages`;
export const MAPTIME = `${PROTOCOL}${HOST}/users/meet`;