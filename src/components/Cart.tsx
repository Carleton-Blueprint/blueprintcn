import { ShoppingCart } from 'lucide-react';
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
  SheetTrigger,
} from './ui/sheet';

export default function Cart({ quantity = 0 }: { quantity: number }) {
  return (
    <Sheet>
      <SheetTrigger className="">
        <div className="h-10 w-10 relative flex items-center justify-center">
          <span className="absolute -top-1 -right-1 text-[8px] bg-black text-white rounded-full px-2 py-1">
            {quantity}
          </span>
          <ShoppingCart className="size-6" />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-stone-400">
        <SheetHeader>
          <SheetTitle className="font-2xl font-bold">Cart</SheetTitle>
          <SheetDescription>
            {quantity > 0 ? (
              <p className="text-lg">You have {quantity} items in your cart.</p>
            ) : (
              <p className="text-lg">Your cart is empty.</p>
            )}
          </SheetDescription>
        </SheetHeader>

        {/* <div className="flex flex-col items-center justify-center">
          <button onClick={() => setCount(0)}>Clear cart</button>
        </div> */}
      </SheetContent>
    </Sheet>
  );
}
