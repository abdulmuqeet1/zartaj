import React from "react";
import { useParams } from "react-router-dom";

const Productpage = () => {
  let { cat, id }: any = useParams();
  return (
    <div>
      <p>
        {cat} and {id}
      </p>
    </div>
  );
};

export default Productpage;
