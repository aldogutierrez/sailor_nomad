import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function HistoricalSites() {
  return (
    <>
      <div className="cards">
        <h1>History is a Weapon</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://s3-media0.fl.yelpcdn.com/bphoto/QLLj2KKbtj1PrhDLRlh7Ww/o.jpg"
                text="Explore Mystery House"
                label="Mystery House"
                path="https://www.google.com/maps/search/Mystery+House+Mission+San+Jose+San+Antonio"
              />
              <CardItem
                src="https://www.sanjose.org/sites/default/files/styles/listing_detail_image/public/2017-10/img_8524_0.jpg?h=8602a759&itok=XYRrxj5j"
                text="Century of Japanese American history"
                label="Japanese Museum"
                path="https://www.google.com/maps/search/Century+of+Japanese+American+History"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://www.sanjose.org/sites/default/files/styles/listing_detail_image/public/2017-10/c_2.jpg?itok=OoNPC3vj"
                text="Technology Revolution"
                label="Computer History Museum"
                path="https://www.google.com/maps/search/The+Computer+History+Museum"
              />
              <CardItem
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/San_Jose_Museum_of_Art_-_San_Jose%2C_CA_-_DSC03784.JPG"
                text="Modern and Contemporary Art Museum"
                label="Museum of Art"
                path="https://www.google.com/maps/search/San+Jose+Museum+Of+Art"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chinese_Cultural_Garden_Gate.jpg/1024px-Chinese_Cultural_Garden_Gate.jpg"
                text="The Friendship Gate"
                label="Chinese Cultural Garden"
                path="https://www.google.com/maps/search/Chinese+Cultural+Garden+San+Jose"
              />
              <CardItem
                src="https://www.planetware.com/wpimages/2019/07/california-san-jose-top-rated-attractions-things-to-do-rosicrucian-egyptian-museum.jpg"
                text="Collection of Authentic Ancient Egyptian Artifacts"
                label="Rosicrucian-Egyptian Museum"
                path="https://www.google.com/maps/search/Rosicrucian+Egyptian+Museum"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoricalSites;
