import ProductListe from "./ProductListe";
import "../assets/styles/Product.css";
import Footer from "./Footer";
import PageOne from "./PageOne";

function Product() {
  return (
    <div id="main">
      <PageOne />
      <div id="nextPage">
        <ProductListe />
      </div>
      <Footer />
    </div>
  );
}

export default Product;