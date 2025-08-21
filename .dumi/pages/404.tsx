import { HomeOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface NotFoundProps {
  router: {
    push: (pathname: string) => void;
    replace: (pathname: string) => void;
  };
}

const DIRECT_MAP: Record<string, string> = {
  '/components': '/components/common-chat',
};

const NotFoundPage: React.FC<NotFoundProps> = ({ router }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const directLinks = Object.keys(DIRECT_MAP);
  }, []);

  return (
    <Result
      status='404'
      title='404'
      subTitle={'访问的页面不存在'}
    />
  );
};

export default NotFoundPage;
