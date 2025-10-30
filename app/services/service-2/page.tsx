import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Custom Walk-In Closets | ProCraft Closets Seattle | Professional Design & Installation',
  description: 'Transform your bedroom with custom walk-in closets in Seattle. Professional design, premium materials, expert installation. Free consultation. Call 206-555-0100',
  keywords: 'custom walk-in closets, Seattle closet design, bedroom storage, closet installation, walk-in closet systems',
}

export default function CustomWalkInClosetsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">ProCraft Closets</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">Seattle, WA</span>
              </div>
              <div className="flex items-center text-blue-600">
                <PhoneIcon className="h-4 w-4 mr-1" />
                <span className="font-semibold">206-555-0100</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Walk-In Closets in Seattle
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Create your dream walk-in closet with our expert design and installation services. 
                Transform your bedroom into a luxurious dressing room with custom storage solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Free Design Consultation
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
                  View Gallery
                </button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/walk-in-closet-hero.jpg"
                alt="Luxury custom walk-in closet in Seattle home"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose ProCraft for Your Walk-In Closet?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the ultimate in bedroom storage with our custom walk-in closet solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maximize Space</h3>
              <p className="text-gray-600">
                Transform unused bedroom space into a functional luxury dressing room with intelligent storage solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Features</h3>
              <p className="text-gray-600">
                LED lighting, jewelry drawers, shoe displays, and island seating create a boutique experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Increase Home Value</h3>
              <p className="text-gray-600">
                A professionally designed walk-in closet significantly increases your Seattle home's market value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Design</h3>
              <p className="text-gray-600">
                Every walk-in closet is designed specifically for your space, style preferences, and storage needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Materials</h3>
              <p className="text-gray-600">
                Choose from solid wood, high-grade laminates, and luxury hardware for lasting beauty and durability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Installation</h3>
              <p className="text-gray-600">
                Our certified installers ensure perfect fit and finish with minimal disruption to your daily routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Walk-In Closet Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final installation, we guide you through every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                We visit your Seattle home to assess the space and discuss your vision, needs, and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3D Design</h3>
              <p className="text-gray-600">
                Our designers create detailed 3D renderings so you can visualize your new walk-in closet.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Material Selection</h3>
              <p className="text-gray-600">
                Choose from our extensive selection of finishes, hardware, and luxury accessories.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Installation</h3>
              <p className="text-gray-600">
                Our expert team installs your custom walk-in closet with precision and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Walk-In Closet Investment Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for Seattle homeowners. Final cost depends on size, materials, and features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">
                $8,000 - $15,000
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Basic walk-in closet design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Laminate finish options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Standard hardware</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Hanging rods and shelving</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Professional installation</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">
                $15,000 - $25,000
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Custom design with island</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Wood veneer finishes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Soft-close draw