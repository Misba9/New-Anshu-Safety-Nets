import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import CallbackForm from '../../components/CallbackForm';
import { Grid3X3, Eye, CheckCircle, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
 

const BalconyInvisibleGrid = () => {
  const features = [
    'Nearly invisible design',
    'Unobstructed balcony views',
    'High-strength stainless steel cables',
    'Professional installation',
    'Weather resistant materials',
    'Custom sizing available'
  ];

  const benefits = [
    {
      icon: <Eye className="h-8 w-8 text-cyan-600" />,
      title: 'Unobstructed View',
      description: 'Maintains clear, uninterrupted views from your balcony'
    },
    {
      icon: <Grid3X3 className="h-8 w-8 text-blue-600" />,
      title: 'Modern Design',
      description: 'Sleek, contemporary look that complements modern architecture'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Maximum Safety',
      description: 'Provides complete protection without visual barriers'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
      title: 'Premium Quality',
      description: 'High-grade materials ensure durability and reliability'
    }
  ];

  return (
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Anshu Safety Nets | Balcony Safety Nets in Bengaluru</title>
        <meta
          name="description"
          content="Professional Balcony, Pigeon, Children and Industrial Safety Nets Installation services in Bengaluru. Request a Callback Today."
        />
        <link rel="canonical" href="https://www.pegionsafetynets.in/balcony-invisible-grid" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Balcony Invisible Grid in <span className="text-cyan-600">Bengaluru</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Revolutionary invisible grid system that provides complete balcony safety 
                  without compromising your view. Nearly transparent design with maximum protection.
                </p>
                <div className="space-y-3 mb-8">
                  {features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white rounded-lg font-semibold transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="relative">
                <img
                  src="/images/Balcony-Invisible-Grid.jpg"
                  alt="Balcony invisible grid system"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-sm">Invisible</div>
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
              Why Choose Invisible Grid System?
            </h2>
            <p className="text-lg text-gray-600">
              The perfect balance of safety and aesthetics for modern balconies
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

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How Invisible Grid Works
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ultra-Fine Cables</h3>
                    <p className="text-gray-600">High-tensile stainless steel cables (1.5mm diameter) create an almost invisible barrier</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Precise Grid Pattern</h3>
                    <p className="text-gray-600">50mm x 50mm grid spacing provides complete safety while maintaining transparency</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Anchoring</h3>
                    <p className="text-gray-600">Professional anchoring system that distributes load evenly across the structure</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Advantages</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 95% transparency - nearly invisible</li>
                      <li>• No visual obstruction of views</li>
                      <li>• Modern, sleek appearance</li>
                      <li>• Suitable for high-end properties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="bg-cyan-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">System Features</h3>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Starting Price</span>
                    <span className="text-2xl font-bold text-cyan-600">₹95/sq.ft</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Premium invisible grid with professional installation
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Invisible Grid vs Traditional Nets
            </h2>
            <p className="text-lg text-gray-600">
              See why invisible grid is the superior choice for modern balconies
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="slideLeft">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-600 mb-6 text-center">Invisible Grid System</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">95% transparent - maintains view</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Modern, sleek appearance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Premium stainless steel cables</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Increases property value</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Easy to clean and maintain</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Weather and UV resistant</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-600 mb-6 text-center">Traditional Safety Nets</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">×</span>
                    </div>
                    <span className="text-gray-600">Blocks 60-80% of view</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">×</span>
                    </div>
                    <span className="text-gray-600">Visible mesh pattern</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">×</span>
                    </div>
                    <span className="text-gray-600">HDPE plastic material</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">×</span>
                    </div>
                    <span className="text-gray-600">May reduce property appeal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">×</span>
                    </div>
                    <span className="text-gray-600">Dust accumulation issues</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-600">More affordable option</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Installation Process
            </h2>
            <p className="text-lg text-gray-600">
              Precision installation for optimal safety and aesthetics
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Site Assessment',
                description: 'Detailed measurement and structural assessment of balcony area'
              },
              {
                step: '02',
                title: 'Custom Design',
                description: 'Custom grid layout designed for your specific balcony dimensions'
              },
              {
                step: '03',
                title: 'Precision Installation',
                description: 'Professional installation using specialized tools and techniques'
              },
              {
                step: '04',
                title: 'Quality Testing',
                description: 'Load testing and safety verification before final handover'
              }
            ].map((process, index) => (
              <AnimatedSection 
                key={process.step}
                animation="fadeUp"
                delay={index * 0.2}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Premium Properties
            </h2>
            <p className="text-lg text-gray-600">
              Ideal installations for discerning property owners
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Luxury Apartments',
                description: 'High-end residential complexes that prioritize aesthetics and safety',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Premium Villas',
                description: 'Individual homes where unobstructed views are paramount',
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Commercial Spaces',
                description: 'Offices and commercial buildings with balcony areas',
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((application, index) => (
              <AnimatedSection 
                key={application.title}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={application.image}
                    alt={application.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{application.title}</h3>
                    <p className="text-gray-600">{application.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Experience the Future of Balcony Safety
                </h2>
                <p className="text-xl text-cyan-100 mb-6">
                  Don't compromise on your view. Get the revolutionary invisible grid system 
                  that provides complete safety without visual barriers.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <CallbackForm 
                title="Get Invisible Grid Quote"
                subtitle="Premium balcony protection with unobstructed views"
                className="bg-white"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BalconyInvisibleGrid;