import Hero from '../components/Hero'
import products from '../data/products'

const Home = () => {
  return (
    <main className="block min-h-screen bg-gray-50 rounded-b-lg">
      <Hero />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => {
          return (
            <div className="bg-white rounded-sm shadow sm p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mx-auto mb-8"
              />
              <h3 className="font-semibold text-gray-700 text-center">
                {product.name}
              </h3>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Home
