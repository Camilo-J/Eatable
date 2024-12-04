import { Route, Routes } from 'react-router';
import { SessionPage } from '../Session';
import { useUserStore } from '../../store/user.ts';
import { useEffect } from 'react';
import { Products } from '../Product';

export function Root() {
  const { user, getUser } = useUserStore();

  useEffect(() => {
    getUser().catch(() => console.log('User not fetched'));
  }, [getUser]);

  return (
    <Routes>
      {!user && <Route index path="/*" element={<SessionPage />} />}
      {user && <Route index path="/" element={<Products />} />}
    </Routes>
  );
}