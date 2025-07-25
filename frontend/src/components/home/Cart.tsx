import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CartContext } from "@/context/cartContext";
import { Dispatch, SetStateAction } from "react";
import { useContext } from "react";

export const Cart = ({
  openCart,
  setOpenCart,
}: {
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
}) => {
  const { cartItem } = useContext(CartContext);
  return (
    <Sheet open={openCart} onOpenChange={setOpenCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Order detail</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          {cartItem.map((cart, index) => (
            <div key={index} className="bg-amber-200">
              <div className="grid gap-3">{cart.foodName}</div>
              <div className="grid gap-3">{cart.price}</div>
            </div>
          ))}
        </div>
        <SheetFooter>
          <Button>Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
