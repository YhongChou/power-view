import { Navigate, createBrowserRouter } from 'react-router-dom';
import NotFound from '@/pages/layout/404';
import { type RouteConfig, createAuthRoute } from './config';
import { lazy } from 'react';
import BigScreenLayout from '@/pages/layout/BigScreenLayout';

export const routesList: RouteConfig[] = [
  {
    path: '/',
    extra: true,
    element: <Navigate to="/bigScreen" replace />,
  },

  {
    path: '/bigScreen',
    Component: BigScreenLayout,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: 'dashboard',
        name: '数据总览',
        Component: lazy(() => import('@/pages/bigScreen/index')),
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
];

const formatRoutes = createAuthRoute(routesList);

export const router = createBrowserRouter(formatRoutes);
