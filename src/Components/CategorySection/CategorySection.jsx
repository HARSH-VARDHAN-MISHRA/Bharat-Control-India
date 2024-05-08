import React from 'react'
import './CategorySection.css'
import { Link } from 'react-router-dom'

const CategorySection = () => {
    const allcategory = [
        {
            catImg : "https://i.ibb.co/99LBTd5/Bronze-bushings-4.jpg",
            cateName : "Brass precision turned components"
        },
        {
            catImg : "https://i.ibb.co/1r123b8/Marine-bronze-fitting-Male-hose-nipple-and-male-hose-elbow-3.jpg",
            cateName : "Bronze plumbing fittings"
        },
        {
            catImg : "https://i.ibb.co/yqg0WFy/Brass-sanitary-fittings-Forged-1.jpg",
            cateName : "Stainless steel pipe fittings"
        }
    ]
  return (
    <>
        <section className="categories">
            <div className="container py-0">
                <div className="category-grid">
                    {allcategory && allcategory.map((item,index)=>(
                        <Link to="" class="single-categ" key={index}>
                            <img src={item.catImg} alt={item.cateName} />
                            <div class="category-name">{item.cateName}</div>
                            <div class="layer">
                                <p><i class="fa-solid fa-link"></i></p>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default CategorySection