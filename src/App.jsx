import "bootstrap/dist/css/bootstrap.css";
import { Cardc, Searshc } from "./components/Indexc";
import { catalog } from "./Catalog";
import { useState } from "react";
import { FontAwesomeIcon } from "react-bootstrap-icons";

function App() {
  const [products, setProducts] = useState([]);
  const handleDelete = (id) => {
    const filters = products.filter((product) => product.id !== id);
    setProducts(filters);
    console.log(id);
  };

  const handleSubmit = (id, value, e) => {
    e.preventDefault(e);
    let val = 0;
    val += parseInt(value);

    const item = catalog.find((item) => item.id === id);
    const price = item.price;
    const total = price * val;
    const newItem = { ...item, val, total };
    const obj = products.find((itm) => itm.id === newItem.id);
    const filterProduct = products.filter((fItm) => fItm.id !== newItem.id);

    const tab = [...products, newItem];
    let tot = 0;

    if (val != 0) {
      if (obj) {
        const filterOpject = { ...item, val, total };

        const edit = [...filterProduct, filterOpject];
        setProducts(edit);
      } else {
        setProducts(tab);
      }
      const tott = products.find((product) => {
        return (tot += product.total);
      });
    } else {
      alert("please choose a number product");
    }
  };

  return (
    <div className="container mt-3 ">
      <h1 className="shadow p-3 border-primary "> Ma boutique en ligne</h1>
      <div
        className="container mt-3 d-flex shadow p-3 border-primary"
        style={{ height: "100%" }}
      >
        <Cardc catalog={catalog} handleSubmit={handleSubmit} />
        <Searshc products={products} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
