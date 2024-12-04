import { Product } from '../types/product.ts';
import { getProducts } from '../services/productsService.ts';
import { create } from 'zustand';
import { getFilters } from '../pages/Product/utils/getFilters.ts';

interface ProductState {
  products: Product[];
  filters: string[];
  getProducts: () => Promise<void>;
  filterSelected: string;
  updateFilter: (filter: string) => void;
}


export const useProductStore = create<ProductState>()((set) => ({
  products: [] as Product[],
  filterSelected: 'all',
  filters: [],
  getProducts: async () => {
    const response = await getProducts();
    const filters = getFilters(response);

    set({ products: response, filters });
  },
  updateFilter: (filter) => {
    set({ filterSelected: filter });
  }
}));