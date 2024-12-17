import { useParams } from 'react-router';
import { useProductStore } from '@/store/product.ts';
import { capitalize, omit } from 'radashi';
import { useOrderStore } from '@/store/order.ts';
import { type Product } from '@/types/product.ts';
import { Header } from '@/components/Header';

export function Product() {
  const { id } = useParams();
  const products = useProductStore(state => state.products);
  const addProductToCart = useOrderStore(state => state.addOrder);
  const newOrders = useOrderStore(state => state.newOrders);
  const productSelected = products.find(product => String(product.id) === id);
  const isProductInCart = newOrders.some(order => order.id === productSelected?.id);

  const handleAddProductToCart = () => {
    const productDetails = omit(productSelected as Product, ['id']);
    addProductToCart({ id: (productSelected?.id || 0), quantity: 1, productDetails });
  };

  return (
    <div className="px-5 py-10 font-code">
      <Header />
      <div className="px-12 mt-6 flex flex-col items-center gap-14">
        <div className="w-60 h-60">
          <img src={productSelected?.picture_url} alt={productSelected?.name}
               className="w-full h-full object-cover rounded-full" />
        </div>
        <section>
          <div className="text-center text-2xl font-semibold">
            <p className="text-gray-700">{capitalize(productSelected?.name || '')}</p>
            <p className="text-orange-600">${productSelected?.price}</p>
          </div>
          <div className="flex flex-col gap-0.5 mt-6 font-normal text-gray-700">
            <p>Description</p>
            <p className="text-base mt-5">{productSelected?.description}</p>
          </div>
        </section>
        <button
          data-testid="add-product-button"
          className={`w-80 h-16 px-4 py-3 rounded-3xl text-white ${isProductInCart ? 'bg-orange-500' : 'bg-orange-600'}`}
          onClick={handleAddProductToCart}>
          {isProductInCart ? 'Product in Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}