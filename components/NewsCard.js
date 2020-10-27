import React from 'react';
import SingleNews from './SingleNews';


const NewsCard = () => {
    return(
        <>
            <section className='section-news section-t8'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='title-wrap d-flex justify-content-between'>
                                <div className="title-box">
                                    <h2 className="title-a">Latest News</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                           <div className="col-md-4">
                               <SingleNews
                                   title='Diyet'
                                   subTitle='Program'
                                   date='12.12.1999'
                               />
                           </div>
                            <div className="col-md-4">
                                <SingleNews
                                    title='Spor'
                                    subTitle='Program'
                                    date='12.12.1999'
                                />
                            </div>
                            <div className="col-md-4">
                                <SingleNews
                                    title='Beslenme'
                                    subTitle='Program'
                                    date='12.12.1999'
                                />
                            </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsCard;
