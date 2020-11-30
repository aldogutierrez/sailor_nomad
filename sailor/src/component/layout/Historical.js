import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Historical() {
  return (
    <>
      <div className="cards">
        <h1>History is a Weapon</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Mission_San_José_San_Antonio.JPG"
                text="Explore Mystery House"
                label="Mystery House"
                path=""
              />
              <CardItem
                src="https://www.sanjose.org/sites/default/files/styles/listing_detail_image/public/2017-10/img_8524_0.jpg?h=8602a759&itok=XYRrxj5j"
                text="Century of Japanese American history"
                label="Japanese Museum"
                path=""
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://www.sanjose.org/sites/default/files/styles/listing_detail_image/public/2017-10/c_2.jpg?itok=OoNPC3vj"
                text="Technology Revolution"
                label="Computer History Museum"
                path=""
              />
              <CardItem
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/San_Jose_Museum_of_Art_-_San_Jose%2C_CA_-_DSC03784.JPG"
                text="Modern and Contemporary Art Museum"
                label="Museum of Art"
                path=""
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chinese_Cultural_Garden_Gate.jpg/1024px-Chinese_Cultural_Garden_Gate.jpg"
                text="The Friendship Gate"
                label="Chinese Cultural Garden"
                path=""
              />
              <CardItem
                src="https://www.planetware.com/wpimages/2019/07/california-san-jose-top-rated-attractions-things-to-do-rosicrucian-egyptian-museum.jpg"
                text="Collection of Authentic Ancient Egyptian Artifacts"
                label="Rosicrucian-Egyptian Museum"
                path=""
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Historical;
