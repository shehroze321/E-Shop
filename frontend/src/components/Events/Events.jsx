import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from '../../styles/styles'
import EventCard from "./EventCard";

const Events = () => {
  const {allEvents,isLoading} = useSelector((state) => state.events);  
   console.log("🚀 ~ file: Events.jsx:8 ~ Events ~ allEvents:", allEvents)
   
  return (
    <div>
     {
      !isLoading && (
        <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Popular Events</h1>
      </div>

      <div className="w-full grid">
      <EventCard data={allEvents && allEvents[2]} />
      
      </div>
     
    </div>
      )
     }
  </div>
  )
}

export default Events