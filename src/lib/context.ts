import { createContext } from 'react';

const CartContext = createContext<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}>({
  count: 0,
  setCount: () => {},
});

export default CartContext;
