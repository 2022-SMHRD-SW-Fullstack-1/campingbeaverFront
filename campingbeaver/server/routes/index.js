const express = require('express');
const router = express();

// http://localhost:4000/ 으로 접속 시 응답메세지 출력
router.get('/test', (req,res) => {
    res.send({ test : "this is test!!"});
})

module.exports = router;