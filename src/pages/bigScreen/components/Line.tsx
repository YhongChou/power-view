import React from 'react';
import type { CommonChartProps } from '../../../components/CommonChat';
import CommonChart from '../../../components/CommonChat';

const Line: React.FC = () => {
  const initOption: CommonChartProps['initOption'] = {
    renderer: 'svg',
  };

  const option = {
    grid: {
    //   show: true,
      containLabel: true,
      //   left: '%',
      right: '20%',
      top: '20%',
      //   bottom: '10%',
    },
    xAxis: [
      {
        type: 'category',
        data: ['裤子', '高跟鞋', '袜子'],
        // name: '商品分类',
        axisLabel: {
          color: 'pink',
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        // name: '销量',
        axisLabel: {
          color: 'pink',
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '第一季度',
        type: 'line',
        smooth: true,
        barWidth: 20,
        data: [
          {
            name: '裤子',
            value: 10,
          },
          {
            name: '袜子',
            value: 20,
          },
          {
            name: '高跟鞋',
            value: 30,
          },
        ],
        symbolSize: 5,
        showSymbol: true,
        itemStyle: {
          color: '#20FF89',
          lineStyle: {
            color: '#20FF89',
            width: 2,
          },
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#20FF89',
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0)',
              },
            ],
          },
        },
      },
      {
        name: '第二季度',
        type: 'line',
        barWidth: 20,
        smooth: true,
        data: [
          {
            name: '裤子',
            value: 40,
          },
          {
            name: '袜子',
            value: 10,
          },
          {
            name: '高跟鞋',
            value: 30,
          },
        ],
        symbolSize: 5,
        showSymbol: true,
        itemStyle: {
          color: '#EA9502',
          lineStyle: {
            color: '#EA9502',
            width: 2,
          },
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#EA9502',
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0)',
              },
            ],
          },
        },
      },
    ],
    legend: {
      bottom: '5%',
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 20,
      textStyle: {
        color: '#64BCFF',
      },
    },
  };

  return (
    <CommonChart
      initOption={initOption}
      option={option}
    />
  );
};

export default Line;
