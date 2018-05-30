import React from "react";
import ReactDOM from 'react-dom';
import '../cards.css';
import FormModal from './modal';


function Image(props) {
  return (
    <img className="image" src={props.event.imageUrl} alt={props.event.name} />
  );
}

const EventName = (props) =>{
  return (
    <div>
      <Image event={props.event} />
      <div className="EventName-name">{props.event.name}</div>
    </div>
  );
}

function EventCard(props) {
  return (
    <div className="card">
      <EventName event={props.details} />
      <div>{props.date}</div>
      <FormModal event={props.details}/>
    </div>

  );
}



export default EventCard;


// const EventCard = () => (
//   <div>
//   <Card className="card" bgColor="#fff">
//     <ImageHeader alt="testAlt" imageSrc="http://via.placeholder.com/600x250?text=Placeholder" />
//     <CardBody className="siteDek">
//     <h2>Event Name</h2>
//       <p>
//        7pm June 8, 2018
//       </p>
//     </CardBody>
//     <CardFooter>
//       <p>
//         <a href="#123">I'm in!</a>
//       </p>
//     </CardFooter>
//   </Card>
// </div>
// );

// export default EventCard;