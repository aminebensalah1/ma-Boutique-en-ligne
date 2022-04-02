import { useState } from "react";

import Form from "./Form";

const Cardc = ({ catalog, handleSubmit }) => {
  return (
    <div
      class="container "
      style={{
        display: "grid",
        gridTemplateColumns: "250px 250px 250px",
        gap: "0px 5px",
        justifyContent: "space-between",
      }}
    >
      {catalog.map((cata) => (
        <div>
          <Form cata={cata} handleSubmit={handleSubmit} />
        </div>
      ))}
    </div>
  );
};
export default Cardc;
