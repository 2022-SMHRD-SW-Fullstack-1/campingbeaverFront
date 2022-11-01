import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
//import { AuthContext } from "../context/AuthProvider";

function Logout({auth, setAuth}) {

	const navigate = useNavigate();
	
	const logout = () => {
		
		localStorage.removeItem("access_token");
		localStorage.removeItem("userEmail");
		localStorage.removeItem("userName");

		alert(auth + "님, 성공적으로 로그아웃 됐습니다 🔒");
		setAuth(false);
		
		navigate("/");
	};

	useEffect(() => {
		logout();
	}, []);

}

export default Logout;