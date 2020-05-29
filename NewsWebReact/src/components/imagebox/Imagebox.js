import React from 'react';

import Imagedemo from '../../assets/images/sample.jpg';

function Imagebox(){
    
    const imageStyle = {
        height: "120px",
        width: "200px",
    }
    
    
    return(
        <div>
            <img style={imageStyle} src={Imagedemo} alt="newsdemo"/>
        </div>
    );
}


export default Imagebox;