import { type FC } from 'react';
import './SuspendLoading.less';

const SuspendLoading: FC = () => {
  return (
    <div className="suspend-loading">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="loading-text">加载中...</div>
      </div>
    </div>
  );
};

export default SuspendLoading;
