import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ConfigProvider, App as AppContainer } from 'antd';
import zhCN from 'antd/locale/zh_CN';

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
    
        <AppContainer component={false}>
          <RouterProvider router={router} />
        </AppContainer>
    </ConfigProvider>
  );
};

export default App;
