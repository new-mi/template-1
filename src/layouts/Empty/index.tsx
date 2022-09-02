import { memo } from 'react';
import { Outlet } from 'react-router-dom';

export const EmptyLayout = memo(function EmptyLayout() {
  return <Outlet />;
});

export default EmptyLayout;
