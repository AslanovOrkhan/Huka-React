import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to="/" className="btn">
        Book now
      </Link>
    </div>
  );
};

export default Button;
