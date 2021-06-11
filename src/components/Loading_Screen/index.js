import React from "react";
import "../../App.css";

export default function LoadingScreen() {
  return (
    <div className="loading">
      <img src={`${process.env.PUBLIC_URL}/images/loading.gif`} />
    </div>
  );
}
