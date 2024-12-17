import { useProductStore } from '@/store/product.ts';
import { ProductCard } from '../ProductCard';

export function ProductContainer() {
  const products = useProductStore(state => state.products);
  const filterSelected = useProductStore(state => state.filterSelected);
  const searchedProduct = useProductStore(state => state.search);

  const productsFiltered = products.filter(product => {
    if (searchedProduct.length) return product.name.toLowerCase().includes(searchedProduct.toLowerCase());
    if (filterSelected === 'all') return true;
    return product.category === filterSelected;
  });

  return (
    <section
      data-testid="product-container"
      className="filterScrollBar h-[550px] pt-8 grid grid-cols-2 justify-center justify-items-center gap-x-3 gap-y-14 overflow-auto">
      {productsFiltered.map((product) => (<ProductCard key={`card-${product.id}`} product={product} />))}
    </section>
  );
}