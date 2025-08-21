import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import type { ECBasicOption } from 'echarts/types/dist/shared';
import _ from 'lodash';

export type CommonChartProps = {
  dom?: HTMLDivElement | null;
  theme?: string | object | null;
  initOption?: echarts.EChartsInitOpts;
  option?: ECBasicOption;
};

const CommonChart: React.FC<
  {
    children?: React.ReactNode;
  } & CommonChartProps
> = (props) => {
  const {
    theme = null,
    initOption = {
      renderer: 'svg',
    },
    option = {},
  } = props;

  const domRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.EChartsType>(null);

  useEffect(() => {
    if (!chartRef.current) {
      chartRef.current = echarts.init(domRef?.current, theme, initOption);
      chartRef.current.setOption(option);
      window.addEventListener('resize', resize);
    } else {
      chartRef.current.setOption(option);
    }

    // return () => {
    //   if (chartRef.current) {
    //     // chartRef.current.dispose();
    //     chartRef.current = null;
    //   }
    // };
  }, [initOption, option, theme]);

  useEffect(() => {
    return () => {
      window.addEventListener('resize', () => {
        resize();
      });
      dispose();
    };
  }, []);

  const dispose = () => {
    if (!chartRef.current) {
      return;
    }
    chartRef.current.dispose();
    chartRef.current = null;
  };

  const resize = _.debounce(function() {
     chartRef?.current?.resize()
  }, 100);

  return (
    <div
      ref={domRef}
      style={{ width: '100%', height: '100%' }}>
      {props?.children}
    </div>
  );
};

export default CommonChart;
