import Cart from "@/components/cart";
import OrderLayout from "@/components/shared/orderLayout";
import Button from "@/components/ui/Button";

const CartPage = () => {
  return (
    <OrderLayout
      orderButton={
        <Button href="/process-order" className="w-full rounded">
          Proceed to Checkout
        </Button>
      }
    >
      <Cart />
    </OrderLayout>
  );
};

export default CartPage;
