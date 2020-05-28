import React from 'react';

import Imagebox from '../imagebox/Imagebox';
import Detailsbox from '../detailsbox/Detailsbox';
import Timebox from '../timebox/Timebox';
import Countrybox from '../countrybox/Countrybox';

function Newsbox(){
    return(
        <div>
            <Imagebox></Imagebox>
            <Detailsbox></Detailsbox>
            <Timebox></Timebox>
            <Countrybox></Countrybox>
        </div>
    );
}


export default Newsbox;