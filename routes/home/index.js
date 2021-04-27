"use strict";

const express = require('express');
const router = express.Router();

//기존라우팅방식
// router.get("/", (req,res) => {
//   res.render("home/index");
// });

//라우팅분리
const ctrl = require(".
/home.ctrl");
router.get("/", ctrl.home);
router.get("/login", ctrl.login);

//전체 내보내기 => app.js에서 받음
module.exports = router;


/*
MVC 패턴

*  웹서버에서 라우터 분리 => home/index.js

*  라우터의 Controller 부분 분리 =>  home/home.ctrl.js 
(req,res) => {
  res.render("home/index");
});

*/
