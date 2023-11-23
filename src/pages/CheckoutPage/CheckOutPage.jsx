import {
  CheckOutContainer,
  CheckOutHeader,
  CheckOutTotal,
  HeaderBlock,
} from "./checkout.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

function CheckOutPage() {
  const { cartItems, totalAmount } = useContext(CartContext);
  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} checkoutItem={item} />;
      })}
      <CheckOutTotal>Total: ${totalAmount}</CheckOutTotal>
    </CheckOutContainer>
  );
}
export default CheckOutPage;
