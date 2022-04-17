import axios from "axios";

// 4. 因为intance默认返回的时Promise so
export function request(config) {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 5000,
  });
  // axios 拦截器
  // 请求拦截
  instance.interceptors.request.use(
    (config) => {
      // console.log(config)
      // 拦截之后做一些处理，处理完了之后返回出去
      return config;
    },
    (err) => {
      console.log(err);
    }
  );
  // 响应拦截
  instance.interceptors.response.use(
    (res) => {
      // console.log(res);
      // 将我们用到的数据返回过去就可以了
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  return instance(config);
}
