import { Link } from 'react-router-dom'
import danfoss_sondex from '/danfoss_sondex.jpg'

const Hero = () => {
  return (
    <section className="w-full rounded-2xl mb-8 ">
      <div className="flex flex-col md:flex-row md:gap-x-60 px-30 bg-linear-to-r from-blue-50 to-white p-8 rounded-2xl shadow-sm">
        {/* 文本部分 */}
        <div>
          <div className="flex flex-col md:flex-row md:gap-3 text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-8">
            <div>桑德斯</div>
            <div>授权代理商</div>
          </div>
          <p className="hidden md:block text-base text-gray-700 mb-8">
            我们是丹佛斯（原桑德斯）板式换热器的授权代理商。
          </p>

          <div className="hidden md:flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-block px-5 py-3 rounded-lg font-medium text-sm border shadow-sm hover:shadow-md bg-blue-900 text-white"
            >
              查看产品
            </Link>
            <Link
              to="/contact"
              className="inline-block px-5 py-3 rounded-lg font-medium text-sm border hover:bg-gray-100"
            >
              联系我们
            </Link>
          </div>
        </div>
        {/* Danfoss Logo for >= md*/}
        <div className="hidden md:flex justify-center items-center py-10 px-10 md:py-15  max-w-md rounded-xl overflow-hidden  bg-white  shadow-md">
          <img src={danfoss_sondex} alt="danfoss_sondex_logo" />
        </div>
        {/* Danfoss Logo for < md*/}
        <img
          src={danfoss_sondex}
          alt="danfoss_sondex_logo"
          className="md:hidden rounded-sm object-contain w-full"
        />
      </div>
    </section>
  )
}

export default Hero
