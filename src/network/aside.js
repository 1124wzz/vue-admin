import { request, mock } from "./request";

export function getAside() {
  return request({
    url: "/aside",
  });
}

export function getTable() {
  return request({
    url: "/main",
  });
}

export function getEcharts() {
  return request({
    url: "/echarts",
  });
}

export function getUserInfo() {
  return request({
    url: "/user-info",
  });
}

export function getMall() {
  return request({
    url: "/mall",
  });
}

// export function add(form) {
//   return request({
//     url: "/add",
//     method: "post",
//     params: {
//       data: form,
//     },
//   });
// }
