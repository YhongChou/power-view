import http from '@/services/axios';

// TODO: 注意会有缓存，需要重新启动才能获取到新数据

// 饼图数据
export async function getPieData() {
  return http.request({
    url: '/api/pie',
    method: 'get',
  });
}

// 柱状图数据
export async function getBarData() {
  return http.request({
    url: '/api/bar',
    method: 'get',
  });
}

// 折线图数据
export async function getLineData() {
  return http.request({
    url: '/api/line',
    method: 'get',
  });
}

// 计数面板数据
export async function getCountPanelData() {
  return http.request({
    url: '/api/count-panel',
    method: 'get',
  });
}

// 水球图数据
export async function getBallData() {
  return http.request({
    url: '/api/ball',
    method: 'get',
  });
}

// 地图数据
export async function getMapData() {
  return http.request({
    url: '/api/map',
    method: 'get',
  });
}

// 雷达图数据
export async function getRadarData() {
  return http.request({
    url: '/api/radar',
    method: 'get',
  });
}

// 仪表盘数据
export async function getGaugeData() {
  return http.request({
    url: '/api/gauge',
    method: 'get',
  });
}

// 散点图数据
export async function getScatterData() {
  return http.request({
    url: '/api/scatter',
    method: 'get',
  });
}

// 热力图数据
export async function getHeatmapData() {
  return http.request({
    url: '/api/heatmap',
    method: 'get',
  });
}

// 树图数据
export async function getTreeData() {
  return http.request({
    url: '/api/tree',
    method: 'get',
  });
}

// 桑基图数据
export async function getSankeyData() {
  return http.request({
    url: '/api/sankey',
    method: 'get',
  });
}

// 异常监控数据
export async function getErrorMonitor() {
  return http.request({
    url: '/api/error-monitor',
    method: 'get',
  });
}
