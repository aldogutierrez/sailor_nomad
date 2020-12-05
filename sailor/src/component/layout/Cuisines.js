import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cuisines() {
  return (
    <>
      <div className="cards">
        <h1>World Resturants</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://media-cdn.tripadvisor.com/media/photo-s/11/57/68/f4/photo6jpg.jpg"
                text="Swaad Indian Cuisine"
                label="The Taste of India"
                path="https://www.google.com/maps/search/Swaad+Indian+Cuisine+San+Jose"
              />
              <CardItem
                src="https://s3-media0.fl.yelpcdn.com/bphoto/HvVPyHJtGW7_eEjGk_y3dA/o.jpg"
                text="Grandma’s Kitchen"
                label="Flavors From China"
                path="https://www.google.com/maps/search/Grandmas+Kitchen+San+Jose"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://s3-media0.fl.yelpcdn.com/bphoto/mRR8HzDXkSgErP6y-P5MXg/o.jpg"
                text="Vn Grill"
                label="Vietnamese, Asian Fusion"
                path="https://www.google.com/maps/search/Vn+Grill+San+Jose"
              />
              <CardItem
                src="https://img1.wsimg.com/isteam/ip/a5fbb446-131a-45bc-91bf-4c6a80e944a5/DSC05777.jpg/:/rs=w:1300,h:800"
                text="Angelou's Mexican Grill"
                label="Mexican Taste"
                path="https://www.google.com/maps/search/Angelous+Mexican+grill+san+jose"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="http://www.kabulrestaurant.net/images/entrees/11.jpg"
                text="Kabul Afghan Cuisine"
                label="Authentic Food"
                path="https://www.google.com/maps/search/Kabul+Afghan+Cuisine+San+Jose"
              />
              <CardItem
                src="https://media.olivegarden.com/en_us/images/product/shrimp-scampi-dpv-590x365.jpg"
                text="Olive Garden"
                label="Italian Restaurant"
                path="https://www.google.com/maps/search/Olive+Garden+Downtown+San+Jose"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cuisines;
