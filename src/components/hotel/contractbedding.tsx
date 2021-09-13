import React from "react";
import { Link } from "react-router-dom";
// import { contractbedding } from "../productlsit";

const Contractbedding = () => {
  return (
    <div>
      <h2>Contractbedding Products</h2>
    </div>
  );
};

export default Contractbedding;

/**
 * 
 * 
 *  {contractbedding.map((prod, key) => {
          return (
            <div key={key} className="indieprodcard">
              <Link to={`./hospitality/${prod.category}/${prod.title}`}>
                <div>
                  <img
                    src={require(`../../assets/hotel/${prod.imgurl}`)}
                    alt={prod.title}
                  />

                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                    <br />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
 * 
 * 
 * 
*/
