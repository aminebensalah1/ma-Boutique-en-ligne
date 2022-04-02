import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
const Form = ({ cata, handleSubmit }) => {
  const [value, setValue] = useState("0");
  const handleValue = (val) => {
    setValue(val);
  };
  return (
    <form onSubmit={(e) => handleSubmit(cata.id, value, e)}>
      <div className="card m-2 d-flex shadow p-3 mb-5  rounded bg-body  ">
        <p className="d-inline " style={{ color: "red" }}>
          {cata.price}€{" "}
        </p>
        <img src={cata.image} className="card-img-top" alt="..." height={80} />

        <div className="card-body ">
          <h5 className="card-title">{cata.name} </h5>
          <span className="d-inline-block border border-secondary  pb-2  rounded-1">
            <h6>{cata.description}</h6>
          </span>
          <div className="row ">
            <Input cata={cata} value={value} handleValue={handleValue} />

            <Button cata={cata} />
          </div>
        </div>
      </div>
    </form>
  );
};
export default Form;
