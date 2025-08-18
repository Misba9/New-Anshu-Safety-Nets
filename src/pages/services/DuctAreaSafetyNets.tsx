import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import CallbackForm from '../../components/CallbackForm';
import { Wind, Shield, CheckCircle, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const DuctAreaSafetyNets = () => {
  const features = [
    'Custom-fit for duct openings',
    'Fire retardant materials available',
    'Easy maintenance access',
    'Weather resistant construction',
    'Professional installation',
    'Compliance with building codes'
  ];

  const benefits = [
    {
      icon: <Wind className="h-8 w-8 text-cyan-600" />,
      title: 'Airflow Protection',
      description: 'Maintains proper ventilation while providing safety coverage'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Safety Barrier',
      description: 'Prevents accidental falls into duct areas and openings'
    },
    {
      icon: <Settings className="h-8 w-8 text-gray-600" />,
      title: 'Easy Access',
      description: 'Designed to allow maintenance access when needed'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: 'Code Compliant',
      description: 'Meets building safety codes and regulations'
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
      <section className="bg-gradient-to-br from-cyan-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Duct Area Safety Nets in <span className="text-cyan-600">Bengaluru</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Specialized safety nets for duct areas, ventilation openings, and HVAC systems. 
                  Custom-designed to provide safety while maintaining airflow efficiency.
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
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Duct area safety nets installation"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">Protection</div>
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
              Why Choose Our Duct Area Safety Nets?
            </h2>
            <p className="text-lg text-gray-600">
              Specialized solutions for ventilation and duct area protection
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

      {/* Applications & Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Common Applications
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">HVAC Duct Openings</h3>
                    <p className="text-gray-600">Safety coverage for heating, ventilation, and air conditioning duct openings</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Exhaust Ventilation</h3>
                    <p className="text-gray-600">Protection for kitchen and bathroom exhaust vent openings</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Commercial Buildings</h3>
                    <p className="text-gray-600">Large-scale duct area protection in office buildings and malls</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Industrial Facilities</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Manufacturing plant ventilation</li>
                      <li>• Warehouse airflow systems</li>
                      <li>• Clean room environments</li>
                      <li>• Food processing facilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="bg-cyan-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialized Features</h3>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Standard Mesh</span>
                      <span className="text-2xl font-bold text-cyan-600">₹38/sq.ft</span>
                    </div>
                    <p className="text-sm text-gray-600">Regular duct area coverage</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Fire Retardant</span>
                      <span className="text-2xl font-bold text-cyan-600">₹48/sq.ft</span>
                    </div>
                    <p className="text-sm text-gray-600">Fire-resistant materials for safety compliance</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Duct Area Installation Types
            </h2>
            <p className="text-lg text-gray-600">
              Customized solutions for different duct configurations
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Horizontal Duct Coverage',
                description: 'Safety nets for horizontal duct openings in ceilings and walls',
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
                specifications: ['Custom measurements', 'Secure mounting', 'Easy access panels']
              },
              {
                title: 'Vertical Shaft Protection',
                description: 'Coverage for vertical air shafts and ventilation ducts',
                image: 'https://images.pexels.com/photos/1048297/pexels-photo-1048297.jpeg?auto=compress&cs=tinysrgb&w=400',
                specifications: ['Multi-level coverage', 'Debris collection', 'Fall prevention']
              },
              {
                title: 'Rooftop Unit Protection',
                description: 'Safety nets for rooftop HVAC units and exhaust openings',
                image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
                specifications: ['Weather resistant', 'UV protected', 'High wind resistance']
              },
              {
                title: 'Underground Duct Access',
                description: 'Protection for basement and underground duct access points',
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
                specifications: ['Moisture resistant', 'Anti-corrosion', 'Long-term durability']
              },
              {
                title: 'Kitchen Exhaust Systems',
                description: 'Specialized nets for commercial kitchen exhaust and duct areas',
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
                specifications: ['Grease resistant', 'Fire retardant', 'Easy cleaning']
              },
              {
                title: 'Clean Room Applications',
                description: 'Sterile environment compatible safety nets for clean rooms',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
                specifications: ['Sterile materials', 'Particle-free', 'Validated installation']
              }
            ].map((type, index) => (
              <AnimatedSection 
                key={type.title}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-1">
                      {type.specifications.map((spec) => (
                        <div key={spec} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-cyan-600 rounded-full"></div>
                          <span className="text-sm text-gray-500">{spec}</span>
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

      {/* CTA Section */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Secure Your Duct Areas Today
                </h2>
                <p className="text-xl text-cyan-100 mb-6">
                  Don't leave duct areas unprotected. Get professional safety nets that provide 
                  security while maintaining ventilation efficiency.
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
                title="Duct Safety Consultation"
                subtitle="Get expert advice for your duct area safety requirements"
                className="bg-white"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DuctAreaSafetyNets;