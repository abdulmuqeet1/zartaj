import React from "react";
import { Link } from "react-router-dom";

import { bedding } from "../productlsit";

const Bedlinen = () => {
  return (
    <div>
      {bedding.map((prod, key) => {
        if (prod.category == "bed linen") {
          return (
            <div key={key} className="indieprodcard">
              <Link to={`./${prod.category}/${prod.title}`}>
                <div>
                  <img
                    src={require("../../assets/hotel/bedsheetset.jpg")}
                    alt={prod.title}
                  />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                </div>
              </Link>
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
};

export default Bedlinen;
