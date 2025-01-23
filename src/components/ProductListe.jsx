import { useEffect, useState } from "react";
import "../assets/styles/Product.css";
import Product from "./Product";

function ProductListe() {
  const [data, setData] = useState([]);
  let counter = 1;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("./src/assets/data/cardList.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const datas = await response.json();
        setData(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {data.cards &&
        data.cards.map((cart, index) => {
          // right
          counter++;
          return <Product n={counter} produit={cart} id={index} />;
        })}
    </div>
  );
}

export default ProductListe;
