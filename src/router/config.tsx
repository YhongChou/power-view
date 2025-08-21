import { Suspense } from 'react';
import type { FC } from 'react';
import type { MenuDataItem } from '@ant-design/pro-components';
import type { RouteObject } from 'react-router-dom';

export type RouteConfig = {
  name?: string;
  children?: RouteConfig[];
  permission?: boolean;
  // element?: LazyExoticComponent<ComponentType>;
  // } & Omit<RouteObject, "element">;
} & RouteObject &
  Partial<MenuDataItem>;


export function createAuthRoute(routes: RouteConfig[]) {
  return routes.map((route) => {
    const { permission = true, ...restProps } = route;
    let routeFormat: RouteConfig = {
      ...route,
    };
    if (permission) {
      routeFormat.element = route.element;
    }
    if (route.children?.length) {
      routeFormat.children = createAuthRoute(route.children);
    }

    return routeFormat;
  });
}
