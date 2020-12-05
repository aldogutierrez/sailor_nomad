import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Hotels() {
  return (
    <>
      <div className="cards">
        <h1>Explore the High Elevations</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="http://tdr.aaa.com/tdr-images/images/property_photo/accommodation/26235H1.jpg"
                text="DoubleTree by Hilton (from $71)"
                label="Comprehensive Amenities"
                path=""
              />
              <CardItem
                src="https://upload.wikimedia.org/wikipedia/commons/a/aa/The_Fairmont_Hotel_in_San_Jose.jpg"
                text="The Fairmont Hotel"
                label="Style and Comfort"
                path=""
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://www.therowhotel.com/gallery-images/properties/6/0/3/1559699481__DSC6077blend_1.jpg"
                text="The Row Hotel"
                label="Best Rate Guaranteed"
                path=""
              />
              <CardItem
                src="https://www.hotelgranodeoro.com/images/photos/50.jpg"
                text="Hotel Grando de Oro"
                label="Signature Suites"
                path=""
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/130408099.jpg?k=407a62aa05d6dce3be6867aff48532d3513c104cd402dff05c6735da1382bb34&o="
                text="Best Western Plus San Jose"
                label="Gives Enjoynment"
                path=""
              />
              <CardItem
                src="https://dh-prod-cdn.azureedge.net/-/media/property/destination-hotels/hotel-de-anza/hdaexteriornight-maximum-cropped-1440x460.jpg?ts=e96376f8-9200-43e5-8c2e-4bf778ffcdc9"
                text="Hotel Deanza"
                label="A Destination Hotel"
                path=""
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotels;
