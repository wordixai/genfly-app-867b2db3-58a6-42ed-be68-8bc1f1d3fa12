import { Coffee, Croissant, MapPin } from 'lucide-react'

const Index = () => {
  const menuItems = [
    {
      name: "Espresso",
      description: "Rich and bold single shot of espresso",
      price: "$3.50"
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: "$4.50"
    },
    {
      name: "Avocado Toast",
      description: "Sourdough with avocado, cherry tomatoes, and feta",
      price: "$8.50"
    },
    {
      name: "Blueberry Muffin",
      description: "Freshly baked with organic blueberries",
      price: "$3.75"
    }
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-4">Brew & Bites</h1>
            <p className="text-xl mb-8">Artisanal coffee and fresh pastries in the heart of the city</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Story</h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Founded in 2015, Brew & Bites is a cozy neighborhood cafe dedicated to serving
            high-quality coffee and homemade baked goods. We source our beans from ethical
            farms and bake fresh every morning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="text-xl font-semibold mb-2">Specialty Coffee</h3>
            <p className="text-amber-800">Single-origin beans roasted in-house</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Croissant className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="text-xl font-semibold mb-2">Fresh Baked</h3>
            <p className="text-amber-800">Daily selection of pastries and breads</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="text-xl font-semibold mb-2">Cozy Space</h3>
            <p className="text-amber-800">Perfect spot to work or relax</p>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Menu Favorites</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-amber-800 mb-4">{item.description}</p>
                <p className="text-amber-600 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Visit Us</h2>
          <p className="text-lg text-amber-800 mb-8">123 Coffee Street, Beanville</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p className="text-amber-800">Monday - Friday: 7am - 7pm</p>
              <p className="text-amber-800">Saturday - Sunday: 8am - 6pm</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-amber-800">hello@brewandbites.com</p>
              <p className="text-amber-800">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;