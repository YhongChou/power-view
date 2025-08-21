import { createBrowserRouter, Navigate } from 'react-router-dom';
import NotFound from '../pages/layout/404';
import { createAuthRoute, type RouteConfig } from './config';
import { lazy } from 'react';
import BigScreenLayout from '../pages/layout/BigScreenLayout';

export const routesList: RouteConfig[] = [
  {
    path: '/',
    extra: true,
    element: (
      <Navigate
        to='/bigScreen'
        replace
      />
    ),
  },

  {
    path: '/bigScreen',
    Component: BigScreenLayout,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to='dashboard'
            replace
          />
        ),
      },
      {
        path: 'dashboard',
        name: '收获总览',
        Component: lazy(() => import('../pages/bigScreen/index')),
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
