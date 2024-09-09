import * as React from "react";

export default function Search() {
  return (
    <div className="input-group mb-3 " style={{ width: "50%" }}>
      <span className="input-group-text" id="basic-addon1">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="What are you looking for?"
        // aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
