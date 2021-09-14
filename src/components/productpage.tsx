import React from "react";
import { useParams } from "react-router-dom";

const Productpage = () => {
  let { cat, id }: any = useParams();
  return <div>product page</div>;
};

export default Productpage;
