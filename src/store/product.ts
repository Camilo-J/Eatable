import { Product } from '../types/product.ts';
import { getProducts } from '../services/productsService.ts';
import { create } from 'zustand';
import { getFilters } from '../pages/Products/utils/getFilters.ts';

interface ProductState {
  products: Product[];
  search: string;
  filters: string[];
  getProducts: () => Promise<void>;
  filterSelected: string;
  updateFilter: (filter: string) => void;
  searchProducts: (search: string) => void;
}


export const useProductStore = create<ProductState>()((set) => ({
  products: [] as Product[],
  search: '',
  filterSelected: 'all',
  filters: [],
  getProducts: async () => {
    const response = await getProducts();
    const filters = getFilters(response);

    set({ products: response, filters });
  },
  updateFilter: (filter) => {
    set({ filterSelected: filter });
  },
  searchProducts: (search) => {
    set({ search });
  }
}));