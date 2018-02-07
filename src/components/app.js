import React from 'react';
import MovieContainer from './movie_container';
import 'materialize-css/dist/css/materialize.min.css';


export default props=>{
    return(
        <div className='container'>
            <h1 className="text-center">Axios Demo</h1>
            <MovieContainer />
        </div>      
    )
}



