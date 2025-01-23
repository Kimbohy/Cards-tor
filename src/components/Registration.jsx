import { Link } from "react-router-dom";
import "../assets/styles/Registration.css";
import Pass from "./Pass";

function Registration() {
  return (
    <div className="root">
      <img
        src="./src/assets/images/sven-ciupka-8H3cWNtBpdQ-unsplash.jpg"
        alt="leftImage"
        className="leftImage"
      />
      <div id="right">
        <Link to="/">
          <img id="x" src="./src/assets/images/icones/x-circle.svg" alt="x" />
        </Link>
        <h1>Registration</h1>
        <form>
          <div>
            <label for="username">Username:</label>
            <br />
            <input
              className="userInfo"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <br />
            <input
              className="userInfo"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label for="password">Password:</label>
            <br />
            <Pass />
          </div>

          <input id="register" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default Registration;
