import { useEffect, useMemo, useState } from 'react';
import CommonChart, {
  type CommonChartProps,
} from '../../../components/CommonChat';
import type { BarDataType } from '../../../api/data';
import { getBarData } from '../../../api';

const Bar = () => {
  const [data, setData] = useState<BarDataType>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const options: CommonChartProps['option'] = useMemo(() => {
    const cat = data.map(item => item.name);
    return {
      gird: {
        top: '20%',
        right: '10%',
      },
      xAxis: {
        type: 'category',
        name: '种类',
        data: cat,
        show: true,
        axisLine: {
          show: true,
        },
        lineStyle: {
          color: '#42A4FF',
        },
        axisTick: {
          show: true,
        },
        axisLabel: {
          show: true,
          color: 'white',
          ellipsis: '...',
          showMinLabel: true,
          rotate: -30,
          overflow: 'truncate',
        },
        nameTextStyle: {
          color: 'white',
        },
      },
      yAxis: {
        type: 'value',
        name: '销量',
        nameTextStyle: {
          color: 'white',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#42A4FF',
          },
        },
        axisTick: {
          show: true,
        },
        axisLabel: {
          color: 'white',
        },
        //   minorSplitLine: {
        // show: true,
        //   },
      },
      series: [
        {
          type: 'bar',
          //   name: 'Access From',
          data,
          label: {
            show: true,
          },
          labelLine: {
            show: true,
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#01B1FF', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#033BFF', // 100% 处的颜色
                },
              ],
            },
          },
        },
      ],
    };
  }, [data]);

  async function fetchData() {
    const res = await getBarData();
    if (res.code === 200) {
      setData(res.data);
    }
  }

  return <CommonChart option={options} />;
};

export default Bar;
