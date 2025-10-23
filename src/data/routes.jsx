import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Contact from '../pages/Contact'

const routes = [
  { path: '/', element: <Home />, name: '首页' },
  { path: '/about', element: <About />, name: '关于我们' },
  { path: '/products', element: <Products />, name: '产品中心' },
  { path: '/contact', element: <Contact />, name: '联系我们' },
]

export default routes
