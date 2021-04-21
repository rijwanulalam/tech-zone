import React from 'react';
import AboutUS from '../AboutUS/AboutUS';
import Services from '../Services/Services';
import Header from '../Header/Header';
import WhyUS from '../WhyUS/WhyUS';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUS></AboutUS>
            <Services></Services>
            <WhyUS></WhyUS>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;