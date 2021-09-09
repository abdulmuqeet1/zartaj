import React from "react";
import { bedding } from "./productlsit";
import { useParams } from "react-router-dom";

const Productpage = () => {
  let { cat, id }: any = useParams();
  return (
    <div>
      {bedding.map((prod, key) => {
        if (prod.title == id) {
          return (
            <div key={key} className="indieprodcard">
              <div>
                <img src={prod.imgurl} alt={prod.title} />
              </div>
              <div className="details">
                <p className="prodopagecatp">{prod.category}</p>
                <h4>{prod.title}</h4>
                <p>{prod.desc}</p>
                <br />
                <button>Enquiry</button>
              </div>
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
};

export default Productpage;
