import React, { Component } from 'react';
import './cards.css';
import EventCard from './Components/EventCard';

const Event01 = {
  date: "7pm, Sunday, June 8",
  details: {
    name: "Sunday Dinner",
    imageUrl:
"https://c.pxhere.com/photos/3b/20/depth_of_field_dough_food_prep_fresh_pasta-1366240.jpg!d"}
};

const Event02 = {
    date: "7:30pm, Friday, June 20",
    details: {
      name: "Friday Dinner",
      imageUrl:
"https://www.maxpixel.net/static/photo/2x/Pizza-Food-Italy-3000274.jpg"}
  };

  const Event03 = {
    date: "5pm, Friday, July 6",
    details: {
      name: "4th of July BBQ",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kozjLlkNJWhAOkOrOxQWDxcgzPMEAo87_WacrK8hnm7IJfyQQg"
    }
  };

  const Event04 = {
    date: "11am, Sunday, July 18",
    details: {
      name: "Brunch",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NhMRaWOrUU_IpJlrb8hAUI1zCbM27yAcIzYOAFxDcIwAcVmW"
    }
  };

const CardGrid = () => (
<div className="body"> <div className="wrapper">
      <div className="intro">
        <div className="siteTitle"> Food Parties</div>
        <div className="siteDek"> Come Over For A Meal! </div>
      </div> 
    <EventCard date={Event01.date} details={Event01.details} />
    <EventCard date={Event02.date} details={Event02.details} />
    <EventCard date={Event03.date} details={Event03.details} />
    <EventCard date={Event04.date} details={Event04.details} />
        </div>
        </div>

      )
  
export default CardGrid;