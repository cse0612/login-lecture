// 콘트롤러 부분 
"use strict";

const home = (req,res) => {
  res.render("home/index");
};

const login = (req,res) => {
  res.render("home/login")
};

// 외부로 객체 전달 => index.js 에서 받음
module.export = {
  home,
  login,
}
