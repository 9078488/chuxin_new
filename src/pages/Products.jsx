import MainLayout from '../components/MainLayout'
import PageLayout from '../components/PageLayout'
import Aside from '../components/Aside'
import products from '../data/products'
import { useState } from 'react'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  return (
    <PageLayout>
      {/* Left Side */}
      <Aside
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      {/* Right Side */}
      <MainLayout>
        {
          <div>
            <h1 className="text-xl font-bold text-blue-900 mb-8">
              {selectedProduct.name}
            </h1>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="max-h-80 w-auto rounded-2xl my-5"
            />
            {selectedProduct.detail.map((feature, index) => {
              return (
                <p key={index} className="text-base text-gray-700 mb-2">
                  {feature}
                </p>
              )
            })}
          </div>
        }
      </MainLayout>
    </PageLayout>
  )
}

export default Products
