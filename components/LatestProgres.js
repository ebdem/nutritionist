import React from 'react';
import SingleProgress from "./SingleProgress";


const LatestProgres = () => {
    return(

            <section className="section-property section-t8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Latest Properties</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className=" owl-carousel owl-theme col-md-4">

                         <SingleProgress name='First' price='200'></SingleProgress>
                        </div>
                        <div className=" owl-carousel owl-theme col-md-4">

                            <SingleProgress name='First' price='200'></SingleProgress>
                        </div>
                        <div className=" owl-carousel owl-theme col-md-4">

                            <SingleProgress name='First' price='200'></SingleProgress>
                        </div>
                  </div>
                </div>
            </section>

    )
}

export default LatestProgres;
