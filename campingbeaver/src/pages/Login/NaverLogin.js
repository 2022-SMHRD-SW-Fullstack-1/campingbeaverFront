
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import naverImg from '../../components/img/naverLogo.png'
import './Login.css'

const NaverLogin = ({ auth, setAuth }) => {
    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState(null);

    const { naver } = window
    const NAVER_CLIENT_ID = 'ouUd18EIec7BAaiUuI6P'
    const NAVER_CALLBACK_URL = 'http://localhost:3000/Login'

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            // 팝업창으로 로그인 진행할 것인지?
            isPopup: false,
            // 버튼타입 

            loginButton: { color: 'green', type: 3, height: 55 },
            callbackHandle: true,

        })
        naverLogin.init();

        // 선언된 naverLogin 을 이용하여 유저 (사용자) 정보를 불러오는데  
        // 함수 내부에서 naverLogin을 선언하였기에 지역변수처리가 되어  
        // userinfo 정보를 추출하는 것은 지역변수와 같은 함수에서 진행주어야한다.

        // 아래와 같이 로그인한 유저 ( 사용자 ) 정보를 직접 접근하여 추출가능하다.
        // 이때, 데이터는 첫 연동시 정보 동의한 데이터만 추출 가능하다.

        // 백엔드 개발자가 정보를 전달해준다면 아래 요기! 라고 작성된 부분까지는 
        // 코드 생략이 가능하다.  

        naverLogin.getLoginStatus(async function (status) {
            if (status) {

                console.log('가져오는값 : ', naverLogin.user)
                const userEmail = naverLogin.user.email
                const userId = naverLogin.user.id
                const userName = naverLogin.user.name
                setUserInfo({ email: userEmail, id: userId, name: userName })
                localStorage.setItem('userName', userName)
                localStorage.setItem('userEmail', userEmail)
                localStorage.setItem('userId', userId)
                setAuth(true)
                window.location.replace('/')
            }
        })

        // 여기까지!
    }

    const location = useLocation();
    // 액세스 토큰 추출
    const userAccessToken = () => {
        window.location.href.includes('access_token') && getToken()
    }

    const getToken = () => {
        //const token = window.location.href.split('=')[1].split('&')[0]
        const token = location.hash.split('=')[1].split('&')[0];
        console.log('토큰값 : ', token);
        // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!   
        localStorage.setItem('access_token', token)
        //setGetToken(token)
    }

    const handleNaverClick = () => {
        const naverLoginButton = document.getElementById("naverIdLogin_loginButton");
        if (naverLoginButton) naverLoginButton.click();
    }

    // 화면 첫 렌더링 이후 바로 실행하기 위해 useEffect 사용
    useEffect(() => {
        initializeNaverLogin()
        userAccessToken()
        axios({
            url: '/beaver/main',
            method: 'post',
            data: { userInfo },
            baseURL: 'http://localhost:8123',
        }
        )
        console.log(auth)
    }, [])

    return (
        <>
            <div className='naverBtn' onClick={handleNaverClick}><img src={naverImg} width="40px" /><span className='naverSpan'>네이버 로그인 </span><span></span></div>
            {/* 태그에 id="naverIdLogin"를 해주지 않으면 오류발생 */}
            <div id="naverIdLogin" style={{ display: "none" }}></div>
        </>
    )
}
export default NaverLogin
