import { Search } from './components/Search';
import { FilterContainer } from './components/FilterContainer';
import { ProductContainer } from './components/ProductContainer';
import { Navbar } from '@/components/Navbar';


export function Products() {
  return (
    <div className="px-5 py-7 flex flex-col gap-14">
      <section>
        <Search />
        <FilterContainer />
      </section>

      <ProductContainer />
      <Navbar />
    </div>
  );
}