// express 모듈 호출
const express = require('express');
const app = express();
// const PORT = process.env.PORT || 4000;
const api = require('./routes/index');
// api 처리는 './routes/index' 에서 일괄처리
app.use('/api', api);

// http://localhost:4000/ 으로 접속 시 응답메세지 출력
// app.get('/', (req,res) => {
//     res.send({ test : "this is test!!"});
// })

// server port 4000 할당
// 클라이언트와 다른 번호로 충돌 나지 않도록
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})