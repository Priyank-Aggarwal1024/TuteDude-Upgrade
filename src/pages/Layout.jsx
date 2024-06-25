import React, { useState } from 'react';
import './layout.css'
import Navbar from './home/Navbar';
import Testimonials from './home/Testimonials';
import Faq from './home/Faq';
import Footer from './home/Footer';
import Hero from './home/Hero';
import Refund from './home/Refund';
import Courses from './home/Courses';
import OtherCourses from './home/OtherCourses';
function Layout(props) {
    const [wid, setWid] = useState(window.innerWidth);
    window.addEventListener('resize', (e) => {
        if (window.innerWidth < 880 && wid >= 880) {
            setWid(window.innerWidth)
        }
        else if (window.innerWidth >= 880 && wid < 880) {
            setWid(window.innerWidth)
        }
    })
    return (
        <>
            <div className="upg-pag-layout">
                <Navbar />
                <Hero />
                <Refund />
                <Courses />
                <OtherCourses />
                <Testimonials />
                <Faq />
                <Footer />

            </div>
            <div className="upg-pag-layout-bottom">
                <div className="upg-pag-hm-left">
                    <p className="upg-pag-fw-700 upg-pag-f-34 upg-pag-text-pink upg-pag-text-center">7</p>
                    <p className="upg-pag-fw-700 upg-pag-f-16 upg-pag-text-pink upg-pag-text-center" style={{ color: "#263238" }}>Selected Course</p>
                </div>
                <div className="upg-pag-hm-middle">
                    <p className="upg-pag-fw-700 upg-pag-f-34 upg-pag-text-pink upg-pag-text-center">₹799</p>
                    <p className="upg-pag-fw-700 upg-pag-f-16 upg-pag-text-pink upg-pag-text-center" style={{ color: "#263238" }}>Total Price </p>
                </div>
                <div className="upg-pag-hm-right">
                    <div className="upg-pag-proceed upg-pag-layout-proceed upg-pag-f-18 upg-pag-text-white">Procced</div>
                </div>
            </div>
        </>
    );
}

export default Layout;