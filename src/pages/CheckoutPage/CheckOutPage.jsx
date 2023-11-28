import {
  CheckOutContainer,
  CheckOutHeader,
  CheckOutTotal,
  HeaderBlock,
} from "./checkout.styles";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart-selector";

function CheckOutPage() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
      <CheckOutTotal>Total: ${cartTotal}</CheckOutTotal>
    </CheckOutContainer>
  );
}
export default CheckOutPage;
