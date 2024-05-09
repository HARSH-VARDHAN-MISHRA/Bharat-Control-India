import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
        <section className="about">
            <div className="container pt-0">
                <div className="row">
                    
                    <div className="col-md-8 content">
                        <h2>Welcome to <i>Bharat Control India</i></h2>
                        <p>Bharat Control India (Formerly known as BCI) is a non ferrous metal component manufacturer and exporter established in <strong>2010</strong> by <strong>Mr. Dinesh Mahajan</strong>. With state-of-the-art technology, we have design, analysis, manufacturing, and testing facilities under one roof backed with industry expertise.</p>
                        <p>We are majorly engaged in the production and supply of <strong>Brass Plumbing Components, brass precision turned components, bronze fittings, bronze bearings.</strong></p>
                        <p>We continuously work on improving our manufacturing processes by adopting flexibility in all the possible areas.</p>

                        <h4>Industries We Servered</h4>

                        <div className="grid row">
                            <div className="single col-md-4 col-6">
                                <h6> <i class="fa-solid fa-angles-right"></i> Plumbing & Sanitary</h6>
                            </div>
                            <div className="single col-md-4 col-6">
                                <h6> <i class="fa-solid fa-angles-right"></i> Fire fighting</h6>
                            </div>
                            <div className="single col-md-4 col-6">
                                <h6> <i class="fa-solid fa-angles-right"></i> Oil & Gas</h6>
                            </div>
                            <div className="single col-md-4 col-6">
                                <h6> <i class="fa-solid fa-angles-right"></i> Electrical & Power transmission</h6>
                            </div>
                            <div className="single col-md-4 col-6">
                                <h6> <i class="fa-solid fa-angles-right"></i> Defence</h6>
                            </div>
                        </div>
                        
                        <div className="about-btn">
                            <Link to="/about-us" className="button1">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Know More</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <img src="https://i.ibb.co/f0cvfQ5/Marine-bronze-fitting-Male-hose-nipple-and-male-hose-elbow-5.jpg" alt="about-us" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About