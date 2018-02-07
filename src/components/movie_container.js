import React, { Component } from 'react';
import axios from 'axios'; 
import Movie from './movies'

class MovieContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            movies: []
        }
    }
    componentWillMount(){
        const API_URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(API_URL).then((resp)=>{
            this.setState({
                movies: resp.data.feed.entry
            })
        })
    }
    render(){
        const movieList = this.state.movies.map((item, index)=>{
            return(<Movie info={item} key={index}/>)
        });

        return(
            <div>
                {movieList}
            </div>
        )
    }
}

export default MovieContainer; 