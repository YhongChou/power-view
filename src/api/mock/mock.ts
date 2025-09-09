import type { MockMethod } from 'vite-plugin-mock';
import {
  ballData,
  barData,
  countPanelData,
  exceptionMonitoringData,
  gaugeData,
  heatmapData,
  lineData,
  mapData,
  pieData,
  radarData,
  sankeyData,
  scatterData,
  treeData,
} from '../data';
import type { Result } from '@/services/types';

const formatSuccess: <T = unknown>(data: T) => Result<T> = data => {
  return {
    code: 200,
    data,
    message: '获取数据成功',
  };
};

const mockMethod: MockMethod[] = [
  // 饼图数据
  {
    url: '/api/pie',
    method: 'get',
    response: () => formatSuccess(pieData),
  },
  // 柱状图数据
  {
    url: '/api/bar',
    method: 'get',
    response: () => formatSuccess(barData),
  },
  // 折线图数据
  {
    url: '/api/line',
    method: 'get',
    response: () => formatSuccess(lineData),
  },
  // 计数面板数据
  {
    url: '/api/count-panel',
    method: 'get',
    response: () => formatSuccess(countPanelData),
  },
  // 水球图数据
  {
    url: '/api/ball',
    method: 'get',
    response: () => formatSuccess(ballData),
  },
  // 地图数据
  {
    url: '/api/map',
    method: 'get',
    response: () => formatSuccess(mapData),
  },
  // 雷达图数据
  {
    url: '/api/radar',
    method: 'get',
    response: () => formatSuccess(radarData),
  },
  // 仪表盘数据
  {
    url: '/api/gauge',
    method: 'get',
    response: () => formatSuccess(gaugeData),
  },
  // 散点图数据
  {
    url: '/api/scatter',
    method: 'get',
    response: () => formatSuccess(scatterData),
  },
  // 热力图数据
  {
    url: '/api/heatmap',
    method: 'get',
    response: () => formatSuccess(heatmapData),
  },
  // 树图数据
  {
    url: '/api/tree',
    method: 'get',
    response: () => formatSuccess(treeData),
  },
  // 桑基图数据
  {
    url: '/api/sankey',
    method: 'get',
    response: () => formatSuccess(sankeyData),
  },
  // 异常监控数据
  {
    url: '/api/error-monitor',
    method: 'get',
    response: () => formatSuccess(exceptionMonitoringData.slice(0, 10)),
  },
];

export default mockMethod;
