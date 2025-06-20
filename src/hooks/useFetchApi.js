import { useEffect, useState } from "react";

export default function useFetchApi( url ){

    let [ data, setData ] = useState( null);
    let [ loading,setLoading ] = useState( false );
    let [ error, setError ] = useState(null);

    useEffect( () => {
        let abortController = new AbortController();
        let signal  = abortController.signal;
        setLoading( true );
        fetch(url, {
            signal
        })
        .then( response => {
            if( ! response.ok){
                throw Error("page not found...")
            }
            return response.json()
        })
        .then( result  =>{
            setError( false )
            setLoading( false );
            setData( result )
        } )
        .catch( e => {
            setError(e.message )
        })

        return () => abortController.abort();
    }, [ url ])    

    return { data, loading, error  };
}