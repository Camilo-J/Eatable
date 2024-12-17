import { useProductStore } from '../../../../store/product.ts';
import { capitalize } from 'radashi';

interface Props {
  name: string;
}

export function FilterOption({ name }: Props) {
  const filterSelected = useProductStore(state => state.filterSelected);
  const updateFilter = useProductStore(state => state.updateFilter);

  const handleFilter = () => {
    updateFilter(name);
  };

  return (
    <div className="cursor-pointer h-14" style={{ color: filterSelected === name ? '#fa4a0c' : '' }}
         onClick={handleFilter}>
      <p className="px-4">{capitalize(name)}</p>
      <div className="mt-2.5 h-0.5"
           style={{
             background: 'linear-gradient(to right, #fa4a0c 50%, #f6f6f9 50%)',
             backgroundSize: '200% 100%',
             backgroundPosition: filterSelected === name ? 'left bottom' : 'right bottom',
             transition: 'all 0.5s ease-out'
           }} />
    </div>
  );
}