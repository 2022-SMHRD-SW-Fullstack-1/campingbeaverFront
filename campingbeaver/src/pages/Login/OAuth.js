//REST_API_KEY 자기꺼 api key인지 확인 
const REST_API_KEY = "cf7a78d941b5d9b2470ad035a2afacc9";
const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

console.log('kakao OAuth')
//인가코드받는부분
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

