import React from "react";

const Button = ({ onAdd, show }) => {
  return (
    <div>
      <input
      type="submit"
        className="btn btn-dark"
        value={show ? "Close" : "Add"}
        onClick={onAdd}></input>
    </div>
  );
};

export default Button;
