import React from 'react';
import CountUp from 'react-countup';

import './count.less'

const Count = () => {
  const panelData = [
    {
      id: 1,
      title: '充电桩总数(个)',
      totalNum: 0,
      unit: '万',
      percentage: 0,
      isUp: true,
    },
    {
      id: 2,
      title: '年增长总数(个)',
      totalNum: 0,
      unit: '万',
      percentage: 0,
      isUp: true,
    },
    {
      id: 3,
      title: '月增长总数(个)',
      totalNum: 0,
      unit: '万',
      percentage: 0,
      isUp: false,
    },
  ];

  return (
    <div className='bottom-content'>
      {panelData.map((item: any) => (
        <div key={item.id} className={`panel${item.id}`}>
          <div className='pan-left'>
            <div className='title'>{item.title}</div>
            <span
              id={`total-num-${item.id}`}
              className='number'>
              <CountUp
                end={item.totalNum}
                decimals={1}
                duration={2}
                useGrouping={false}
              />
            </span>
            <span className='unit'>{item.unit}</span>
          </div>
          <div className='pan-right'>
            <span
              className={
                item.isUp ? 'up-triangle' : 'triangle down-triangle'
              }></span>
            <span
              id={`percentage-num-${item.id}`}
              className='percentage'>
              <CountUp
                end={item.percentage}
                decimals={1}
                duration={2}
                useGrouping={false}
                suffix='%'
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Count;
