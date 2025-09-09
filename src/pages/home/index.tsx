import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ndex.module.less';

// 定义按钮数据接口
interface ButtonItem {
  num: string;
  url: string;
  urlKey: string;
}

// 按钮数据
const btnArr: ButtonItem[] = [
  {
    num: 'one',
    url: '安全基础.png',
    urlKey: 'datav/security',
  },
  {
    num: 'two',
    url: '重大危险源.png',
    urlKey: 'datav/major-hazard',
  },
  {
    num: 'three',
    url: '双重预防.png',
    urlKey: 'datav/double-prevention-mechanism',
  },
  {
    num: 'four',
    url: '特殊作业.png',
    urlKey: 'datav/double-prevention-mechanism',
  },
];

const Index: React.FC = () => {
  const navigate = useNavigate();

  // 获取图片URL
  const getImageUrl = (url: string): string => {
    return new URL(`../assets/images/${url}`, import.meta.url).href;
  };

  // 处理按钮类名
  const btnClassHandle = (key: string): string => {
    const className = `btnItem${key.charAt(0).toUpperCase() + key.slice(1)}`;
    return styles[className];
  };

  // 处理按钮点击跳转
  const btnLinkHandle = (key: string): void => {
    navigate(`/${key}`);
  };

  return (
    <div className={styles.box}>
      <div className={styles.dvIndexMain}>
        <div className={styles.dvBtnGroup}>
          {btnArr.map((item, index) => (
            <div
              key={index}
              className={`${styles.btnItem} ${btnClassHandle(item.num)}`}
              onClick={() => btnLinkHandle(item.urlKey)}
            >
              <img src={getImageUrl(item.url)} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
