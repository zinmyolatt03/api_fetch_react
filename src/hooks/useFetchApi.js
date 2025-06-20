import { useEffect, useState } from "react";

export default function useFetchApi( url ){

    let [ data, setData ] = useState( null);
    useEffect( () => {
        fetch(url)
        .then( response => response.json())
        .then( result  =>{
            setData( result )
        } )
    }, [ url ])    

    return { data };
}