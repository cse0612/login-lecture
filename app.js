"use strict";

//모듈
const express = require('express');
const app = express();

//라우팅  home>index.js 분리 ->  상대경로사용 . 반드시 
const home = require("./routes/home");  

//앱세팅  (별명, 폴더이름)
app.set("views", "./views");
app.set("view engine", "ejs");  //뷰엔진 => ejs사용

app.use("/", home);   // use -> 미들웨어를 등록해주는 메서드

module.exports = app; // app을 내보내야 다른곳에서 사용이 가능


