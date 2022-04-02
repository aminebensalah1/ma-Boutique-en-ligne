import { useState } from "react";
const Input = ({ cata, value, handleValue }) => {
  const onChanged = (e) => {
    const val = e.target.value;
    handleValue(val);
  };
  return (
    <div>
      <input
        type="number"
        min="0"
        max="9"
        className="col"
        value={value}
        onChange={onChanged}
        id={cata.id}
      />
    </div>
  );
};
export default Input;
