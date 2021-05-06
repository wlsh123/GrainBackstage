/*
    能发送异步ajax请求的函数模块
*/
import axios from "axios";
export default function ajax(url, data = {}, type = "GET") {
  if (type === "GET") {
    //发GET请求
    return axios.get(url, { params: data });
  } else {
    //发POST请求
    return axios.post(url, data);
  }
}
