import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import type { RouteConfig } from '../../router/config';
// import logo from './../../assets/logo.png';

import { useEffect } from 'react';

const BigScreenLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes('bigScreen')) {
      document.querySelector('body')?.classList.add('big-screen-body');
    }
  }, [location]);

  const routeToMenu = (routes: RouteConfig[]): RouteConfig[] => {
    return routes.map((route: RouteConfig) => {
      if (route.children && route.children.length) {
        const { children, ...rest } = route;
        return {
          ...rest,
          children: routeToMenu(children),
        };
      }
      return { ...route };
    });
  };

  return (
      <Outlet />
  );
};

export default BigScreenLayout;
