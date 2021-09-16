import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
  useRouteMatch,
} from "react-router-dom";

import emailjs from "emailjs-com";

import {
  bedlinen,
  bath,
  contractbedding,
  bedscarf,
  bedspread,
  blankets,
  coverlets,
  duvets,
  mattresspad,
  mattressencasements,
  pillows,
  pillowcase,
  curtains,
  drapes,
  saltlamp,
} from "./components/productlsit";

import { allproducts } from "./components/productlsit";
import { useParams } from "react-router-dom";

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
import { TiTick } from "react-icons/ti";
import { MdPhonelinkRing } from "react-icons/md";

import { GiHamburgerMenu, GiPhone } from "react-icons/gi";

// components
import { featurecategories } from "./components/productlsit";

// my styling
import styled from "styled-components";
import "./styles/main.scss";
import "./styles/hotel.scss";
import "./styles/restpage.scss";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Lazy, Autoplay, Pagination, Navigation } from "swiper";
import "../node_modules/swiper/swiper.scss";

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
              +971-501240541
            </p>
            <p>
              <IoMdMail />{" "}
              <a href="mailto:info@zartajtrading.com">info@zartajtrading.com</a>
            </p>
          </div>
          <div className="sociallinks">
            <li>
              <a
                href="https://www.facebook.com/Zartaj-General-Traders-LLC-UAE-107738754928088"
                target="_blank"
              >
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
      <HashRouter>
        <header>
          <nav>
            <div className="logo">
              <a href="/">
                <img src={require("./assets/logo.png")} alt="logo" />
              </a>
            </div>
            <div className="navlinks">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/hospitality">HOSPITALITY</Link>
                </li>
                {/* <li>
                  <Link to="/institution">INSTITUTION</Link>
                </li> */}
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
                {/* 
                <Link to="/institution">
                  <li>INSTITUTION</li>
                </Link> */}

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
            <Route exact path="/hospitality">
              <Hospitality />
            </Route>
            {/* <Route exact path="/institution">
              <Institution />
            </Route> */}
            <Route path="/saltlamp">
              <Saltlamp />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/hospitality/bedlinen">
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
            <Route exact path="/hospitality/curtains">
              <Curtains />
            </Route>
            <Route exact path="/hospitality/drapes">
              <Drapes />
            </Route>
            <Route exact path="/hospitality/pillowcase">
              <Pillowcase />
            </Route>
            <Route exact path="/hospitality/bath">
              <Bath />
            </Route>
            <Route path="/hospitality/:catid/:prodid">
              <Productpage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </HashRouter>
      <footer>
        <div className="footercontent">
          <div className="zartajintro">
            <img src={require("./assets/logo.png")} alt="logo" />
            <p>
              Zartaj Traders LLC. offers an incomparable range of hundreds of
              products for the Hospitality Industry, all segments.
            </p>
          </div>
          <div className="quicklinks">
            <li>
              <IoLocationSharp />
              <address>
                Grand Mall, Shaikh Khalifa Street, POBOX 45340, Ajman, UAE
              </address>
            </li>
            <li>
              <AiFillPhone />
              <p>+971-67445406</p>
            </li>
            <li>
              <MdPhonelinkRing />
              <p>+971-501240541</p>
            </li>
            <li>
              <IoMdMail />
              <p>info@zartajtrading.com</p>
            </li>
            <li>
              <IoMdMail />
              <p>mubashar@zartajtrading.com</p>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Zartaj-General-Traders-LLC-UAE-107738754928088"
                target="_blank"
              >
                <AiFillFacebook />
              </a>
              <a href="#">
                <AiOutlineInstagram />
              </a>
              <a href="#">
                <AiOutlineTwitter />
              </a>
            </li>
          </div>
          <div className="footermap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38986.52227682363!2d55.425979788162174!3d25.390042716998536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5834f9723a75%3A0x82583122a8f6bf94!2sSheikh%20Khalifa%20Bin%20Zayed%20St%20-%20Ajman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1631601391713!5m2!1sen!2sus"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </footer>
      <div className="bottombar">
        <div className="bottombarinner">
          <p>© 2021 Zartaj Traders Ltd. All rights Reserved.</p>
          <p className="credits">
            design and developed by <span>Avicta</span>
          </p>
        </div>
      </div>
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
        >
          <SwiperSlide>
            <img src={require("./assets/slider/slider1.jpg")} alt="slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("./assets/slider/slider2.jpg")} alt="slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("./assets/slider/slider3.jpg")} alt="slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("./assets/slider/slider4.jpg")} alt="slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("./assets/slider/slider5.jpg")} alt="slider" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="tareef">
        <div className="tareefinner">
          <div className="imgdiv">
            <img src={require("./assets/lightarrow.png")} alt="lightningfast" />
            <h4>Lightning Response</h4>
          </div>
          <div className="imgdiv">
            <img src={require("./assets/threestar.png")} alt="threeStar" />
            <h4>Excellent Service</h4>
          </div>
          <div className="imgdiv">
            <img src={require("./assets/csat.png")} alt="hunderedpercent" />
            <h4>Customer Satisfaction</h4>
          </div>
        </div>
      </div>
      <div className="featurecatdiv">
        <h2>FEATURE CATEGORIES</h2>
        <div className="featurecatdivinner">
          {featurecategories.map((category, key) => {
            return (
              <div key={key} className="cat">
                <Link to={`/hospitality/${category.catid}`}>
                  <div>
                    <img src={require(`${category.imgurl}`)} alt="category" />
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
            To achieve that standing we have exceeded the expectations of our
            clients in the hospitality industry through unparalleled trust,
            commitment, and consistency. We subscribe to the old proverb,{" "}
            <strong>“If a job is worth doing, it is worth doing well.”</strong>{" "}
            <br />
            Zartaj Traders offers an incomparable range of hundreds of products
            for the Hospitality Industry, all segments. We outfit and supply
            facilities that encompass the whole gamut from independent Bed and
            Breakfast establishments, to 5 Star Hotels. We supply products to
            Health Care Institutions, Long Term Care Homes, and Retirement and
            Nursing Homes. We also cater to the needs of Government institutions
            such as Correctional Institutes, and educational facilities,
            Universities, Schools and Colleges, and also to many other markets
            that utilize Hospitality and Health Care products.
          </p>
        </div>
      </div>

      <div className="ourcustomer">
        <h2>Our partners</h2>
        <div className="list">
          <div className="partnerlogo">
            <img src={require("./assets/partners/asterL.jpg")} alt="partner" />
          </div>
          <div className="partnerlogo">
            <img src={require("./assets/partners/hilton.jpg")} alt="partner" />
          </div>
          <div className="partnerlogo">
            <img
              src={require("./assets/partners/Movenpick.jpg")}
              alt="partner"
            />
          </div>
          <div className="partnerlogo">
            <img src={require("./assets/partners/primeMC.jpg")} alt="partner" />
          </div>
          <div className="partnerlogo">
            <img
              src={require("./assets/partners/radisson.jpg")}
              alt="partner"
            />
          </div>
          <div className="partnerlogo">
            <img
              src={require("./assets/partners/skhospital.jpg")}
              alt="partner"
            />
          </div>
          <div className="partnerlogo">
            <img src={require("./assets/partners/sofital.jpg")} alt="partner" />
          </div>
          <div className="partnerlogo">
            <img
              src={require("./assets/partners/waldorf_astoria.jpg")}
              alt="partner"
            />
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
        <h1>HOSPITALITY</h1>
        <div className="hotelcats">
          <ul>
            <li>
              <Link to="/hospitality/contractbedding">
                <div>
                  <img
                    src={require("./assets/categories/contractbedding.png")}
                    alt="bedding"
                  />
                  <h3>Contract Bedding</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/bedlinen">
                <div>
                  <img
                    src={require("./assets/categories/bedlinen.png")}
                    alt="bed linen"
                  />
                  <h3>Bed linen</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/bedscarf">
                <div>
                  <img
                    src={require("./assets/categories/bedscarf.png")}
                    alt="bed scarf"
                  />
                  <h3>Bed Scarf</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/bedspreads">
                <div>
                  <img
                    src={require("./assets/categories/bedspread.png")}
                    alt="cat"
                  />
                  <h3>bed spreads</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/blankets">
                <div>
                  <img
                    src={require("./assets/categories/blankets.png")}
                    alt="cat"
                  />
                  <h3>blankets</h3>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/hospitality/coverlets">
                <div>
                  <img
                    src={require("./assets/categories/coverlets.png")}
                    alt="cat"
                  />
                  <h3>Coverlets</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/duvets">
                <div>
                  <img
                    src={require("./assets/categories/duvets.png")}
                    alt="cat"
                  />
                  <h3>Duvets</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/drapes">
                <div>
                  <img
                    src={require("./assets/categories/drapes.png")}
                    alt="cat"
                  />
                  <h3>Drapes</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/mattresspad">
                <div>
                  <img
                    src={require("./assets/categories/mattresspad.png")}
                    alt="cat"
                  />
                  <h3>Mattress Pads</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/mattressencasements">
                <div>
                  <img
                    src={require("./assets/categories/mattressencasement.png")}
                    alt="cat"
                  />
                  <h3>Mattress Encasements</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/curtains">
                <div>
                  <img
                    src={require("./assets/categories/drapes.png")}
                    alt="cat"
                  />
                  <h3>Curtains</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/pillows">
                <div>
                  <img
                    src={require("./assets/categories/pillows.png")}
                    alt="cat"
                  />
                  <h3>Pillows</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/pillowcase">
                {" "}
                <div>
                  <img
                    src={require("./assets/categories/pillowcase.png")}
                    alt="cat"
                  />
                  <h3>Pillow Case</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/hospitality/bath">
                {" "}
                <div>
                  <img
                    src={require("./assets/categories/bath.png")}
                    alt="cat"
                  />
                  <h3>Hotel Bath</h3>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="hotelfeatureproducts">
          <h2>Feature Products</h2>
          <ul>
            {beddingproducts.map((prod, key) => {
              console.log(
                prod.imgurl.toString(),
                typeof prod.imgurl.toString()
              );

              return (
                <li key={key}>
                  <Link to={`./hospitality/${prod.category}/${prod.title}`}>
                    <div>
                      <img
                        src={require(prod.imgurl.toString())}
                        alt="products"
                      />

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
        </div> */}
      </div>
    </div>
  );
}
function Institution() {
  return <h2>Institution</h2>;
}

function Saltlamp() {
  return (
    <div className="subcatprodspage">
      <h1>SALT LAMP PRODUCTS</h1>
      <ul>
        {saltlamp.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function About() {
  return (
    <div className="aboutpage">
      <div className="aboutpageinner">
        <div className="imgdiv">
          <h1>about zartaj</h1>
        </div>
        <div className="textdiv">
          <h3>
            Zartaj Traders Ltd. is one of the fastest growing Hospitality,
            Lodging and Facilities distributors in UAE.
          </h3>
          <br />
          <p>
            To achieve that standing we have exceeded the expectations of our
            clients in the hospitality industry through unparalleled trust,
            commitment, and consistency. We subscribe to the old proverb,{" "}
            <strong>“If a job is worth doing, it is worth doing well.”</strong>
          </p>
          <br />{" "}
          <p>
            Zartaj Traders offers an incomparable range of hundreds of products
            for the Hospitality Industry, all segments. We outfit and supply
            facilities that encompass the whole gamut from independent Bed and
            Breakfast establishments, to 5 Star Hotels. We supply products to
            Health Care Institutions, Long Term Care Homes, and Retirement and
            Nursing Homes. We also cater to the needs of Government institutions
            such as Correctional Institutes, and educational facilities,
            Universities, Schools and Colleges, and also to many other markets
            that utilize Hospitality and Health Care products. We pride
            ourselves on being able to source, design and deliver the specific
            needs of our clients. We stock products that include bed linen, bath
            linen, table linen, window coverings, bath and room amenities,
            housekeeping and cleaning supplies, room appliances and much more.
            We work hard to ensure that we can offer our customers the best
            prices, excellent quality, good service and on-time delivery. We
            also serve properties, with their own private label products in
            addition to our stocking product range. “If a job is worth doing, it
            is worth doing well.”.
          </p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [mailsuccess, setMailsuccess] = useState(false);
  const [mailfail, setMailfail] = useState(false);

  const sendmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2kq1lvm",
        "template_7q9oitu",
        e.target,
        "user_FHbcqX6JOmsI9MAZPLWvs"
      )
      .then(
        () => {
          setMailsuccess(true);
          removemsg();
          console.log("asdassdd");
        },
        () => {
          setMailfail(true);
          removemsg();
        }
      );
  };
  const removemsg = () => {
    setTimeout(function () {
      setMailsuccess(false);
      setMailfail(false);
    }, 3000);
  };
  return (
    <div className="contactpage">
      <div className="contactpageinner">
        <h1>Contact Us</h1>
        <div className="contactinfo">
          <div className="textdetail">
            <h2>Zartaj General Trader LLC.</h2>
            <div className="detail">
              <address>
                <IoLocationSharp /> Grand Mall, Shaikh Khalifa Street, POBOX
                45340, Ajman, UAE
              </address>
              <h4>Phone</h4>
              <p>
                <GiPhone /> +971-67445406
              </p>
              <p>
                <GiPhone /> +971-501240541
              </p>

              <h4>Email</h4>
              <p>
                <IoMdMail />
                <a href="mailto:info@zartajtrading.com">
                  info@zartajtrading.com
                </a>
              </p>
              <p>
                <IoMdMail />
                <a href="mailto:mubashar@zartajtrading.com">
                  mubashar@zartajtrading.com
                </a>
              </p>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38986.52227682363!2d55.425979788162174!3d25.390042716998536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5834f9723a75%3A0x82583122a8f6bf94!2sSheikh%20Khalifa%20Bin%20Zayed%20St%20-%20Ajman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1631601391713!5m2!1sen!2sus"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="contactform">
          <h2>Form</h2>
          <form action="" onSubmit={sendmail}>
            <input type="text" name="name" placeholder="Full Name" id="name" />
            <input type="text" name="phone" placeholder="Phone" id="phone" />
            <br />
            <input type="email" name="email" placeholder="Email" id="email" />
            <br />
            <textarea name="message" placeholder="Message" id="message" />
            <br />
            <input type="submit" id="submitbtn" value="SEND" />
          </form>
        </div>
      </div>
      <div className={mailsuccess ? "activesuccessmsg" : "successmsg"}>
        <TiTick />
        <p>Mail send successfully</p>
      </div>
      <div className={mailfail ? "activeerrormsg" : "errormsg"}>
        <ImCross />
        <p>Error sending mail </p>
      </div>
    </div>
  );
}

///////////////////////////////////////////
////// hotel components products list /////
///////////////////////////////////////////

const Contractbedding = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {bedlinen.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Bedlinen = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {bedlinen.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Bedscarf = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {bedscarf.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Bedspreads = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {bedspread.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Blankets = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {blankets.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Coverlets = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {coverlets.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Duvets = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {duvets.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Mattressencasements = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {mattressencasements.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Mattresspad = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {mattresspad.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Pillows = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {pillows.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Pillowcase = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {pillowcase.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Curtains = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {curtains.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Drapes = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {drapes.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Bath = () => {
  return (
    <div className="subcatprodspage">
      <h1>Bed Linen Products</h1>
      <ul>
        {bath.map((prod, key) => {
          return (
            <li key={key} className="indieprodcard">
              <Link to={`/hospitality/${prod.catid}/${prod.prodid}`}>
                <div>
                  <img src={require(`${prod.imgurl}`)} alt="bedsheet" />
                  <div className="details">
                    <p>{prod.category}</p>
                    <h4>{prod.title}</h4>
                  </div>
                  <br />
                  <br />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

////  ALL PAGE COMPOENTS /////

const Productpage = () => {
  let { catid, prodid }: any = useParams();
  const product = allproducts.find((product) => product.prodid == prodid);

  return (
    <div className="productspage">
      <section>
        <img src={require(`${product?.imgurl}`)} alt="product" />
        <div className="details">
          <div>
            <p className="cat">{product?.category}</p>
            <h2>{product?.title}</h2>
            <p>{product?.measurement}</p>
            <br />
            <p>{product?.desc}</p>
          </div>
          <button>
            <Link to="/contact">ENQUIRY</Link>
          </button>
        </div>
      </section>
    </div>
  );
};
