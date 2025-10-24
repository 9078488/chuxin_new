import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import routes from './data/routes.jsx'
import Footer from './components/Footer.jsx'
import Maintainence from './pages/Maintainence.jsx'

const isMaintenance = import.meta.env.VITE_WEBSITE_MAINTAINENCE === 'true'

const App = () => {
  return isMaintenance ? (
    <Maintainence />
  ) : (
    <>
      {/* 页首 */}
      <Navbar />
      {/* 主体内容区 */}
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      {/* 页脚 */}
      <Footer />
    </>
  )
}

export default App
