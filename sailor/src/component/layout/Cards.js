import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<>
			<div className="cards">
				<h1>Check out these destinations and points of interest!</h1>
				<div className="cards__container">
					<div className="cards__wrapper">
						<ul className="cards__items">
							<CardItem
								src="http://www.backpaco.com/wp-content/uploads/2015/04/yosemite-waterfall.jpg"
								text="Explore Hidden Hiking Trails"
								label="Hikes"
								path="/hikes" 
							/>
							<CardItem
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabs1hZCxJHdgR-3pWtkS4X75Ag9BFX0vPaQ&usqp=CAU"
								text="Find Your Comfort"
								label="Hotels"
								path="/hotels"
							/>
						</ul>
						<ul className="cards__items">
							<CardItem
								src="http://assets.epicurious.com/photos/54ad654b6529d92b2c045e13/master/pass/51197040_turkey-ramen_1x1.jpg"
								text="Get Delighted With the Culinary Specialties of the Area"
								label="Cuisine"
								path="/Cuisines"
							/>
							<CardItem
								src="https://www.roadaffair.com/wp-content/uploads/2018/01/brandenburg-gate-berlin-germany-shutterstock_661903903.jpg"
								text="Walk Around the Same Ground Where History Was Once Made"
								label="History"
								path="/historical"
							/>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Cards;
