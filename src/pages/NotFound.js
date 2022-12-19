import React from "react";
import { useLocation } from "react-router";

const NotFound = () => {
  const location = useLocation();
  return (
    <div className="m-3">
      <h3>NotFound</h3>
      <p>{location.pathname}</p>
    </div>
  );
};

export default NotFound;
