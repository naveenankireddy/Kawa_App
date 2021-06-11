import React from "react";
import "../../App.css";

export default function AppBar() {
  return (
    <div className="flex_row app_bar">
      <div>
        <h3>My Challenge</h3>
      </div>
      <div className="flex_row ">
        <a>Product</a>
        <a>Download</a>
        <a>Pricing</a>
      </div>
    </div>
  );
}
