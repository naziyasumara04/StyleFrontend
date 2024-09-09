import * as React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Casual() {
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = () => {
    navigate("/shop");
  };
  return (
    <div>
      <div className="container mt-5 p-5" style={{ backgroundColor: "grey" }}>
        <div className="row">
          <div className="col-8">
            <img src="" alt="image" />
          </div>
          <div className="col-4">
            <h1>kurti</h1>
            <h5>a one an only</h5>
            <Button
              onClick={handleClick}
              variant="outlined"
              style={{ color: "white", borderColor: "white" }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
