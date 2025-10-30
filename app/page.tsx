import { ArrowRight, Wrench, Palette, Ruler, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ProCraft Closets</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Space with 
                <span className="text-blue-600"> Custom Closets</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional closet design and installation services that maximize your storage 
                and bring organization to your life. Quality craftsmanship guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-gray-500 text-lg">Hero Image Placeholder</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">5 Year Warranty</p>
                    <p className="text-sm text-gray-600">On all installations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ProCraft Closets?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expert craftsmanship with innovative design to create storage solutions 
              that perfectly fit your lifestyle and space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Ruler className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Custom Design</h4>
              <p className="text-gray-600">
                Tailored solutions designed specifically for your space and storage needs.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Wrench className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Expert Installation</h4>
              <p className="text-gray-600">
                Professional installation by certified craftsmen with years of experience.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Premium Materials</h4>
              <p className="text-gray-600">
                High-quality materials and finishes that stand the test of time.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Quality Guarantee</h4>
              <p className="text-gray-600">
                Comprehensive warranty and satisfaction guarantee on all our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h3>
            <p className="text-xl text-gray-600">
              Complete closet solutions from design to installation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-200 rounded-lg aspect-video mb-6 flex items-center justify-center">
                <span className="text-gray-500">Walk-in Closets</span>
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">Walk-in Closets</h4>
              <p className="text-gray-600 mb-6">
                Transform your walk-in closet into a luxury dressing room with custom shelving, 
                drawers, and hanging solutions.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-200 rounded-lg aspect-video mb-6 flex items-center justify-center">
                <span className="text-gray-500">Reach-in Closets</span>
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">Reach-in Closets</h4>
              <p className="text-gray-600 mb-6">
                Maximize every inch of your reach-in closet with smart storage solutions 
                and efficient organization systems.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-200 rounded-lg aspect-video mb-6 flex items-center justify-center">
                <span className="text-gray-500">Pantry Organization</span>
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">Pantry Organization</h4>
              <p className="text-gray-600 mb-6">
                Custom pantry solutions that keep your kitchen organized and make 
                meal prep more efficient than ever.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and see how we can maximize your storage potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-2xl font-bold mb-4">ProCraft Closets</h4>
              <p className="text-gray-400 mb-4">
                Professional closet design and installation services that transform your space 
                and bring organization to your life.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Walk-in Closets</li>
                <li>Reach-in Closets</li>
                <li>Pantry Organization</li>
                <li>Custom Storage</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>info@procraftclosets.com</li>
                <li>123 Main St, City, State</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ProCraft Closets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}