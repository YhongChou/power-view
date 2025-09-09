import { useEffect, useState } from 'react';
import type { BallDataType } from '@/api/data';
// import { getBallData } from '@/api';
import './ball.less';
import { getBallData } from '@/api';

const Ball = () => {
  const [currentData, setCurrentData] = useState<BallDataType[0] | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (currentData) {
      animate();
    }
  }, [currentData]);

  async function fetchData() {
    const res = await getBallData();
    if (res.code === 200) {
      // 默认使用第一个数据项
      if (res.data.length > 0) {
        setCurrentData(res.data[0]);
      }
    }
  }

  function animate() {
    if (!currentData) return;

    const count: HTMLElement | null = document.getElementById('count');
    const water: HTMLElement | null = document.getElementById('water');

    let currentP = 0;
    const targetP = currentData.percentage;

    let timer: ReturnType<typeof setInterval> | undefined;

    timer = setInterval(function () {
      currentP++;
      if (currentP > targetP) {
        clearInterval(timer);
        return;
      }
      count!.innerHTML = `${currentP}`;
      // 波浪上升动画效果
      water!.style.transform = `translateY(${100 - currentP}%)`;
    }, 60);
  }

  return (
    <div className="ball">
      <svg
        version="1.1"
        xmlns="https://www.w3.org/2000/svg"
        xmlnsXlink="https://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        style={{ display: 'none' }}
      >
        <symbol id="wave">
          <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
          <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
          <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
          <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
        </symbol>
      </svg>
      <div className="box">
        <div className="percent">
          <div className="percentNum" id="count">
            0
          </div>
          <div className="percentB">%</div>
        </div>
        <div id="water" className="water">
          <svg
            viewBox="0 0 560 20"
            preserveAspectRatio="none"
            className="water_wave water_wave_back"
          >
            <use xlinkHref="#wave"></use>
          </svg>
          <svg
            viewBox="0 0 560 20"
            preserveAspectRatio="none"
            className="water_wave water_wave_front"
          >
            <use xlinkHref="#wave"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Ball;
