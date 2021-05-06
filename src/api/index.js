/*
包含应用中所有接口请求函数的模块
*/
import ajax from "./ajax";
export const reqLogin = (username, password) =>
  ajax("/login", { username, password }, "POST");

export const reqAdd = (user) => ajax("/manage/user/add", user, "POST");
