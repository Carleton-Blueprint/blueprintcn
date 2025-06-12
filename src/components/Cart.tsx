import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';

export default function Cart({
  quantity,
  setCount,
}: {
  quantity: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
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

      <div className="flex flex-col items-center justify-center">
        <button onClick={() => setCount(0)}>Clear cart</button>
      </div>
    </SheetContent>
  );
}
