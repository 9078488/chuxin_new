import { useLocation } from 'react-router-dom'
import routes from '../data/routes'
import products from '../data/products'

const Aside = ({ selectedProduct, setSelectedProduct }) => {
  const { pathname } = useLocation()
  const currentRoute = routes.find((route) => route.path === pathname)
  const isProductsPage = pathname === '/products'

  return (
    <aside className="flex flex-col items-center w-1/6 border-r border-gray-300">
      {/* 通用标题 */}
      <h2 className="text-2xl text-blue-900 font-semibold tracking-wider">
        {currentRoute?.name || ''}
      </h2>
      {/* 产品列表 */}
      {isProductsPage && (
        <ul className="mt-4 flex flex-col items-center">
          {products.map((product) => (
            <li
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="hover:bg-gray-200 px-1 py-2 mb-2 rounded-sm relative"
            >
              <button>{product.name}</button>
              {product.id == selectedProduct.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
              )}
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Aside
