

import type { CommonChartProps } from '../../../components/CommonChat';
import CommonChart from '../../../components/CommonChat';
// import { pieData } from '../../../api/data';
import type  { PieDataType } from '../../../api/data';

import { useEffect, useMemo, useState } from 'react';
import { getPieData } from '../../../api';

const PieChart: React.FC = () => {

  const [pieData, setPieData] = useState<PieDataType>([]);

  useEffect(() => {
    fetchData()
  }, []);

  const options = useMemo(() => {
    return  {
      title: {
        text: `{textStyle|饼图示例}`,
        top: '45%',
        left: '25%',
        subtext: `{subTextStyle|销量&服装}`,
        textStyle: {
          rich: {
            textStyle: {
              fontSize: 20,
              color: 'white',
            },
          },
        },
        subtextStyle: {
          rich: {
            subTextStyle: {
              padding: [0, 10, 0, 10],
            },
          },
        },
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        formatter: function (name: string) {
          const item = pieData.find((item) => item.name === name);
          return `{nameStyle|${item?.name}}\n{saleStyle|销量：${item?.value}件}\n`;
        },
        textStyle: {
          rich: {
            nameStyle: {
              color: 'pink',
              // 图例和文字的间距
              padding: [10, 14],
            },
            saleStyle: {
              color: 'yellow',
              padding: [0, 0, 10, 14],
            },
          },
        },
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          roseType: 'area',
          center: ['35%', '50%'],
          radius: ['30%', '70%'],
          data: pieData,
          label: {
            show: false,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  }, [pieData]);

  
  async function fetchData() { 
    const res = await getPieData();
    if (res.code === 200) {
      setPieData(res.data);
    }
  }

    const initOption: CommonChartProps['initOption'] = {
        renderer: 'svg',
    }
  

    return (
      <CommonChart initOption={initOption} option={options}/>

  );
};

export default PieChart;
