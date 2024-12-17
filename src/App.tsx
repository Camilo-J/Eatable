import { Root } from './pages/Root';
import { Suspense } from 'react';
import { LoadingPage } from './components/LoadingPage';
import { useUserStore } from './store/user.ts';
import { useProductStore } from './store/product.ts';
import { tryit } from 'radashi';

function App() {
  const getUser = useUserStore(state => state.getUser);
  const user = useUserStore(state => state.user);
  const products = useProductStore(state => state.products);
  const getProducts = useProductStore(state => state.getProducts);

  const executeFunctions = async () => {
    if (!user) {
      const [error] = await tryit(getUser)();
      if (error) console.log('User not fetched');

      return { user };
    }

    if (products.length) return;

    const [error] = await tryit(getProducts)();
    if (error) console.log('Products not fetched');
    return { user, products };
  };
  
  return (
    <div className="bg-gray-100 max-w-md w-full mt-4 rounded-3xl font-code" style={{ height: '900px' }}>
      <Suspense fallback={<LoadingPage />}>
        <Root userResponse={executeFunctions()} />
      </Suspense>
    </div>
  );
}

export default App;
