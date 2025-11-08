import { useState } from 'react'
import logo from '../assets/images/chuxin_logo.png'
import routes from '../data/routes'
import { Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const { pathname } = useLocation() // 获取当前路径
  const [isOpen, setIsOpen] = useState(false)

  const NavLinks = ({ className, onClick }) => (
    <nav className={className}>
      {routes.map(({ path, name }) => (
        <Link
          key={path}
          to={path}
          onClick={onClick}
          className="relative px-2 py-1 text-base rounded-sm hover:bg-gray-200 block" // 移动端使用 block 确保独占一行
        >
          {name}
          {path === pathname && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
          )}
        </Link>
      ))}
    </nav>
  )

  return (
    <header className="bg-white shadow-sm relative">
      <div className="flex justify-between items-center px-10 py-4 max-w-7xl">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="楚信logo"
              className="h-15 w-auto object-contain"
            />
            <span className="hidden md:inline text-2xl font-semibold  text-blue-900 tracking-wider">
              楚信环保
            </span>
          </div>
        </Link>

        {/* 桌面导航条 (md: 屏幕及以上显示) */}
        <NavLinks className="hidden md:flex gap-6" />

        {/* 手机端汉堡/关闭按钮 (小于 md 屏幕时显示) */}
        <button
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className="md:hidden "
        >
          <GiHamburgerMenu className=" text-blue-900 h-8.5 w-auto" />
        </button>
      </div>
      {/* 手机端下拉菜单 (小于 md 屏幕时显示) */}
      {/* 使用过渡效果和条件渲染 */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 z-40">
          <div className="flex flex-col p-4 space-y-2">
            <NavLinks
              className="flex flex-col space-y-5 items-center"
              onClick={() => setIsOpen(false)} // 点击后关闭菜单
            />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
