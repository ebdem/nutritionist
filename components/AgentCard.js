import React from 'react';


const AgentCard = () => {
    return(

            <div className="col-md-4">
                <div className="card-box-d" style={{height:'100%'}}>
                    <div className='card-img-a'>
                        <img  src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' alt="" className="img-d img-fluid"/>

                    </div>
                    <div className='card-overlay card-overlay-hover'>
                        <div className="card-header-d">
                            <div className="card-title-d align-self-center">
                                <h3 className="title-d">
                                    <a href="#" className="link-two">Margaret Sotillo
                                        <br/> Escala</a>

                                </h3>
                            </div>
                        </div>
                        <div className="card-body-d">
                            <p className="content-d color-text-a">
                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                            </p>
                            <div className="info-agents color-a">
                                <p>
                                    <strong>Phone: </strong> +54 356 945234</p>
                                <p>
                                    <strong>Email: </strong> agents@example.com</p>
                            </div>
                        </div>
                        <div className="card-footer-d">
                            <div className="socials-footer d-flex justify-content-center">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" className="link-one">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="link-one">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="link-one">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="link-one">
                                            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="link-one">
                                            <i className="fa fa-dribbble" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default AgentCard;
