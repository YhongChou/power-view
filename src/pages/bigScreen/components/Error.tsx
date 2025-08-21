
import { useEffect, useState } from 'react';
import './error.less';
import { getErrorMonitor } from '../../../api';
import type { ExceptionMonitoringDataType } from '../../../api/data';

const Error = () => {

 const [data, setData] = useState<ExceptionMonitoringDataType>([]);

  useEffect(() => {
    getErrorMonitorData()
  }, []);

  async function getErrorMonitorData() {
    console.log('getErrorMonitorData');
    const res = await getErrorMonitor();
    if (res.code === 200) {
     setData(res.data);
    }
   
  }
  
  console.log(data);


  return (
    <div className='error-svg'>
      <svg
        id='yichang'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        width='456'
        height='127'
        viewBox='0 0 456 127'>
        <defs>
          <linearGradient
            id='hy-linear-gradient'
            x1='432'
            y1='61.625'
            x2='2'
            y2='61.625'
            gradientUnits='userSpaceOnUse'>
            <stop
              offset='0'
              stopColor='#4F378B'
            />
            <stop
              offset='0.301'
              stopColor='#D0BCFF'
            />
            <stop
              offset='0.624'
              stopColor='#4F378B'
            />
            <stop
              offset='0.994'
              stopColor='#D0BCFF'
            />
            <stop
              offset='1'
              stopColor='#D0BCFF'
            />
          </linearGradient>
          <linearGradient
            id='hy-linear-gradient-2'
            x1='432'
            y1='61.625'
            x2='2'
            y2='61.625'
            gradientUnits='userSpaceOnUse'>
            <stop
              offset='0'
              stopColor='#4F378B'
            />
            <stop
              offset='0.031'
              stopColor='#4F378B'
            />
            <stop
              offset='0.597'
              stopColor='#D0BCFF'
            />
            <stop
              offset='1'
              stopColor='#4F378B'
            />
          </linearGradient>
          <filter
            id='hy-filter'
            x='275'
            y='10'
            width='50'
            height='50'
            filterUnits='userSpaceOnUse'>
            <feGaussianBlur
              result='blur'
              stdDeviation='6.667'
              in='SourceAlpha'
            />
            <feComposite result='composite' />
            <feComposite result='composite-2' />
            <feComposite result='composite-3' />
            <feFlood
              result='flood'
              floodColor='#4F378A'
              floodOpacity='0.6'
            />
            <feComposite
              result='composite-4'
              operator='in'
              in2='composite-3'
            />
            <feBlend
              result='blend'
              in2='SourceGraphic'
            />
            <feBlend
              result='blend-2'
              in='SourceGraphic'
            />
          </filter>
          <filter
            id='hy-filter-2'
            x='67'
            y='-6'
            width='50'
            height='49'
            filterUnits='userSpaceOnUse'>
            <feGaussianBlur
              result='blur'
              stdDeviation='6.667'
              in='SourceAlpha'
            />
            <feComposite result='composite' />
            <feComposite result='composite-2' />
            <feComposite result='composite-3' />
            <feFlood
              result='flood'
              floodColor='#4F378A'
              floodOpacity='0.6'
            />
            <feComposite
              result='composite-4'
              operator='in'
              in2='composite-3'
            />
            <feBlend
              result='blend'
              in2='SourceGraphic'
            />
            <feBlend
              result='blend-2'
              in='SourceGraphic'
            />
          </filter>
        </defs>
        <path
          id='curve_right'
          className='hy-cls-1'
          d='M2.006,86.083H31.461l3.006-9.664,4.208,13.288,4.208-10.268,3.006,6.644H73.541l4.208-10.872L83.76,103l7.871-82.748,10.163,71.876,3.607-6.644h11.421l3.607,13.892L124.637,72.8l5.41,20.536,3.006-7.852h46.888l4.208-15.7,6.011,28.388,5.41-19.932,4.208,7.248h37.815L241,76l4,14,5-11,3,6h27l4-11,6,29,10-69,8,57,3-6h13l3,14,4-27,6,20,2-7h46l6-16,5,29,7-20,4,7h25'
        />
        <path
          id='curve'
          className='hy-cls-2'
          d='M2.006,86.083H31.461l3.006-9.664,4.208,13.288,4.208-10.268,3.006,6.644H73.541l4.208-10.872L83.76,103l7.871-82.748,10.163,71.876,3.607-6.644h11.421l3.607,13.892L124.637,72.8l5.41,20.536,3.006-7.852h46.888l4.208-15.7,6.011,28.388,5.41-19.932,4.208,7.248h37.815L241,76l4,14,5-11,3,6h27l4-11,6,29,10-69,8,57,3-6h13l3,14,4-27,6,20,2-7h46l6-16,5,29,7-20,4,7h25'
        />
        {Array.isArray(data) &&
          data.length &&
          data.map((item) => (
            <circle
              key={item.id}
              id={`curve_d_${item.id}`}
              className='hy-cls-4'
              cx='0'
              cy='0'
              r={item.value}
              filter='blur(2px)'>
              <animateMotion
                dur={item.dur}
                begin={item.begin}
                repeatCount='indefinite'
                rotate='auto'>
                <mpath href='#curve'></mpath>
              </animateMotion>
            </circle>
          ))}
      </svg>
    </div>
  );
};

export default Error;
