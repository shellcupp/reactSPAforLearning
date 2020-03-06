import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
    <>
    <h1>This is a Carousel slideshow I made to share some family photos with you.</h1>
  <Carousel autoPlay>
    <div className="imagediv">
      <img src="../images/shell.jpg" alt="Michelle Cupp" />
      <p className="legend">Photo of Myself at desk at home</p>
    </div>
    <div className="imagediv">
      <img src="../images/shell2.jpg" alt="Michelle Cupp" />
      <p className="legend">Photo of myself outside</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids1.jpg" alt="Michelle's Children" />
      <p className="legend">St.Patrick's Day 2019</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids2.jpg" alt="Michelle's Children" />
      <p className="legend">Hunter got an achievement at school</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids3.jpg" alt="Michelle's Children" />
      <p className="legend">Gunner as Luigi</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids4.jpg" alt="Michelle's Children" />
      <p className="legend">Hunter as Shazam</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids5.jpg" alt="Michelle's Children" />
      <p className="legend">Kids truck or treating at school</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids6.jpg" alt="Michelle's Children" />
      <p className="legend">kids before school</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids7.jpg" alt="Michelle's Children" />
      <p className="legend">always smiling</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids8.jpg" alt="Michelle's Children" />
      <p className="legend">Gunner</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids9.jpg" alt="Michelle's Children" />
      <p className="legend">Picture day</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids10.jpg" alt="Michelle's Children" />
      <p className="legend">Walking to bus stop</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids11.jpg" alt="Michelle's Children" />
      <p className="legend">Go Cheifs</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids12.jpg" alt="Michelle's Children" />
      <p className="legend">walking to bus stop</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids13.jpg" alt="Michelle's Children" />
      <p className="legend">Kids at the park</p>
    </div>
    <div className="imagediv">
      <img src="../images/kids14.jpg" alt="Michelle's Children" />
      <p className="legend">Feeding a Lorikeet</p>
    </div>
  </Carousel>
  </>
);
