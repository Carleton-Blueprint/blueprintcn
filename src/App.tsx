import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import Cart from './components/Card';
import Product from './components/Product';
import CartContext from './lib/context';
import useTheme from './hooks/useTheme';

function App() {
  const [count, setCount] = useState(0);

  const { toggleTheme } = useTheme();

  return (
    <CartContext.Provider value={{ count, setCount }}>
      <Sheet>
        <div className='flex flex-col items-center justify-center min-h-screen bg-stone-400'>
          <SheetTrigger className='absolute top-4 right-4'>
            <div className='h-10 w-10 relative flex items-center justify-center'>
              <span className='absolute -top-1 -right-1 text-[8px] bg-black text-white rounded-full px-2 py-1'>
                {count}
              </span>
              <ShoppingCart className='size-6' />
            </div>
          </SheetTrigger>
          <button
            className='absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-lg'
            onClick={() => toggleTheme()}
          >
            Toggle theme
          </button>
          <div className='card'>
            <Product name='apple' description='A juicy red apple' />
          </div>
        </div>
      </Sheet>
    </CartContext.Provider>
  );
}

export default App;
