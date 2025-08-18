import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import CallbackForm from '../../components/CallbackForm';
import { Factory, Shield, CheckCircle, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const IndustrialSafetyNets = () => {
  const features = [
    'Heavy-duty industrial grade materials',
    'Custom sizing for large areas',
    'Fire retardant options available',
    'Chemical resistant properties',
    'Professional installation team',
    'Compliance with industrial standards'
  ];

  const benefits = [
    {
      icon: <Factory className="h-8 w-8 text-red-600" />,
      title: 'Industrial Grade',
      description: 'Heavy-duty materials designed for industrial environments'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Worker Protection',
      description: 'Comprehensive safety solutions for industrial workers'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: 'Chemical Resistant',
      description: 'Resistant to chemicals and harsh industrial conditions'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: 'Custom Solutions',
      description: 'Tailored solutions for specific industrial applications'
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
        <link rel="canonical" href="https://www.pegionsafetynets.in/industrial-safety-nets" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Industrial Safety Nets in <span className="text-red-600">Bengaluru</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Heavy-duty industrial safety nets for warehouses, factories, and commercial spaces. 
                  Custom solutions designed to meet the demanding requirements of industrial environments.
                </p>
                <div className="space-y-3 mb-8">
                  {features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg font-semibold transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Industrial safety nets installation"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">Industrial Protection</div>
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
              Why Choose Our Industrial Safety Nets?
            </h2>
            <p className="text-lg text-gray-600">
              Robust solutions designed for the toughest industrial environments
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

      {/* Industrial Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Industrial Specifications
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Material Grade</h3>
                    <p className="text-gray-600">High-density polyethylene (HDPE) with industrial additives for enhanced durability</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Load Capacity</h3>
                    <p className="text-gray-600">High tensile strength up to 1500 Newton for heavy-duty industrial applications</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Chemical Resistance</h3>
                    <p className="text-gray-600">Resistant to acids, alkalis, and most industrial chemicals</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Properties</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Fire retardant options available</li>
                      <li>• Anti-static properties for sensitive areas</li>
                      <li>• Temperature resistant (-40°C to +80°C)</li>
                      <li>• Oil and grease resistant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="bg-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industrial Features</h3>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Standard Industrial</span>
                      <span className="text-2xl font-bold text-red-600">₹55/sq.ft</span>
                    </div>
                    <p className="text-sm text-gray-600">Heavy-duty materials with standard installation</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Fire Retardant</span>
                      <span className="text-2xl font-bold text-red-600">₹75/sq.ft</span>
                    </div>
                    <p className="text-sm text-gray-600">Fire-resistant materials for high-risk areas</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industrial Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industrial Applications
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive safety solutions for various industrial sectors
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Manufacturing Plants',
                description: 'Safety nets for production areas, assembly lines, and machinery zones',
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
                applications: ['Production floor safety', 'Overhead protection', 'Machine area barriers']
              },
              {
                title: 'Warehouses',
                description: 'Large-scale coverage for storage areas, loading docks, and mezzanines',
                image: 'https://images.pexels.com/photos/1048297/pexels-photo-1048297.jpeg?auto=compress&cs=tinysrgb&w=400',
                applications: ['Mezzanine safety', 'Loading dock protection', 'Inventory area coverage']
              },
              {
                title: 'Chemical Plants',
                description: 'Chemical-resistant safety nets for petrochemical and processing facilities',
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
                applications: ['Process area safety', 'Chemical resistance', 'Explosion-proof options']
              },
              {
                title: 'Power Plants',
                description: 'High-temperature resistant nets for power generation facilities',
                image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
                applications: ['Turbine area protection', 'High-voltage safety', 'Heat resistant materials']
              },
              {
                title: 'Food Processing',
                description: 'Food-grade materials for food processing and packaging facilities',
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
                applications: ['Hygienic materials', 'Easy cleaning', 'FDA approved options']
              },
              {
                title: 'Mining Operations',
                description: 'Heavy-duty nets for mining sites, conveyor systems, and processing areas',
                image: 'https://images.pexels.com/photos/1048297/pexels-photo-1048297.jpeg?auto=compress&cs=tinysrgb&w=400',
                applications: ['Conveyor protection', 'Dust containment', 'Extreme durability']
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
                    <p className="text-gray-600 mb-4">{application.description}</p>
                    <div className="space-y-1">
                      {application.applications.map((app) => (
                        <div key={app} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                          <span className="text-sm text-gray-500">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Custom Industrial Solutions
            </h2>
            <p className="text-lg text-gray-600">
              We design and manufacture custom safety nets for unique industrial requirements
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeUp">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Sizing</h3>
                <p className="text-gray-600 mb-4">
                  Large-scale industrial installations with custom dimensions up to 10,000 sq.ft coverage
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Site-specific measurements</li>
                  <li>• Computer-aided design</li>
                  <li>• Pre-fabricated sections</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Material Selection</h3>
                <p className="text-gray-600 mb-4">
                  Choose from various materials based on your specific industrial environment
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Chemical resistant HDPE</li>
                  <li>• Fire retardant options</li>
                  <li>• Anti-static materials</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Installation Support</h3>
                <p className="text-gray-600 mb-4">
                  Complete project management from design to installation and maintenance
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Project management</li>
                  <li>• Safety compliance</li>
                  <li>• Ongoing maintenance</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Secure Your Industrial Facility
                </h2>
                <p className="text-xl text-red-100 mb-6">
                  Get industrial-grade safety nets designed for your specific industrial requirements. 
                  Custom solutions with professional installation and ongoing support.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <CallbackForm 
                title="Industrial Safety Consultation"
                subtitle="Get expert advice for your industrial safety requirements"
                className="bg-white"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialSafetyNets;