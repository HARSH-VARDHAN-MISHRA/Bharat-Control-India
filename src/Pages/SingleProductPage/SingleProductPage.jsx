import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import './SingleProductPage.css'
import LineHead from '../../Components/LineHead/LineHead'
import AllProducts from '../../Components/AllProducts/AllProducts'

const SingleProductPage = () => {
    const product = {
        id: 1,
        productName: "Reducing bush",
        productImages: ["https://i.ibb.co/MpnMvMW/Marine-bronze-fitting-Reducing-bush-1.jpg", "https://i.ibb.co/dWTV3MW/Marine-bronze-fitting-Reducing-bush-2.jpg", "https://i.ibb.co/Cb9ByD9/Marine-bronze-fitting-Reducing-bush-3.jpg", "https://i.ibb.co/yq4mDsG/Marine-bronze-fitting-Reducing-bush-4.jpg"],
        productCategory: "Marine Bronze Fitting",
        productSizes: "12x12 , 15x20 , 10x12",
        CategoryMaterial: "Your Material Name",
        Application: "Application",
        Desc: "Bharat Control India is an established name in the leading metal industries and we aspire to grow even bigger in the coming time. We believe in adopting all the latest technologies that can help us in manufacturing supreme quality products with the utmost automation."
    }
    const [mainImage, setMainImage] = useState(product.productImages[0]);

    const handleImageClick = (imgSrc) => {
        setMainImage(imgSrc);
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })    
      }, [])
    return (
        <>
            <Breadcrumb title="Product Name" middle={{ url: '/our-products', text: 'Our Products' }} last='Product Name' />
            <section className="product-page">
                <div className="container py-0">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="images">
                                <div className="main-img">
                                    <img src={mainImage} alt={product.productName} />
                                </div>
                                <div className="row">
                                    {product.productImages && product.productImages.map((imgItem, imgIndex) => (
                                        <div className="col-3" key={imgIndex}>
                                            <img
                                                className='small-img'
                                                src={imgItem}
                                                alt={product.productName}
                                                onClick={() => { handleImageClick(imgItem) }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <h2>{product.productName}</h2>
                            <h4>{product.productCategory}</h4>
                            <p className='desc'>{product.Desc}</p>

                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th scope="col">Sizes</th>
                                        <td>{product.productSizes}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Material</th>
                                        <td>{product.CategoryMaterial}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Application</th>
                                        <td>{product.Application}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <LineHead title={"Related Products"}/>
            <AllProducts/>
        </>
    )
}

export default SingleProductPage