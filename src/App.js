import React, { Component } from 'react';
import './cards.css';
import EventCard from './Components/EventCard';

const Event01 = {
  date: "7pm, Sunday, June 8",
  details: {
    name: "Sunday Dinner",
    imageUrl:
      "https://78.media.tumblr.com/e547f8e521410e2ebc84deeb34dc87b0/tumblr_nm7v2pVWcy1s2ne6go1_1280.jpg"
  }
};

const Event02 = {
    date: "7:30pm, Friday, June 20",
    details: {
      name: "Friday Dinner",
      imageUrl:
        "https://78.media.tumblr.com/e547f8e521410e2ebc84deeb34dc87b0/tumblr_nm7v2pVWcy1s2ne6go1_1280.jpg"
    }
  };

  const Event03 = {
    date: "5pm, Friday, July 6",
    details: {
      name: "4th of July BBQ",
      imageUrl:
        "https://78.media.tumblr.com/e547f8e521410e2ebc84deeb34dc87b0/tumblr_nm7v2pVWcy1s2ne6go1_1280.jpg"
    }
  };

  const Event04 = {
    date: "11am, Sunday, July 18",
    details: {
      name: "Brunch",
      imageUrl:
        "https://78.media.tumblr.com/e547f8e521410e2ebc84deeb34dc87b0/tumblr_nm7v2pVWcy1s2ne6go1_1280.jpg"
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