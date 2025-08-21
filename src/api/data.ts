
export const pieData = [
  // { value: 1048, name: 'Search ' },
  // { value: 735, name: 'Direct' },
  // { value: 580, name: 'Email' },
  // { value: 484, name: 'Union ' },
  // { value: 300, name: 'Video  ' },
  { value: 1048, name: 'Search Engine' },
  { value: 735, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Union Ads' },
  { value: 300, name: 'Video Ads' },
];

// 异常监控
export const exceptionMonitoringData = [
  {
      "id": 1,
      "name": "异常1",
      "value": 5,
      "dur": "10s",
      "begin": "0s"
  },
  {
      "id": 2,
      "name": "异常2",
      "value": 3,
      "dur": "10s",
      "begin": "-3s"
  },
  {
      "id": 3,
      "name": "异常3",
      "value": 5,
      "dur": "10s",
      "begin": "-5s"
  }
]

export type PieDataType = typeof pieData

export type ExceptionMonitoringDataType = typeof exceptionMonitoringData