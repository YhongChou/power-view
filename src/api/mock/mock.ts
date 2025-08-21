import type { MockMethod } from 'vite-plugin-mock';
import { pieData, exceptionMonitoringData } from '../data';
import type { Result } from '../../services/types';

const formatSuccess: <T = unknown>(data: T) => Result<T> = (data) => {
  return {
    code: 200,
    data,
    message: '获取数据成功',
  };
};

const mockMethod: MockMethod[] = [
  {
    url: '/api/pie',
    method: 'get',
    response: () => formatSuccess(pieData),
  },
  {
    url: '/api/error-monitor',
    method: 'get',
    response: () => formatSuccess(exceptionMonitoringData.slice(0, 10)),
  },
];

export default mockMethod;
