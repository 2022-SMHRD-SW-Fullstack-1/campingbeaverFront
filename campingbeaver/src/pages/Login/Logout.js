import { useEffect } from "react";

function Logout({ setAuth }) {
  const logout = () => {
    alert(localStorage.userName + "님, 성공적으로 로그아웃 됐습니다 🔒");
    localStorage.removeItem("access_token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("com.naver.nid.access_token");
    localStorage.removeItem("userId");
    localStorage.removeItem("com.naver.nid.oauth.state_token");

    setAuth(false);
  };

  useEffect(() => {
    window.location.replace("/login");
    logout();
  }, []);
}

export default Logout;
