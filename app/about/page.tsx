export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About ProCraft Closets
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Seattle's premier custom closet solution provider, transforming homes with 
              exceptional craftsmanship and personalized organization systems since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  ProCraft Closets was founded in 2015 by lifelong Seattle residents who recognized 
                  the need for high-quality, custom closet solutions in the Pacific Northwest. What 
                  started as a small family business has grown into the region's most trusted name 
                  in closet organization and design.
                </p>
                <p>
                  We began with a simple belief: every home deserves storage solutions that are both 
                  beautiful and functional. From our workshop in Seattle, we've designed and installed 
                  thousands of custom closets, helping families across the greater Seattle area transform 
                  their living spaces.
                </p>
                <p>
                  Today, ProCraft Closets continues to be a locally-owned business, committed to 
                  supporting our community while delivering the exceptional quality and service 
                  our customers have come to expect.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="ProCraft Closets workshop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission & Values</h2>
          </div>
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Mission */}
            <div className="mb-12 lg:mb-0">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  To transform Seattle homes with custom closet solutions that maximize space, 
                  enhance functionality, and reflect each client's unique style. We're committed 
                  to delivering superior craftsmanship while providing an exceptional customer 
                  experience from consultation to installation.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Our Values</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Quality craftsmanship in every detail
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Honest, transparent communication
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Local community commitment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Sustainable business practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced professionals dedicated to bringing your vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Michael Chen"
              />
              <h3 className="text-xl font-semibold text-gray-900">Michael Chen</h3>
              <p className="text-blue-600 mb-2">Founder & Lead Designer</p>
              <p className="text-gray-600 text-sm">
                15+ years in custom millwork and design. Seattle native with a passion 
                for maximizing space in Pacific Northwest homes.
              </p>
            </div>
            
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Sarah Johnson"
              />
              <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-blue-600 mb-2">Design Consultant</p>
              <p className="text-gray-600 text-sm">
                Interior design background with expertise in organization systems. 
                Helps clients create functional, beautiful storage solutions.
              </p>
            </div>
            
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="David Rodriguez"
              />
              <h3 className="text-xl font-semibold text-gray-900">David Rodriguez</h3>
              <p className="text-blue-600 mb-2">Master Craftsman</p>
              <p className="text-gray-600 text-sm">
                Third-generation woodworker with meticulous attention to detail. 
                Ensures every installation meets our highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose ProCraft Closets?</h2>
            <p className="mt-4 text-xl text-gray-300">
              Experience the ProCraft difference in every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-300">
                Deep understanding of Seattle homes and local design preferences
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-gray-300">
                High-quality, sustainable materials sourced from trusted suppliers
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-gray-300">
                Efficient project management ensures on-time completion
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-gray-300">
                Comprehensive warranty coverage for peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Service Areas</h2>
            <p className="mt-4 text-lg text-gray-600">
              Proudly serving the greater Seattle metropolitan area
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Seattle Proper</h3>
              <ul className="text-gray-600 space