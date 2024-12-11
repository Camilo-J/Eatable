import { FilterOption } from '../FilterOption';
import { useProductStore } from '@/store/product.ts';

export function FilterContainer() {
  const filters = useProductStore(state => state.filters);
  const searchProducts = useProductStore(state => state.search);
  
  if (searchProducts.length) return null;

  return (
    <div data-testid="filter-container" className="filterScrollBar mt-8 pl-4 text-lg flex gap-2 overflow-x-auto">
      {filters.map(filter => (<FilterOption key={filter} name={filter} />))}
    </div>
  );
}