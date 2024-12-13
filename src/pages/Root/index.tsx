import { Navigate, Route, Routes } from 'react-router';
import { SessionPage } from '@/pages/Session';
import { useUserStore } from '@/store/user.ts';
import { use } from 'react';
import { Products } from '@/pages/Products';
import { Product } from '@/pages/Products/components/pages/Product';
import { Orders } from '@/pages/Orders';
import { Checkout } from '@/pages/Orders/components/pages/Checkout';
import { History } from '@/pages/Orders/components/pages/History';
import { Profile } from '@/pages/Profile';
import { UpdateProfile } from '@/pages/Profile/components/pages/UpdateProfile';

interface Props {
  userResponse: Promise<unknown>;
}

export function Root({ userResponse }: Props) {
  use(userResponse);
  const user = useUserStore(state => state.user);

  return (
    <Routes>
      {!user && <Route index path="/*" element={<SessionPage />} />}
      {user &&
        <>
          <Route path="/">
            <Route index element={<Navigate to="/products" />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Product />} />
          </Route>
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="history" element={<History />} />
          </Route>
          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="edit" element={<UpdateProfile />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </>
      }
    </Routes>
  );
}