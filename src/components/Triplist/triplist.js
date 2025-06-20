import React, { useEffect, useState } from 'react'
import './triplist.css'

export default function Triplist() {

    let [ trips,setTrips ] = useState(null);
    let [ url , setUrl ] = useState("http://localhost:3001/trips");

    useEffect( () => {
        fetch(url)
        .then( response => response.json())
        .then( trips => {
            setTrips( trips );
        })
    }, [ url ])

    const findTrips = () => {
        setUrl("http://localhost:3001/trips?country=Myanmar");
    }


    return (
        <div className='trip-container'>
            <h1> Ready to go? </h1>
            {/* buttons */}
            <button onClick={() => setUrl("http://localhost:3001/trips")}> all Trips </button>
            <button onClick={findTrips}> Trips in Myanmar  </button>
            <ul>

                {trips && trips.map( trip => (
                    <li key={trip.id}> 
                        <h3> {trip.name} </h3>
                        <p> price - { trip.price } bhat </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
