import type React from 'react';
import { scalePage } from '@/utils/useScalePage';
import { useEffect, useRef } from 'react';
import PieChart from './components/Pie';
import Line from './components/Line';
import Summary from './components/Summary';
import Count from './components/Count';
import Ball from './components/Ball';
import Bar from './components/Bar';
import Error from './components/Error';

import './index.less';

const Charts: React.FC = () => {
  const scaleDom = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const { triggerScalePage, on, off } = scalePage({
      scaleDom: scaleDom?.current,
    });
    triggerScalePage();
    on();
    return () => {
      off();
    };
  }, []);

  return (
    <div ref={scaleDom} className="screen-container">
      <div className="screen-bg">
        <div className="screen-content">
          <div className="top"></div>
          <div className="left">
            <div className="left-top">
              <PieChart />
            </div>
            <div className="left-bottom">
              <Line />
            </div>
          </div>
          <div className="center">
            <div className="center-top">
              <Summary />
            </div>
            <div className="center-bottom">
              <Count />
            </div>
          </div>
          <div className="right">
            <div className="right-top">
              <Ball />
            </div>
            <div className="right-middle">
              <Bar />
            </div>
            <div className="right-bottom">
              <Error />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
