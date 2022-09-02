import { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes as routesConfig } from '@/routes';

export const App = memo(function App() {
  const routes = useRoutes(routesConfig);
  return routes;
});
