import React from 'react';
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Services from "../components/Services";






const Home = () => {


    return (
        <>
            <Navbar/>
            <Intro
                image="https://healthy-living.cmsmasters.net/wp-content/uploads/2016/08/slide-3.jpg"
                title="Health"
                count="2020"
                number="20"
                subTitle="AdıyamanDiyetisyen"
                where="Adıyaman"
                price="65"

            />
            <main id="main">
                <Services/>
            </main>

        </>
    )

}
export default Home;
