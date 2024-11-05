import React from 'react'
import { Footer, Navbar, Product } from "../components"
import { useRef, useEffect } from 'react';

const Products = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  )
}

export default Products