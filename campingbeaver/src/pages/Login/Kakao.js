import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators as userActions } from "redux";


const Kakao = (props) => {
    const dispatch = useDispatch();

    const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get('code');
    console.log(code)
    
    
    React.useEffect(async () =>{
        await dispatch(userActions.kakaoLogin(code));
    }, []);

      

    return (
        <h1>
       
                잠시만 기다려 주세요! 로그인 중입니다.
          
        </h1>
    )

}

export default Kakao;