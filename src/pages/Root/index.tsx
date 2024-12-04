import { Route, Routes } from 'react-router';
import { SessionPage } from '../Session';
import { useUserStore } from '../../store/user.ts';

export function Root() {
  const { user } = useUserStore();

  return (
    <Routes>
      {!user && <Route path="/*" element={<SessionPage />} />}
      {user && <Route path="/*" element={<h1>Welcome {user.name}</h1>} />}
    </Routes>
  );
}