import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import CallbackForm from '../../components/CallbackForm';
import { Shirt, Wind, CheckCircle, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BalconyClothesHanger = () => {
  const features = [
    'Stainless steel construction',
    'Weather resistant materials',
    'Space-efficient design',
    'Easy to use mechanism',
    'High load bearing capacity',
    'Professional installation'
  ];

  const benefits = [
    {
      icon: <Shirt className="h-8 w-8 text-blue-600" />,
      title: 'Space Optimization',
      description: 'Maximize your balcony space with efficient clothes hanging solutions'
    },
    {
      icon: <Wind className="h-8 w-8 text-green-600" />,
      title: 'Weather Resistant',
      description: 'Durable materials that withstand all weather conditions'
    },
    {
      icon: <Home className="h-8 w-8 text-purple-600" />,
      title: 'Aesthetic Appeal',
      description: 'Modern design that complements your balcony appearance'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: 'Easy Operation',
      description: 'Simple pulleys and mechanisms for effortless clothes hanging'
    }
  ];

  return (
    <div className="pt-16">
      <Helmet>
        <title>Anshu Safety Nets | Balcony Safety Nets in Bengaluru</title>
        <meta
          name="description"
          content="Professional Balcony, Pigeon, Children and Industrial Safety Nets Installation services in Bengaluru. Request a Callback Today."
        />
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Balcony Clothes Hanger in <span className="text-blue-600">Bengaluru</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Smart balcony clothes hanging solutions that maximize space and convenience. 
                  Durable, weather-resistant, and professionally installed to last for years.
                </p>
                <div className="space-y-3 mb-8">
                  {features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Balcony clothes hanger installation"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">50kg</div>
                  <div className="text-sm">Load Capacity</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Balcony Clothes Hangers?
            </h2>
            <p className="text-lg text-gray-600">
              Smart, durable, and space-efficient solutions for modern homes
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection 
                key={benefit.title}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Balcony Clothes Hanger Types
            </h2>
            <p className="text-lg text-gray-600">
              Choose from various designs to suit your balcony layout
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Ceiling Mounted Pulley System',
                description: 'Overhead pulley system for maximum space utilization',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Space saving', 'Easy operation', 'High capacity'],
                price: '₹2,500'
              },
              {
                title: 'Wall Mounted Retractable',
                description: 'Wall-mounted system that retracts when not in use',
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Retractable design', 'Wall mounted', 'Compact storage'],
                price: '₹3,200'
              },
              {
                title: 'Multi-Level Hanging System',
                description: 'Multi-tier system for hanging different types of clothes',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Multi-tier design', 'Organized hanging', 'Maximum capacity'],
                price: '₹4,500'
              },
              {
                title: 'Portable Stand System',
                description: 'Moveable stand system for flexible placement',
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Portable design', 'No installation', 'Flexible placement'],
                price: '₹1,800'
              },
              {
                title: 'Corner Optimization Unit',
                description: 'Specially designed for corner spaces in balconies',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Corner design', 'Space efficient', 'Custom fit'],
                price: '₹3,800'
              },
              {
                title: 'Premium Automated System',
                description: 'Motorized system with remote control operation',
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Motorized operation', 'Remote control', 'Weather sensor'],
                price: '₹8,500'
              }
            ].map((type, index) => (
              <AnimatedSection 
                key={type.title}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-1 mb-4">
                      {type.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{type.price}</span>
                      <a
                        href="tel:+919900077665"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Installation & Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Technical Specifications
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Material Quality</h3>
                    <p className="text-gray-600">Marine grade stainless steel (SS 316) for maximum corrosion resistance</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Load Capacity</h3>
                    <p className="text-gray-600">Up to 50kg distributed weight capacity for heavy clothing items</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Weather Protection</h3>
                    <p className="text-gray-600">UV resistant, rust-proof, and designed for outdoor conditions</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Standard Features</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Smooth pulley operation</li>
                      <li>• Non-slip grips for safety</li>
                      <li>• Pre-drilled mounting brackets</li>
                      <li>• Comprehensive installation kit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Installation Features</h3>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Complete hanger system</li>
                    <li>• Mounting hardware</li>
                    <li>• Installation service</li>
                    <li>• 2-year warranty</li>
                    <li>• Usage instructions</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Installation Time</span>
                    <span className="text-lg font-bold text-green-600">2-3 Hours</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits of Balcony Clothes Hangers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why You Need Balcony Clothes Hangers
            </h2>
            <p className="text-lg text-gray-600">
              Modern solutions for efficient clothes drying and space management
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="slideLeft">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Space Optimization</h3>
                    <p className="text-gray-600">Maximize your limited balcony space with vertical hanging solutions that don't compromise floor area.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Weather Protection</h3>
                    <p className="text-gray-600">Quick retraction systems help protect clothes from unexpected rain and strong winds.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Operation</h3>
                    <p className="text-gray-600">Simple pulley mechanisms make hanging and retrieving clothes effortless for all family members.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Organized Drying</h3>
                    <p className="text-gray-600">Multiple levels and compartments help organize different types of clothing items efficiently.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Aesthetic Appeal</h3>
                    <p className="text-gray-600">Modern designs that enhance rather than clutter your balcony's visual appeal.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Long-term Investment</h3>
                    <p className="text-gray-600">Durable materials and construction ensure years of reliable service with minimal maintenance.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Transform Your Balcony Today
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Get professional balcony clothes hanger installation with quality materials 
                  and expert craftsmanship. Free consultation and competitive pricing.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <CallbackForm 
                title="Get Installation Quote"
                subtitle="Free consultation and competitive pricing for your balcony"
                className="bg-white"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BalconyClothesHanger;