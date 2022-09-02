import { memo } from 'react';
import { Outlet } from 'react-router-dom';

export const OtherPage = memo(function OtherPage() {
  return (
    <>
      <h1>Other Page</h1>
      <Outlet />
    </>
  );
});

export default OtherPage;
