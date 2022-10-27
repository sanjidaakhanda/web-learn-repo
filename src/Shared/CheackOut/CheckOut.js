import React from "react";
import { useLoaderData } from "react-router-dom";
const CheckOut = () => {
  const courseCheckOuts = useLoaderData();

  return <div>{courseCheckOuts.length}</div>;
};

export default CheckOut;
