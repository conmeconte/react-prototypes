import React from 'react'
import {Route} from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import Our_macarons from './our_macarons'; 
import Gifts_parties from './gifts_parties';
import Contact from './contact'; 

export default props=>{
    return(
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={Our_macarons}/>
            <Route path="/gifts_parties" component={Gifts_parties}/>
            <Route path="/contact" component={Contact}/>
            
        </div>
    );
};
