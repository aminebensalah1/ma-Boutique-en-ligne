import { useState } from "react";

const Searshc = ({ products, handleDelete }) => {
  let tots = 0;

  console.log(tots);

  return (
    <div dir="rtl" style={{ display: "flex", flexDirection: "column-reverse" }}>
      <div
        className="border border-success  "
        style={{ width: "100%", height: "80%" }}
      >
        products
        {products.map((product) => {
          const { id, name, price, val, total } = product;
          tots += total;

          return (
            <div
              dir="ltr"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <img
                className="rounded-circle"
                width={30}
                height={30}
                src={product.image}
                class="col-3"
              />
              <span width={50} class="col-3">
                {name}
              </span>

              <svg
                type="button"
                onClick={() => handleDelete(id)}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class=" pt-2"
                viewBox="0 0 16 16"
                className="col-3"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>

              <span
                className="m-2 pt-0 bg-warning rounded-pill col-2"
                style={{ flexShrink: "0" }}
              >
                {val}x{price}
              </span>
            </div>
          );
        })}
      </div>
      <p className="rounded-2 bg-danger mt-5">total de panier {tots}€</p>
      <input className="rounded-2 m-2" placeholder="searsh products..." />
    </div>
  );
};
export default Searshc;
