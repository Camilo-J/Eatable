import { Product } from '../../../../types/product.ts';
import { useNavigate } from 'react-router';
import { capitalize } from 'radashi';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const navigate = useNavigate();
  if (!product) return null;

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      className="w-40 h-56 rounded-3xl flex flex-col items-center
       duration-500 cursor-pointer hover:scale-105 bg-white" onClick={handleClick}>
      <div className="w-32 h-32 rounded-full relative -top-6" style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.2)' }}>
        <img src={product.picture_url} alt={product.name} className="w-full h-full object-cover rounded-full" />
      </div>
      <p className="font-medium text-center text-xl mb-5">{capitalize(product.name)}</p>
      <p className="font-semibold text-center text-xl text-orange-600">${product.price}</p>
    </div>
  );
}