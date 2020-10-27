import React from 'react';
import SingleService from "./SingleService";



const Services = () => {
    return(
        <section className="section-services section-t8">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap d-flex justify-content-between">
                            <div className="title-box">
                                <h2 className="title-a">Our Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <SingleService
                        title="Health"
                        desc="Lorem Ipsum Text Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır"
                    />
                    <SingleService
                        title="Spor"
                        desc="Lorem Ipsum Text Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır"
                    />
                    <SingleService
                        title="Food"
                        desc="Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır"
                    />
                </div>
            </div>

        </section>
    )
}

export default Services;
