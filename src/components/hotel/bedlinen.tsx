import React from "react";
import { Link } from "react-router-dom";
import { bedlinen } from "../productlsit";

const Bedlinen = () => {
  return (
    <div>
      <h2>Bed Linen Products</h2>
      <div>
        <ul>
          <Link to="/hospitality/bedlinen/name">
            <li>
              <div className="img">
                <img
                  src="../../assets/hotelprods/flatwhitebedsheet.jpg"
                  alt="prod"
                />
              </div>
              <div className="detail">
                <p className="categoryname">category</p>
                <h4>Product Name</h4>
              </div>
            </li>
          </Link>
        </ul>
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
      }) 
      }
 * 
 * 
 * 
 */
