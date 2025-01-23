import { Link } from "react-router-dom";
import CartContent from "./CartContent";
import "../assets/styles/cart.css";

function Cart() {
  return (
    <div>
      <Link to="/">
        <img
          src="./src/assets/images/icones/x-circle.svg"
          alt="x"
          id="back"
          class="x"
        />
      </Link>
      <div className="boxs">
        <CartContent />
        <CartContent />
      </div>
    </div>
  );
}

export default Cart;
