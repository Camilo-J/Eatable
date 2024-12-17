import { IconChevronLeft, IconSearch, IconShoppingCart } from '@tabler/icons-react';
import { debounce } from 'radashi';
import { ChangeEvent, useRef } from 'react';
import { useProductStore } from '../../../../store/product.ts';
import { useNavigate } from 'react-router';

export function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const search = useProductStore(state => state.search);
  const searchProducts = useProductStore(state => state.searchProducts);
  const navigate = useNavigate();
  const handleSearch = debounce({ delay: 500 }, (event: ChangeEvent<HTMLInputElement>) => {
    searchProducts(event.target.value);
  });

  const resetSearch = () => {
    if (inputRef.current) inputRef.current.value = '';
    searchProducts('');
  };


  return (
    <div className=" flex justify-between items-center text-md text-gray-500">
      <div className="flex items-center gap-4">
        {search.length ? <IconChevronLeft color="gray" size={23} onClick={resetSearch} cursor="pointer" /> :
          <IconSearch color="gray" size={23} />}
        <input ref={inputRef} id="search" type="search" placeholder="Search for Products" name="search"
               className="w-64 bg-gray-100 p-1 focus-visible:outline-0" onChange={handleSearch} />
      </div>

      <IconShoppingCart color="#ea580c" size={27} cursor="pointer" onClick={() => navigate('/orders')} />
    </div>
  );
}