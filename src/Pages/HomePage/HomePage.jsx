import React from 'react'
import About from '../../Components/About/About'
import LineHead from '../../Components/LineHead/LineHead'
import CategorySection from '../../Components/CategorySection/CategorySection'

const HomePage = () => {
    return (
        <>
            {/* ---- caraSoul ----  */}
            <div className="container-fluid p-0">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://iscindiasales.co.in/static/media/banner-2.5960b744272bc70a6336.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://iscindiasales.co.in/static/media/banner-2.5960b744272bc70a6336.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://iscindiasales.co.in/static/media/banner-2.5960b744272bc70a6336.png" class="d-block w-100" alt="..." />
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
        </>
    )
}

export default HomePage