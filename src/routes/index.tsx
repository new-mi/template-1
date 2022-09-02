import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

// layouts
const EmptyLayout = loadable(() => import('@/layouts/Empty'));

// pages
const HomePage = loadable(() => import('@/pages/Home'));
const OtherPage = loadable(() => import('@/pages/Other'));

// templates
const TestTemplate = loadable(() => import('@/components/templates/TestTemplate'));

export const routes: RouteObject[] = [
  {
    element: <EmptyLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'other',
        element: <OtherPage />,
        children: [
          {
            path: ':id',
            element: <TestTemplate />,
          },
        ],
      },
    ],
  },
];
