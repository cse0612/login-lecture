"use strict";

const app = require("../app");  //app.js가져오기
const PORT = 3000;

//서버실행
app.listen(PORT, ()=> {
  console.log("서버 가동");
});

