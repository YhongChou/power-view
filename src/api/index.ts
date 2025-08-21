import http from "../services/axios";


// TODO: 注意会有缓存，需要重新启动才能获取到新数据
export async function getPieData() {
  return http.request({
    url: '/api/pie',
    method: 'get',
  });
}

export async function getErrorMonitor() {
  return http.request({
    url: '/api/error-monitor',
    method: 'get',
  });
}
