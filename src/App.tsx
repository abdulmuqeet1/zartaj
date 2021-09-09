import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

// icons
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import {
  AiFillPhone,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

// components
// import { Carousel } from "./components/carousel";
import { featurecategories } from "./components/productlsit";
import { beddingproducts } from "./components/productlsit";
// hotel components
// import Bedlinen from "./components/hotel/bedlinen";
import Bedscarf from "./components/hotel/bedscarf";
import Bedspreads from "./components/hotel/bedspreads";
import Blankets from "./components/hotel/blankets";
import Contractbedding from "./components/hotel/contractbedding";
import Coverlets from "./components/hotel/coverlets";
import Duvets from "./components/hotel/duvets";
import Mattressencasements from "./components/hotel/mattressencasements";
import Mattresspad from "./components/hotel/mattresspad";
import Pillows from "./components/hotel/pillows";
import Pillowcase from "./components/hotel/pillowcase";
import Productpage from "./components/productpage";

// my styling
import styled from "styled-components";
import "./styles/main.scss";
import "./styles/hotel.scss";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Lazy, Autoplay, Pagination, Navigation } from "swiper";
// import "swiper/swiper.scss";
// import "swiper/css";

import "../node_modules/swiper/swiper.scss";

// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css"

import bedsheetset from "./assets/hotel/bedsheetset.jpg";

SwiperCore.use([Lazy, Autoplay, Pagination, Navigation]);

const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  img {
    width: 45px;
    height: 45px;
  }
`;

export const App = () => {
  const [opennav, setOpennav] = useState(false);

  const togglenav = () => {
    setOpennav(!opennav);
  };
  return (
    <div>
      <div className="topbar">
        <div className="topbarinner">
          <div className="contactdetail">
            <p>
              <AiFillPhone />
              0900-78601
            </p>
            <p>
              <IoMdMail /> <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
            </p>
          </div>
          <div className="sociallinks">
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineTwitter />
              </a>
            </li>
          </div>
        </div>
      </div>
      <Router>
        <header>
          <nav>
            <div className="logo">
              <h4>LOGO</h4>
              {/* <img src={require("./assets/googlelogo.png")} alt="logo" /> */}
            </div>
            <div className="navlinks">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/hospitality">HOSPITALITY</Link>
                </li>
                <li>
                  <Link to="/institution">INSTITUTION</Link>
                </li>
                <li>
                  <Link to="/saltlamp">SALT LAMP</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <button>
                  <Link to="/contact">ENQUIRY</Link>
                </button>
              </ul>
            </div>
            <div className="navtogglebtn">
              <button
                onClick={() => {
                  togglenav();
                }}
              >
                {opennav ? <ImCross /> : <GiHamburgerMenu />}
              </button>
            </div>
            <div
              className={opennav ? "activemobilenavlinks" : "mobilenavlinks"}
            >
              <ul>
                <Link to="/">
                  <li>HOME</li>
                </Link>

                <Link to="/hospitality">
                  <li>HOSPITALITY</li>
                </Link>

                <Link to="/institution">
                  <li>INSTITUTION</li>
                </Link>

                <Link to="/saltlamp">
                  <li>SALT LAMP</li>
                </Link>

                <Link to="/about">
                  <li>ABOUT</li>
                </Link>

                <button>
                  <Link to="/contact">ENQUIRY</Link>
                </button>
              </ul>
            </div>
          </nav>
        </header>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/hospitality">
              <Hospitality />
            </Route>
            <Route exact path="/institution">
              <Institution />
            </Route>
            <Route path="/saltlamp">
              <Saltlamp />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/hospitality/bedlinen">
              <Bedlinen />
            </Route>
            <Route exact path="/hospitality/bedscarf">
              <Bedscarf />
            </Route>
            <Route exact path="/hospitality/bedspreads">
              <Bedspreads />
            </Route>
            <Route exact path="/hospitality/blankets">
              <Blankets />
            </Route>
            <Route exact path="/hospitality/contractbedding">
              <Contractbedding />
            </Route>
            <Route exact path="/hospitality/coverlets">
              <Coverlets />
            </Route>
            <Route exact path="/hospitality/duvets">
              <Duvets />
            </Route>
            <Route exact path="/hospitality/mattresspad">
              <Mattresspad />
            </Route>
            <Route exact path="/hospitality/mattressencasements">
              <Mattressencasements />
            </Route>
            <Route exact path="/hospitality/pillows">
              <Pillows />
            </Route>
            <Route exact path="/hospitality/pillowcase">
              <Pillowcase />
            </Route>
            <Route path="/hospitality/:cat/:id">
              <Productpage />
            </Route>
          </Switch>
        </div>
      </Router>
      <footer>
        <div className="footercontent">
          <h2>Footer</h2>
        </div>
      </footer>
    </div>
  );
};

function Home() {
  return (
    <div>
      <div className="carousel">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          lazy={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: true,
          }}
          loop={true}
          navigation={true}
          controller={{ inverse: false }}
          pagination={{ clickable: true, type: "bullets" }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src="./assets/rice_flour/Rice.jpg" alt="rice" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./assets/rice_flour/flour2.jpg" alt="flour" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./assets/pulses_spices_grains/pulses.jpg" alt="pulses" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./assets/pulses_spices_grains/cornPSIZE.jpg" alt="corn" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./assets/pulses_spices_grains/turneric.jpg" alt="corn" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/pulses_spices_grains/cereals.jpg"
              alt="cereals"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="tareef">
        <div className="tareefinner">
          <div className="imgdiv">
            <img src="./assets/lightarrow.png" alt="lightningfast" />
            <h4>Lightning Response</h4>
          </div>
          <div className="imgdiv">
            <img src="./assets/threestar.png" alt="threeStar" />
            <h4>Excellent Service</h4>
          </div>
          <div className="imgdiv">
            <img src="./assets/csat.png" alt="hunderedpercent" />
            <h4>Customer Satisfaction</h4>
          </div>
        </div>
      </div>
      <div className="featurecatdiv">
        <h2>FEATURE PRODUCTS</h2>
        <div className="featurecatdivinner">
          {featurecategories.map((category, key) => {
            return (
              <div key={key} className="cat">
                <Link to="#">
                  <div>
                    <img src={`${category.imgurl}`} alt="category" />
                    <h4>{category.cat}</h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="aboutzartaj">
        <div className="text">
          <h2>Welcome to Zartaj Traders</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quam fugit accusamus sed dicta. Voluptatum tempore, soluta
            laboriosam officia corporis unde voluptatem. Itaque nesciunt, sint
            eligendi consectetur, tempore sed sit laboriosam eos deserunt, neque
            architecto consequuntur magni expedita hic adipisci?
          </p>
        </div>
      </div>

      <div className="ourcustomer">
        <h2>Our partners</h2>
        <div className="list">
          <div className="partnerlogo">
            <img src="./assets/partners/asterL.jpg" alt="partner" />
          </div>
          <div className="partnerlogo">
            <img src="./assets/partners/hilton.jpg" alt="partner" />
          </div>
          <div className="partnerlogo">
            <img src="./assets/partners/Movenpick.jpg" alt="partner" />
          </div>
          <div className="partnerlogo">
            <img src="./assets/partners/primeMC.jpg" alt="partner" />
          </div>
          <div className="partnerlogo">
            <img src="./assets/partners/radisson.jpg" alt="partner" />
          </div>
          <div className="partnerlogo">
            <img src="./assets/partners/skhospital.jpg" alt="partner" />
          </div>
          <div className="partnerlogo">
            <img src="./assets/partners/sofital.jpg" alt="partner" />
          </div>
          <div className="partnerlogo">
            <img src="./assets/partners/waldorf_astoria.jpg" alt="partner" />
          </div>
        </div>
      </div>
    </div>
  );
}
function Hospitality() {
  return (
    <div className="hospitality">
      <div className="hospitalityinner">
        <h2>hospitality</h2>
        <div className="hotelcats">
          <ul>
            <li>
              <Link to="/hospitality/contractbedding">
                <div>
                  <img src="./assets/rice_flour/bag.jpg" alt="bag" />
                  <h3>Contract Bedding</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/bedlinen">
                <div>
                  <img src={bedsheetset} alt="bag" />
                  <h3>Bed linen</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/bedscarf">Bed Scarf</Link>
            </li>
            <li>
              <Link to="/hospitality/bedspreads">bed spreads</Link>
            </li>
            <li>
              <Link to="/hospitality/blankets">blankets</Link>
            </li>

            <li>
              <Link to="/hospitality/coverlets">Coverlets</Link>
            </li>
            <li>
              <Link to="/hospitality/duvets">Duvets</Link>
            </li>
            <li>
              <Link to="/hospitality/mattresspad">Mattress Pads</Link>
            </li>
            <li>
              <Link to="/hospitality/mattressencasements">
                Mattress Encasements
              </Link>
            </li>
            <li>
              <Link to="/hospitality/pillows">Pillows</Link>
            </li>
            <li>
              <Link to="/hospitality/pillowcase">Pillow Case</Link>
            </li>
          </ul>
        </div>
        <div className="hotelfeatureproducts">
          <h2>Feature Products</h2>
          <ul>
            {beddingproducts.map((prod, key) => {
              return (
                <li key={key}>
                  <Link to={`./hospitality/${prod.category}/${prod.title}`}>
                    <div>
                      <img src="./assets/rice_flour/rice.jpg" alt="rice" />
                      <div className="text">
                        <p>{prod.category}</p>
                        <h3>{prod.title}</h3>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
function Institution() {
  return <h2>Institution</h2>;
}
function Saltlamp() {
  return <h2>Salt Lamp</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

// hotel components
import { bedding } from "./components/productlsit";

const Bedlinen = () => {
  return (
    <div>
      {bedding.map((prod, key) => {
        if (prod.category == "bed linen") {
          return (
            <div key={key} className="indieprodcard">
              <Link to={`./${prod.category}/${prod.title}`}>
                <div>
                  <img src={bedsheetset} alt="abc" />
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
