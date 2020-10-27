import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

const AdvicesText = () => {
    return(
        <>
            <div id="testimonial-carousel" className="owl-carousel owl-arrow">
                <div className="carousel-item-a">
                    <div className="testimonials-box">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="testimonial-img">
                                    <img src="https://images.unsplash.com/photo-1490723186985-6d7672633c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="testimonial-ico">
                                    <span><FontAwesomeIcon icon={faQuoteLeft}/></span>
                                </div>
                                <div className="testimonials-content">
                                    <p className="testimonial-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea
                                        nam praesentium debitis hic ber quibusdam voluptatibus officia expedita corpori.
                                    </p>
                                </div>
                                <div className="testimonial-author-box" >
                                    <img style={{borderRadius:'50% 50%'}} src="https://images.unsplash.com/photo-1490723186985-6d7672633c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="testimonial-avatar"/>
                                        <h5 className="testimonial-author">Albert & Erika</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvicesText;
