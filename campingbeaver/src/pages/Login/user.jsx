

//user.jsx
// 액션 
const SET_USER = "SET_USER";
// 액션 생성
const setUser = createAction(SET_USER, (user) => ({ user }));
// 초기값
const initialState = {
  user: null,
  isLogin: false,
}
//middelware
const kakaoLogInDB = (code) => {
  return function (dispatch, getState, {history}){
    userAPI
      .kakaoLogIn(code)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem('Token', response.data.token);
        localStorage.setItem('username', response.data.username);
        dispatch(setUser({
          username: response.data.username,
          nickname: response.data.nickname,
          profileImgUrl: response.data.profileImgUrl
        }))
        history.replace('/home');
      })
      .catch((error) => {
        console.log("error: ", error);
        window.alert('로그인에 실패하였습니다. ')
        window.replace('/');
      })
  }
}
//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {
      draft.user = action.payload.user;
      draft.isLogin = true;
    })
  }, initialState
)

const actionCreators = {
  setUser,
  kakaoLogInDB,
}

export { actionCreators };