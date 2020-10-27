import React from 'react';
import AdvicesText from './AdvicesText';


const Advices = () => {
    return(
        <>
            <div className='section-testimonials section-t8 nav-arrow-a'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Advices</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <AdvicesText/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advices;
