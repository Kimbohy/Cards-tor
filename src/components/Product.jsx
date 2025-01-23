

function Product(props) {
  const produit = props.produit;
  const index = props.id;
  const counter = props.n;

  if (counter % 2 == 0) {
    return (
      <div className="container leftC" key={index}>
        <img
          className="cardImg left"
          src={"./src/" + produit.imageUrl}
          alt="card"
        />
        <div className="textPart">
          <h2 className="cardName">{produit.name}</h2>
          <p className="cardDescrition">{produit.description}</p>
          <div className="tags">
            <a href="/" className="tag marc">
              {produit.marc}
            </a>
            <a href="/" className="tag type">
              {produit.type}
            </a>
          </div>
          <h3 className="pryce">{produit.price}$</h3>
          <div className="last r">
            <div className="artBut">
              <button className="infoBut">more information</button>
              <button className="buy">Buy</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container rightC" key={index}>
        <div className="textPart">
          <h2 className="cardName">{produit.name}</h2>
          <p className="cardDescrition">{produit.description}</p>
          <div className="tags">
            <a href="/" className="tag marc">
              {produit.marc}
            </a>
            <a href="/" className="tag type">
              {produit.type}
            </a>
          </div>
          <h3 className="pryce l">{produit.price}$</h3>
          <div className="last">
            <div className="artBut">
              <button className="infoBut">more information</button>
              <button className="buy">Buy</button>
            </div>
          </div>
        </div>
        <img
          className="cardImg right"
          src={"./src/" + produit.imageUrl}
          alt="card"
        />
      </div>
    );
  }
}
export default Product;
