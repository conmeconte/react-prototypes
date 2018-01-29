import React from 'react';
import ContactList from './contact-list';


function App(){
    return( <div className="container">
                <h1 className="text-center">Address Book</h1>
                <div className='row'>
                    <ContactList/>
                </div>
            </div>)
}


export default App;

