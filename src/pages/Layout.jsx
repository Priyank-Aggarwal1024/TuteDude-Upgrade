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



            <div className='layout'>
                <Navbar />
                <Hero />
                <Refund />
                <Courses />
                <OtherCourses />
                {
                    wid < 880 ? <Testimonials /> : null
                }
                {
                    wid >= 880 ? <Testimonials /> : null
                }
                <Faq />
                <Footer />

            </div>
            <div className="layout-bottom">
                <div className="hm-left">
                    <p className="fw-700 f-24 text-pink text-center">7</p>
                    <p className="fw-700 f-14 text-pink text-center" style={{ color: "#263238" }}>Selected Course</p>
                </div>
                <div className="hm-middle">
                    <p className="fw-700 f-24 text-pink text-center">₹799</p>
                    <p className="fw-700 f-14 text-pink text-center" style={{ color: "#263238" }}>Total Price </p>
                </div>
                <div className="hm-right">
                    <div className="proceed layout-proceed f-18 text-white">Procced</div>
                </div>
            </div>
        </>
    );
}

export default Layout;