function CartContent(/* add props that content the product and use the product ID to change the quantity value */) {
  return (
    <div className="box">
      <div className="imageBox">
        <img
          className="cardImage"
          src="./src/assets/images/scott-gummerson-Rcc8-iejcRg-unsplash.jpg"
          alt="card"
        />
      </div>
      <div className="txtPart">
        <h2 className="cardName">Card name</h2>
        <div className="tags">
          <a href="/" className="tag marc">
            #marc
          </a>
          <a href="/" className="tag type">
            #type
          </a>
        </div>
        <h3 className="pryce l">70.07$</h3>

        <div className=" number-input">
          <button onClick={down} className="minus">
            <img src="./src/assets/images/icones/caret-down.svg" alt="" />
          </button>
          <input
            className="quantity"
            min="0"
            name="quantity"
            value="1"
            type="number"
          />
          <button onClick={up} className="plus">
            <img src="./src/assets/images/icones/caret-up.svg" alt="" />
          </button>
        </div>
        <img className="x" src="./src/assets/images/icones/trash.svg" alt="x" />
      </div>
    </div>
  );
}

// a function that increment the quantity of the product
// there functions need some modification to work properly (add props that content the product and use the product ID to change the quantity value)
function up(){
  const quantity = document.querySelector(".quantity");
  quantity.value = parseInt(quantity.value) + 1;
}


function down(){
  const quantity = document.querySelector(".quantity");
  if (parseInt(quantity.value) > 0) {
    quantity.value = parseInt(quantity.value) - 1;
  }
}


export default CartContent;
