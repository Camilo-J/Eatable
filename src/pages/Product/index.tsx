import { Search } from './components/Search';
import { FilterOption } from './components/FilterOption';


export function Products() {
  return (
    <div className="px-5 py-7 flex flex-col gap-20">
      <section>
        <Search />
        <div className="filterScrollBar mt-8 pl-4 text-lg flex gap-2 overflow-x-auto">
          {/*//filters*/}
          <FilterOption name="all" />
          <FilterOption name="fruits" />
          <FilterOption name="vegetables" />
          <FilterOption name="meat" />
          <FilterOption name="fish" />
        </div>
      </section>

      <section>
        // products
      </section>
    </div>
  );
}