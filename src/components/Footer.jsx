import contact from '../data/contact'
import Aside from './Aside'

const Footer = () => {
  return (
    <footer className="bg-white my-5">
      <div className="flex flex-col items-center mx-auto py-6 text-sm text-gray-600">
        {/* 左侧版权信息 */}
        <p>
          © {new Date().getFullYear()} {contact.company_name} 版权所有
        </p>
        {/* 电话地址信息 */}
        <div>电话：{contact.tel}</div>
        <div>地址：{contact.add}</div>
      </div>
    </footer>
  )
}

export default Footer
