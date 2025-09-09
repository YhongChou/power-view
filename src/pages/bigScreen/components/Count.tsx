import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import type { CountPanelDataType } from '@/api/data';
import { getCountPanelData } from '@/api';

import './count.less';

const Count = () => {
  const [panelData, setPanelData] = useState<CountPanelDataType>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await getCountPanelData();
    if (res.code === 200) {
      setPanelData(res.data);
    }
  }

  return (
    <div className="bottom-content">
      {panelData.map((item: any) => (
        <div key={item.id} className={`panel${item.id}`}>
          <div className="pan-left">
            <div className="title">{item.title}</div>
            <span id={`total-num-${item.id}`} className="number">
              <CountUp
                end={item.totalNum}
                decimals={1}
                duration={2}
                useGrouping={false}
              />
            </span>
            <span className="unit">{item.unit}</span>
          </div>
          <div className="pan-right">
            <span
              className={item.isUp ? 'up-triangle' : 'triangle down-triangle'}
            ></span>
            <span id={`percentage-num-${item.id}`} className="percentage">
              <CountUp
                end={item.percentage}
                decimals={1}
                duration={2}
                useGrouping={false}
                suffix="%"
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Count;
