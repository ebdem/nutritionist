import React from 'react';
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Services from "../components/Services";
import LatestProgress from "../components/LatestProgress";
import BestAgents from "../components/BestAgents";
import LatestNew from "../components/LatestNew";
import Advices from "../components/Advices";
import Footer from "../components/Footer";






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
                where="FATOŞ"
                price="65"

            />
            <main id="main">
                <Services/>
            </main>

            <LatestProgress/>

            <BestAgents/>

            <LatestNew/>

            <Advices/>

            <Footer/>


        </>
    )

}
export default Home;
