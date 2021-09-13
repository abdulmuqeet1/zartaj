import React from "react";
import { Link } from "react-router-dom";
import { bedlinen } from "../productlsit";

const Bedlinen = () => {
  return (
    <div>
      <h2>Bed Linen Products</h2>
      <div>
        {bedlinen.map((prod, key) => {
          return (
            <div key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.category}/${prod.title}`}>
                <div>
                  <p>{`../../${prod.imgurl}`}</p>
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bedlinen;

/**
 * 
 * 
 * {bedlinen.map((prod, key) => {
        return (
          <div key={key} className="indieprodcard">
            <Link to={`./hospitality/${prod.category}/${prod.title}`}>
              <div>

                <p>{`../../${prod.imgurl}`}</p>
                <div className="details">
                  <p>{prod.category}</p>
                  <h4>{prod.title}</h4>
                </div>
              </div>
            </Link>
          </div>
        );
      }) 
      }
 * 
 * 
 * 
 */
