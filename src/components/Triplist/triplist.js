import React, { useEffect, useState } from 'react'
import useFetchApi from '../../hooks/useFetchApi';
import './triplist.css'

export default function Triplist() {

    let [ url , setUrl ] = useState("http://localhost:3001/trips");    
    let { data : trips, loading, error } = useFetchApi(url);
    
    const findTrips = () => {
        setUrl("http://localhost:3001/trips?country=Myanmar");
    }

    return (
        <div> 
            <div className='trip-container'>
                <h1> Ready to go? </h1>
                {/* buttons */}
                <button onClick={() => setUrl("http://localhost:3001/trips")}> all Trips </button>
                <button onClick={findTrips}> Trips in Myanmar  </button>

                { error && ( <p className='error'> { error } </p> )} 
                
                { loading && ( <p className='loading'> loading </p> )}
                {!loading && ( <ul>

                    {trips && trips.map( trip => (
                        <li key={trip.id}> 
                            <h3> {trip.name} </h3>
                            <p> price - { trip.price } bhat </p>
                        </li>
                    ))}
                </ul>)}
            </div>
        </div>
    )
}
