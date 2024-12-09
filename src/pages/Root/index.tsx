import { Navigate, Route, Routes } from 'react-router';
import { SessionPage } from '../Session';
import { useUserStore } from '../../store/user.ts';
import { useEffect } from 'react';
import { Products } from '../Products';
import { useProductStore } from '../../store/product.ts';
import { Product } from '../Products/components/pages/Product';
import { Orders } from '../Orders';
import { Checkout } from '../Orders/components/pages/Checkout';
import { History } from '../Orders/components/pages/History';
import { Profile } from '../Profile';
import { UpdateProfile } from '../Profile/components/pages/UpdateProfile';

export function Root() {
  const { user, getUser } = useUserStore();
  const products = useProductStore(state => state.products);
  const getProducts = useProductStore(state => state.getProducts);

  useEffect(() => {
    if (!user) getUser().catch(() => console.log('User not fetched'));
    if (products.length) return;

    getProducts().catch(() => console.log('Products not fetched'));
  }, [getUser, getProducts, user, products.length]);

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