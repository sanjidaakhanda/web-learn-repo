import React from "react";
import Card from "react-bootstrap/Card";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <Card.Footer
        className="bg-light text-center text-primary mt-5"
        style={{ width: "100%" }}
      >
        <FaRegCopyright></FaRegCopyright> Copyright @@akhanda
      </Card.Footer>
    </div>
  );
};

export default Footer;
