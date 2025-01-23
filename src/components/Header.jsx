import { Link } from "react-router-dom";
import Find from "./Find";

function Header() {
    return(
        <header>
          <a href="/">
            <img
              src="./src/assets/images/icones/vector/fullLogo.svg"
              alt="fullLogo"
              id="logo"
            />
          </a>
          <div className="nav">
            <Find />
            <Link to="/Cart">
              <img
                id="cart"
                src="./src/assets/images/icones/cart.svg"
                alt="cart"
              />
            </Link>

            <Link 
              to="/Registration"
              className="navBut"
              id="regiser"
            > 
              Register 
            </Link>


            <Link
              className="navBut"
              id="signIn"
              to='/SignIn'
            >
              {" "}
              Sign in
            </Link>
          </div>
        </header>
    )
}

export default Header