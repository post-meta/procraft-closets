import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckIcon, StarIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function Service1Page() {
  const benefits = [
    {
      title: 'Custom Design Solutions',
      description: 'Tailored closet systems designed specifically for your Seattle home and lifestyle needs.',
      icon: '🎯'
    },
    {
      title: 'Premium Materials',
      description: 'High-quality, moisture-resistant materials perfect for Seattle\'s climate conditions.',
      icon: '💎'
    },
    {
      title: 'Space Optimization',
      description: 'Maximize every square inch of your closet space with intelligent storage solutions.',
      icon: '📐'
    },
    {
      title: 'Professional Installation',
      description: 'Expert installation team ensures perfect fit and finish every time.',
      icon: '🔧'
    },
    {
      title: 'Lifetime Warranty',
      description: 'Comprehensive warranty coverage on all materials and craftsmanship.',
      icon: '🛡️'
    },
    {
      title: 'Local Seattle Expertise',
      description: 'Deep understanding of Seattle homes and architectural styles.',
      icon: '🏠'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'Schedule your complimentary in-home consultation where we assess your space and discuss your needs.',
      duration: '60 minutes'
    },
    {
      step: 2,
      title: 'Custom Design',
      description: 'Our designers create a 3D rendering of your custom closet system with detailed specifications.',
      duration: '3-5 days'
    },
    {
      step: 3,
      title: 'Material Selection',
      description: 'Choose from our premium selection of finishes, hardware, and accessories.',
      duration: '1-2 days'
    },
    {
      step: 4,
      title: 'Manufacturing',
      description: 'Your custom closet components are precision-manufactured in our Seattle facility.',
      duration: '7-10 days'
    },
    {
      step: 5,
      title: 'Professional Installation',
      description: 'Our certified installers complete your project with attention to every detail.',
      duration: '4-8 hours'
    },
    {
      step: 6,
      title: 'Final Walkthrough',
      description: 'We ensure everything meets your expectations and provide care instructions.',
      duration: '30 minutes'
    }
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$1,200 - $2,500',
      description: 'Perfect for small to medium closets',
      features: [
        'Basic shelving system',
        'Single hanging rod',
        'Shoe storage rack',
        'Standard melamine finish',
        '1-year warranty',
        'Professional installation'
      ]
    },
    {
      name: 'Premium',
      price: '$2,500 - $4,500',
      description: 'Ideal for master bedrooms',
      features: [
        'Custom shelving configuration',
        'Multiple hanging rods',
        'Drawers and specialty storage',
        'Wood grain finishes',
        'Soft-close hardware',
        '5-year warranty',
        'LED lighting options',
        'Professional installation'
      ],
      popular: true
    },
    {
      name: 'Luxury',
      price: '$4,500 - $8,000+',
      description: 'Ultimate closet experience',
      features: [
        'Full custom design',
        'Premium hardwood options',
        'Integrated jewelry storage',
        'Pull-out accessories',
        'Custom crown molding',
        'Lifetime warranty',
        'Smart lighting system',
        'Concierge installation service'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How long does the installation process take?',
      answer: 'Most closet installations in Seattle homes take 4-8 hours depending on complexity. We complete most projects in a single day to minimize disruption to your routine.'
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes, we offer flexible financing options including 0% APR for qualified customers. We work with multiple lenders to find the best solution for your budget.'
    },
    {
      question: 'What materials do you use?',
      answer: 'We use high-quality materials including moisture-resistant melamine, solid wood, and premium hardware. All materials are selected to perform well in Seattle\'s climate.'
    },
    {
      question: 'Can you work with existing closet spaces?',
      answer: 'Absolutely! We specialize in maximizing existing closet spaces. Our designers are experts at working within the unique constraints of Seattle-area homes.'
    },
    {
      question: 'Do you provide a warranty?',
      answer: 'Yes, we offer comprehensive warranties ranging from 1 year to lifetime depending on the package selected. All installation work is guaranteed.'
    },
    {
      question: 'How far in advance should I schedule?',
      answer: 'We recommend scheduling 2-3 weeks in advance, though we can often accommodate rush projects. Peak seasons (spring/summer) may require longer lead times.'
    }
  ];

  return (
    <>
      <Head>
        <title>Custom Closet Design & Installation | ProCraft Closets Seattle</title>
        <meta name="description" content="Transform your Seattle home with custom closet solutions. Professional design, premium materials, expert installation. Call 206-555-0100 for free consultation." />
        <meta name="keywords" content="custom closets Seattle, closet design, closet installation, walk-in closets, closet organization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gray-900 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">ProCraft Closets</Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>Seattle, WA</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <a href="tel:206-555-0100" className="hover:text-blue-300">206-555-0100</a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Custom Closet Design & Installation</h1>
              <p className="text-xl mb-8 opacity-90">Transform your Seattle home with professionally designed custom closet solutions that maximize space and enhance organization.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">
                  Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ProCraft Closets?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seattle homeowners trust us for superior craftsmanship, innovative designs, and exceptional service.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final installation, we guide you through every step of creating your dream closet.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{step.duration}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Guide</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent pricing for every budget. All packages include design consultation and professional installation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${tier.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{tier.price}</div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                    tier.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our custom closet services in Seattle.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-8 bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Seattle Homeowners Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"ProCraft transformed our master bedroom closet beyond our expectations. The attention to detail and quality craftsmanship is outstanding."</p>
                <div className="font-semibold text-gray-900">Sarah M. - Capitol Hill</div>
              </div>
              <div className="bg-white p