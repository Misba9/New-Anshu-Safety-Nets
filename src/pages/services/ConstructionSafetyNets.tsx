import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import CallbackForm from '../../components/CallbackForm';
import { Building, Shield, CheckCircle, HardHat } from 'lucide-react';

const ConstructionSafetyNets = () => {
  const features = [
    'Heavy-duty construction grade material',
    'Meets all industry safety standards',
    'High tensile strength and durability',
    'Available in various sizes and colors',
    'Professional installation team',
    'Compliance with safety regulations'
  ];

  const benefits = [
    {
      icon: <Building className="h-8 w-8 text-orange-600" />,
      title: 'Industry Standard',
      description: 'Meets all construction industry safety standards and regulations'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Worker Safety',
      description: 'Protects construction workers from falling debris and accidents'
    },
    {
      icon: <HardHat className="h-8 w-8 text-yellow-600" />,
      title: 'Professional Grade',
      description: 'Heavy-duty materials designed for construction environments'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: 'Compliance Ready',
      description: 'Helps meet safety compliance requirements for construction sites'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Construction Safety Nets in <span className="text-orange-600">Bengaluru</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Heavy-duty construction safety nets for building sites, scaffolding protection, 
                  and worker safety. Professional grade materials that meet industry standards.
                </p>
                <div className="space-y-3 mb-8">
                  {features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg font-semibold transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Construction safety nets installation"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Compliant</div>
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
              Why Choose Our Construction Safety Nets?
            </h2>
            <p className="text-lg text-gray-600">
              Professional grade safety solutions for construction sites
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

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Technical Specifications
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Material Grade</h3>
                    <p className="text-gray-600">High-density polyethylene (HDPE) construction grade with UV stabilizers</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tensile Strength</h3>
                    <p className="text-gray-600">Minimum 1200 Newton breaking strength for heavy-duty applications</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mesh Options</h3>
                    <p className="text-gray-600">Available in 35mm, 50mm, and custom mesh sizes as per requirement</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Standards</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• IS 5175 compliance for construction safety</li>
                      <li>• Fire retardant properties (optional)</li>
                      <li>• Weather resistant for 5+ years</li>
                      <li>• Load bearing capacity tested</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Construction Features</h3>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Starting Price</span>
                    <span className="text-2xl font-bold text-orange-600">₹45/sq.ft</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Professional grade materials with certified installation
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Construction Applications
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive safety solutions for various construction needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Scaffolding Protection',
                description: 'Secure scaffolding areas to prevent falling debris and ensure worker safety',
                image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Debris containment', 'Worker protection', 'Weather shield']
              },
              {
                title: 'Building Perimeter',
                description: 'Perimeter protection for high-rise construction and renovation projects',
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Falling object protection', 'Pedestrian safety', 'Dust control']
              },
              {
                title: 'Bridge & Infrastructure',
                description: 'Safety nets for bridge construction and large infrastructure projects',
                image: 'https://images.pexels.com/photos/1048297/pexels-photo-1048297.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Heavy-duty support', 'Weather resistance', 'Long-term durability']
              },
              {
                title: 'Renovation Work',
                description: 'Temporary safety solutions during building renovation and repair work',
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Quick installation', 'Removable design', 'Minimal disruption']
              },
              {
                title: 'Industrial Sites',
                description: 'Safety containment for industrial construction and maintenance',
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Chemical resistance', 'High strength', 'Custom sizing']
              },
              {
                title: 'Temporary Barriers',
                description: 'Temporary safety barriers for events and restricted construction areas',
                image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Portable installation', 'Visual barrier', 'Access control']
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
                      {application.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                          <span className="text-sm text-gray-500">{feature}</span>
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
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ensure Construction Site Safety
                </h2>
                <p className="text-xl text-orange-100 mb-6">
                  Meet safety compliance requirements with our professional construction safety nets. 
                  Protect workers and ensure project success.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <CallbackForm 
                title="Construction Safety Quote"
                subtitle="Get professional consultation for your construction safety needs"
                className="bg-white"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionSafetyNets;