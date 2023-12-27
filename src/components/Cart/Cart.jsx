import "./Cart.scss";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, cartSubTotal } = useContext(Context);
  return (
    <div className="cart-content">
      <div className="heading">Shopping Cart</div>
      <div className="cart-container">
        <div className="left">
          <CartItem />
        </div>
        {!!cartItems?.length && (
          <div className="right">
            <div className="subtotal">
              <span className="text">Subtotal: </span>
              <span className="text total">&#8377; {cartSubTotal}</span>
            </div>
            <div className="button">
              <button
                className="checkout-cta"
                onClick={() =>
                  alert("payment integration is still needs to implement")
                }
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      {!cartItems?.length && (
        <div className="empty-cart">
          <BsCartX />
          <span>No products in the cart.</span>
          <button className="return-cta" onClick={() => navigate("/")}>
            RETURN TO SHOP
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
