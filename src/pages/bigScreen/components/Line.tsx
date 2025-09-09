import React, { useEffect, useMemo, useState } from 'react';
import type { CommonChartProps } from '@/components/CommonChat';
import CommonChart from '@/components/CommonChat';
import type { LineDataType } from '@/api/data';
import { getLineData } from '@/api';

const Line: React.FC = () => {
  const [lineData, setLineData] = useState<LineDataType>({
    categories: [],
    series: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const initOption: CommonChartProps['initOption'] = {
    renderer: 'svg',
  };

  const option = useMemo(() => {
    return {
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
          data: lineData.categories,
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
      series: lineData.series.map((seriesItem, index) => ({
        name: seriesItem.name,
        type: 'line',
        smooth: true,
        barWidth: 20,
        data: seriesItem.data,
        symbolSize: 5,
        showSymbol: true,
        itemStyle: {
          color: index === 0 ? '#20FF89' : '#EA9502',
          lineStyle: {
            color: index === 0 ? '#20FF89' : '#EA9502',
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
                color: index === 0 ? '#20FF89' : '#EA9502',
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0)',
              },
            ],
          },
        },
      })),
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
  }, [lineData]);

  async function fetchData() {
    const res = await getLineData();
    if (res.code === 200) {
      setLineData(res.data);
    }
  }

  return <CommonChart initOption={initOption} option={option} />;
};

export default Line;
