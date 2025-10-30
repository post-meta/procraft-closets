import { Metadata } from 'next'
import { PhoneIcon, MapPinIcon, CheckCircleIcon, ClockIcon, CogIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Walk-in Closets | ProCraft Closets Seattle',
  description: 'Transform your bedroom with a luxury custom walk-in closet. Professional design and installation in Seattle, WA. Free consultation and 3D design.',
  keywords: 'walk-in closets, custom closets, luxury closets, Seattle closet design, walk-in wardrobe',
  openGraph: {
    title: 'Custom Walk-in Closets | ProCraft Closets Seattle',
    description: 'Transform your bedroom with a luxury custom walk-in closet. Professional design and installation in Seattle, WA.',
    type: 'website',
  }
}

const benefits = [
  {
    title: 'Luxury Organization',
    description: 'Premium materials and finishes create a boutique-style dressing experience in your own home.',
    icon: <CheckCircleIcon className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Maximum Storage',
    description: 'Every inch optimized with smart storage solutions for clothes, shoes, accessories, and more.',
    icon: <CogIcon className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Increased Home Value',
    description: 'Walk-in closets are a highly desired feature that significantly increases property value.',
    icon: <CheckCircleIcon className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Personalized Design',
    description: 'Custom layouts tailored to your wardrobe, lifestyle, and space requirements.',
    icon: <WrenchScrewdriverIcon className="h-8 w-8 text-blue-600" />
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Space Assessment',
    description: 'Our designers evaluate your space, measure precisely, and discuss your vision and needs.',
    duration: '1-2 hours'
  },
  {
    step: '02',
    title: '3D Design Creation',
    description: 'We create detailed 3D renderings showing your custom walk-in closet from every angle.',
    duration: '3-5 days'
  },
  {
    step: '03',
    title: 'Material Selection',
    description: 'Choose from premium finishes, hardware, lighting, and organizational accessories.',
    duration: '1 week'
  },
  {
    step: '04',
    title: 'Custom Manufacturing',
    description: 'Your closet components are precision-crafted in our local workshop using premium materials.',
    duration: '3-4 weeks'
  },
  {
    step: '05',
    title: 'Professional Installation',
    description: 'Expert installation with minimal disruption, including electrical work and finishing touches.',
    duration: '2-3 days'
  }
]

const pricingTiers = [
  {
    name: 'Essential Walk-in',
    price: '$3,500 - $6,500',
    features: [
      'Basic hanging rods and shelving',
      'Melamine finish options',
      'Standard hardware',
      'Basic lighting preparation',
      '6-8 linear feet coverage',
      '1-year warranty'
    ],
    ideal: 'Small to medium walk-in spaces'
  },
  {
    name: 'Premium Walk-in',
    price: '$6,500 - $12,000',
    features: [
      'Custom drawer systems',
      'Wood grain laminate finishes',
      'Upgraded hardware and accessories',
      'LED lighting integration',
      '8-12 linear feet coverage',
      '5-year warranty'
    ],
    ideal: 'Medium to large walk-in spaces',
    popular: true
  },
  {
    name: 'Luxury Walk-in',
    price: '$12,000 - $25,000+',
    features: [
      'Real wood or high-gloss finishes',
      'Premium soft-close mechanisms',
      'Custom island and seating',
      'Full lighting and electrical',
      '12+ linear feet coverage',
      'Lifetime warranty'
    ],
    ideal: 'Large master suite walk-ins'
  }
]

const faqs = [
  {
    question: 'How much space do I need for a walk-in closet?',
    answer: 'A minimum of 6x6 feet is recommended for a functional walk-in closet, though we can work with smaller spaces. Larger spaces allow for more luxury features like islands, seating, and extensive storage.'
  },
  {
    question: 'Can you add electrical and lighting to my walk-in closet?',
    answer: 'Yes, we work with licensed electricians to add outlets, switches, and LED lighting systems. This includes motion sensors, under-shelf lighting, and accent lighting for a luxury feel.'
  },
  {
    question: 'How long does a walk-in closet project take?',
    answer: 'From design approval to completion, most walk-in closet projects take 4-6 weeks. This includes 3-4 weeks for manufacturing and 2-3 days for installation.'
  },
  {
    question: 'Do you handle permits for walk-in closet renovations?',
    answer: 'We assist with permit applications when electrical work or structural modifications are required. Most closet installations don\'t require permits, but we\'ll advise based on your specific project.'
  },
  {
    question: 'What warranty do you provide on walk-in closets?',
    answer: 'We offer warranties ranging from 1 year to lifetime depending on the package selected. All hardware and installation workmanship is covered, with premium packages including lifetime coverage.'
  },
  {
    question: 'Can you work around existing flooring and trim?',
    answer: 'Absolutely. We carefully work around existing finishes and can match trim work. We also coordinate with flooring contractors if you\'re updating the space completely.'
  }
]

export default function Service3Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">ProCraft Closets</Link>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>Seattle, WA</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>206-555-0100</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom Walk-in Closets
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your bedroom into a luxury suite with a professionally designed walk-in closet that maximizes space and style
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose a Custom Walk-in Closet?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A professionally designed walk-in closet offers luxury, organization, and significant value to your home
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Walk-in Closet Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we guide you through every step of creating your dream walk-in closet
            </p>
          </div>
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      {step.step}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="lg:w-2/3 bg-gray-100 rounded-xl p-8">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">Step {step.step} Visualization</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Walk-in Closet Pricing Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for every budget. All packages include design consultation, 3D rendering, and professional installation
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {tier.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{tier.price}</div>
                  <p className="text-gray-600 mb-6">{tier.ideal}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold ${tier.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition`}>
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Prices vary based on size, materials, and complexity. 
              <Link href="/contact" className="text-blue-600 hover:underline ml-1">
                Contact us for a personalized quote
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about custom walk-in closets
            </p>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4"