import logo from '../assets/images/chuxin_logo.png'
import routes from '../data/routes'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation() // 获取当前路径

  return (
    <header className="bg-white shadow-sm ">
      <div className="flex justify-between items-center px-10 py-4 max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="楚信logo" className="h-15 w-auto" />
          <span className="text-2xl font-semibold  text-blue-900 tracking-wider">
            楚信环保
          </span>
        </div>

        {/* 导航条 */}
        <nav className="flex gap-6">
          {routes.map(({ path, name }) => (
            <Link
              key={path}
              to={path}
              className="relative px-2 py-1 text-base rounded-sm hover:bg-gray-200"
            >
              {name}
              {/* 底部高亮条 */}
              {path === pathname && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
