import React, { useEffect } from 'react'
import About from '../../Components/About/About'
import LineHead from '../../Components/LineHead/LineHead'
import CategorySection from '../../Components/CategorySection/CategorySection'
import banner1 from './banner-1.jpeg'
import banner2 from './banner-2.jpg'
import banner3 from './banner-3.jpg'
import Contact from '../../Components/Contact/Contact'

const HomePage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
      }, [])
    return (
        <>
            {/* ---- caraSoul ----  */}
            <div className="container-fluid p-0 mb-sm-5">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={banner2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={banner3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <About/>
            <LineHead title={"Our Products"}/>
            <CategorySection/>
            <LineHead title={"Contact Us"}/>
            <Contact/>
        </>
    )
}

export default HomePage