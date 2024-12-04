import { IconChevronLeft, IconSearch, IconShoppingCart } from '@tabler/icons-react';
import { debounce } from 'radashi';
import { ChangeEvent, useState } from 'react';

export function Search() {
  const [search, setSearch] = useState('');

  const handleSearch = debounce({ delay: 500 }, (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  });


  return (
    <div className=" flex justify-between items-center text-md text-gray-500">
      <div className="flex items-center gap-4">
        {search.length ? <IconChevronLeft color="gray" size={23} /> : <IconSearch color="gray" size={23} />}
        <input id="search" type="search" placeholder="Search for Products" name="search"
               className="w-64 bg-gray-100 p-1 focus-visible:outline-0" onChange={handleSearch} />
      </div>

      <IconShoppingCart color="#ea580c" size={27} cursor="pointer" />
    </div>
  );
}