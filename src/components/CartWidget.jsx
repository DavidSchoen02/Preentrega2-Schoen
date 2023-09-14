import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (
    <Button className="me-3">
      <AiOutlineShoppingCart /> 0
    </Button>
  );
};

export default CartWidget;
