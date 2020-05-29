import React from 'react';
import Newsbox from '../../components/newsbox/Newsbox';



function Home(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Newsbox></Newsbox>
                    </div>
                    <div className="col-md-4">
                        <Newsbox></Newsbox>
                    </div>
                    <div className="col-md-4">
                        <Newsbox></Newsbox>
                    </div>
                    <div className="col-md-4">
                        <Newsbox></Newsbox>
                    </div>
                    <div className="col-md-4">
                        <Newsbox></Newsbox>
                    </div>
                    <div className="col-md-4">
                        <Newsbox></Newsbox>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-4">
                        <Newsbox></Newsbox>
                    </div>
                    <div className="col-md-4">
                        <Newsbox></Newsbox>
                    </div>
                    <div className="col-md-4">
                        <Newsbox></Newsbox>
                    </div>
                </div> */}
            </div>
            
        </div>
    );
}


export default Home;

