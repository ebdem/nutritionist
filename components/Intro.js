import React from 'react';
import Link from 'next/link';

const Intro = (props) => {
    return(
        <div className="intro intro-carousel">
            <div id="carousel" className="owl-carousel owl-theme">
                <div className="carousel-item-a intro-item bg-image" style={{backgroundImage:`url(${props.image})`}}>
                    <div className="overlay overlay-a"></div>
                    <div className="intro-content display-table">
                        <div className="table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="intro-body">
                                            <p className="intro-title-top">{props.title}
                                                <br/> {props.count}</p>
                                            <h1 className="intro-title mb-4">
                                                <span className="color-b">{props.number} </span>{props.where}
                                                <br/> {props.subTitle}</h1>
                                            <p className="intro-subtitle intro-price">
                                               <Link href="#">
                                                   <a><span className="price-a">{props.price}</span></a>
                                               </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;
