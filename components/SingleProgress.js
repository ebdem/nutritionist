import React from 'react';


const SingleProgress = (props) => {
    return(

            <div className="carousel-item-b" >
                <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                        <img src='https://static01.nyt.com/images/2019/02/28/opinion/28yun/28yun-jumbo.jpg?quality=90&auto=webp' alt="" className="img-a img-fluid"/>
                    </div>
                    <div className="card-overlay">
                        <div className="card-overlay-a-content">
                            <div className="card-header-a">
                                <h2 className="card-title-a">
                                    <a href="#">206 Mount
                                        <br/> {props.name}</a>
                                </h2>
                            </div>
                            <div className="card-body-a">
                                <div className="price-box d-flex">
                                    <span className="price-a">appointment | {props.price}</span>
                                </div>
                                <a href="#" className="link-a">Click here to view
                                    <span className="ion-ios-arrow-forward"></span>
                                </a>
                            </div>
                            <div className="card-footer-a">
                                <ul className="card-info d-flex justify-content-around">
                                    <li>
                                        <h4 className="card-info-title">Alan</h4>
                                        <span>340m
                                                 <sup>2</sup>
                                                </span>
                                    </li>
                                    <li>
                                        <h4 className="card-info-title">Food</h4>
                                        <span>2</span>
                                    </li>
                                    <li>
                                        <h4 className="card-info-title">Sport</h4>
                                        <span>4</span>
                                    </li>
                                    <li>
                                        <h4 className="card-info-title">Exercise</h4>
                                        <span>1</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default SingleProgress;
