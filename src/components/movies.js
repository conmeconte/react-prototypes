import React from 'react';

export default props=>{
    const info= props.info;
    console.log('info ', info); 
    return(
        <div className="col s12 m6 xl6">
            <div className="card indigo darden-1">
                <div className="card-content white-text">
                    <img src={info['im:image'][2].label}/>
                    <h3>{info['im:name'].label}</h3>
                    <p>{info.summary.label}</p>
                    <div className="video-container">
                        <iframe className='center-align' src={info.link[1].attributes.href}></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
};