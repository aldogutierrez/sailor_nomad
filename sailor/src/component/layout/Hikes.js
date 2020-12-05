import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Hikes() {
  return (
    <>
      <div className="cards">
        <h1>Explore the High Elevations</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://cdn-assets.alltrails.com/uploads/photo/image/19242614/extra_large_bfc327ecec6d483c0c0a0c0a23cef795.jpg"
                text="Almaden Quicksilver Hike"
                label="Overlooking Silicon Valley"
                path='https://www.google.com/maps/search/almaden+quicksilver+hike'
              />
              <CardItem
                src="http://www.stpfriends.org/STP-HDR_02-07-10/P2075603_1_2_tonemapped-M.jpg"
                text="Santa Teresa County Park"
                label="The Hidden Springs Trail"
                path="https://www.google.com/maps/search/santa+teresa+county+park"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://blog-assets.thedyrt.com/uploads/2019/07/16448175273_988383b9b8_o-1.jpg"
                text="Mission Peak Hike"
                label="Explore Valley & Bay Views"
                path="https://www.google.com/maps/search/mission+peak+hike"
              />
              <CardItem
                src="https://parks.smcgov.org/sites/parks.smcgov.org/files/styles/flexslider_full/public/Crystal-Springs-004.jpg?itok=Q4Xk_0wm"
                text="Crystal Springs Regional Trail"
                label="Amazing View of the City"
                path="https://www.google.com/maps/search/crystal+springs+regional+trail"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="https://baynature.org/wp-content/uploads/2012/07/12-086.jpg"
                text="Hidden Villa"
                label="Bay Nature"
                path="https://www.google.com/maps/search/hidden+villa+california"
              />
              <CardItem
                src="https://86dave.files.wordpress.com/2014/08/p1150828.jpg"
                text="Teague Hill open space preserve"
                label="In Redwoods"
                path="https://www.google.com/maps/search/teague+hill+open+space+preserve"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hikes;
