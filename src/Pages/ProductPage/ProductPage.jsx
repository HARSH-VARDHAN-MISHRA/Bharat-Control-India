import React, { useEffect } from 'react'
import AllProducts from '../../Components/AllProducts/AllProducts'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })    
  }, [])
  return (
    <>
        <Breadcrumb title="Category Name" middle={{ url: '', text: '' }} last='Category Name' />
        <AllProducts/>
        
    </>
  )
}

export default ProductPage