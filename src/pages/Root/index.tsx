import { Navigate, Route, Routes } from 'react-router';
import { SessionPage } from '../Session';
import { useUserStore } from '../../store/user.ts';
import { useEffect } from 'react';
import { Products } from '../Products';
import { useProductStore } from '../../store/product.ts';
import { Product } from '../Products/components/pages/Product';
import { Orders } from '../Orders';

export function Root() {
  const { user, getUser } = useUserStore();
  const products = useProductStore(state => state.products);
  const getProducts = useProductStore(state => state.getProducts);

  useEffect(() => {
    if (!user) getUser().catch(() => console.log('User not fetched'));
    if (products.length) return;

    getProducts().catch(() => console.log('Products not fetched'));
  }, [getUser, getProducts, user, products.length]);
  console.log(products);
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
          <Route path="orders" element={<Orders />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      }
    </Routes>
  );
}