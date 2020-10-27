import React from 'react';

const SingleNews = (props) => {
    return(
        <>

                <div className="carousel-item-c">
                    <div className="card-box-b card-shadow news-box">
                        <div className="img-box-b">
                            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="" className="img-b img-fluid"/>
                        </div>
                        <div className="card-overlay">
                            <div className="card-header-b">
                                <div className="card-category-b">
                                    <a href="#" className="category-b">{props.title}</a>
                                </div>
                                <div className="card-title-b">
                                    <h2 className="title-2">
                                        <a href='#'>{props.subTitle}
                                            <br/> new</a>
                                    </h2>
                                </div>
                                <div className="card-date">
                                    <span className="date-b">{props.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        </>
    )
}

export default SingleNews;
