import { useContext } from 'react';
import CartContext from '@/lib/context';

export default function Button() {
  const { setCount } = useContext(CartContext);

  return (
    <button
      onClick={() => setCount((prev: number) => prev + 1)}
      className="rounded-lg bg-black text-white py-2 px-4 hover:bg-gray-700 transition-colors"
    >
      Add to cart
    </button>
  );
}
