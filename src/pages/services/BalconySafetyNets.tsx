import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import CallbackForm from '../../components/CallbackForm';
import { Shield, CheckCircle, Star, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
 
const BalconySafetyNets = () => {
  const features = [
    'Premium quality HDPE material',
    'Weather resistant and UV protected',
    'Child-safe installation',
    'Customizable colors and sizes',
    'Professional installation team',
    'Warranty on materials and workmanship'
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Maximum Safety',
      description: 'Prevents accidental falls and ensures child safety on balconies'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: 'Durable Material',
      description: 'High-quality HDPE nets that withstand harsh weather conditions'
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: 'Aesthetic Appeal',
      description: 'Available in various colors to match your balcony design'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Expert Installation',
      description: 'Professional team ensures secure and proper installation'
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
        <link rel="canonical" href="https://www.pegionsafetynets.in/balcony-safety-nets" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Balcony Safety Nets in <span className="text-blue-600">Bengaluru</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Protect your family with our premium balcony safety nets. Professional installation, 
                  high-quality materials, and guaranteed safety for your peace of mind.
                </p>
                <div className="space-y-3 mb-8">
                  {features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
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
                  src="/images/Balcony-Safety-Nets.png"
                  alt="Balcony safety nets installation"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Satisfied Customers</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Balcony Safety Nets?
            </h2>
            <p className="text-lg text-gray-600">
              Premium quality materials and professional installation for maximum safety
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

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Product Specifications
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Material</h3>
                    <p className="text-gray-600">High-Density Polyethylene (HDPE) - 100% virgin material</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mesh Size</h3>
                    <p className="text-gray-600">25mm x 25mm (standard) - Custom sizes available</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Colors Available</h3>
                    <p className="text-gray-600">Green, White, Black, Blue - Custom colors on request</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• UV stabilized for long-lasting durability</li>
                      <li>• Weather resistant - withstands rain and sun</li>
                      <li>• Fire retardant properties</li>
                      <li>• Easy to clean and maintain</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">All Features Included</h3>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Starting Price</span>
                    <span className="text-2xl font-bold text-blue-600">₹35/sq.ft</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Price includes material, installation, and warranty
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-lg text-gray-600">
              Professional installation in 4 simple steps
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Site Visit',
                description: 'Free consultation and measurement of your balcony area'
              },
              {
                step: '02',
                title: 'Quotation',
                description: 'Detailed quote with material specifications and pricing'
              },
              {
                step: '03',
                title: 'Installation',
                description: 'Professional installation by our experienced team'
              },
              {
                step: '04',
                title: 'Quality Check',
                description: 'Final inspection and customer satisfaction guarantee'
              }
            ].map((process, index) => (
              <AnimatedSection 
                key={process.step}
                animation="fadeUp"
                delay={index * 0.2}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Install Balcony Safety Nets?
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Get a free consultation and quote for your balcony safety needs. 
                  Professional installation with quality guarantee.
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
                title="Get Free Quote"
                subtitle="Fill your details for a free consultation and competitive quote"
                className="bg-white"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BalconySafetyNets;