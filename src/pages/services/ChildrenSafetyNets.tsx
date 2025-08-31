import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import CallbackForm from '../../components/CallbackForm';
import { Baby, Shield, CheckCircle, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
 
const ChildrenSafetyNets = () => {
  const features = [
    'Non-toxic, child-safe materials',
    'Extra fine mesh for maximum protection',
    'Soft edges to prevent cuts',
    'Available in bright, child-friendly colors',
    'Easy to clean and maintain',
    'Warranty on materials and installation'
  ];

  const benefits = [
    {
      icon: <Baby className="h-8 w-8 text-green-600" />,
      title: 'Child Safety First',
      description: 'Specially designed with children\'s safety as the top priority'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Non-Toxic Materials',
      description: '100% safe materials that are harmless even if touched by children'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Peace of Mind',
      description: 'Let your children play freely while you have complete peace of mind'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
      title: 'Professional Grade',
      description: 'High-quality installation that meets all safety standards'
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
        <link rel="canonical" href="https://www.pegionsafetynets.in/children-safety-nets" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Children Safety Nets in <span className="text-green-600">Bengaluru</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Protect your little ones with our specialized children safety nets. Made with 
                  non-toxic materials and extra fine mesh for maximum child protection.
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
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg font-semibold transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="relative">
                <img
                  src="/images/Children-Safety-Nets.jpg"
                  alt="Children safety nets installation"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Child Safe</div>
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
              Why Choose Our Children Safety Nets?
            </h2>
            <p className="text-lg text-gray-600">
              Specially designed for children's safety with premium quality materials
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

      {/* Safety Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Child-Safe Specifications
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Material Safety</h3>
                    <p className="text-gray-600">100% non-toxic HDPE material, completely safe for children</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mesh Size</h3>
                    <p className="text-gray-600">20mm x 20mm extra fine mesh prevents even small objects from falling</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Edge Design</h3>
                    <p className="text-gray-600">Soft, rounded edges prevent cuts and injuries to children</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Features</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Anti-bacterial treatment available</li>
                      <li>• Easy to clean with soap and water</li>
                      <li>• Bright colors to make it appealing to children</li>
                      <li>• Extra strength to handle active children</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">All Safety Features</h3>
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
                    <span className="text-2xl font-bold text-green-600">₹40/sq.ft</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Special child-safe materials with premium installation
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Children Need Safety Nets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Children Safety Nets Are Essential
            </h2>
            <p className="text-lg text-gray-600">
              Protecting your most precious family members
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Prevent Accidents',
                description: 'Children are naturally curious and active. Safety nets provide a protective barrier without restricting their movement.',
                image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Peace of Mind',
                description: 'Parents can relax knowing their children are safe while playing on balconies or near windows.',
                image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Free Play Space',
                description: 'Children can enjoy their play areas freely without constant supervision worries.',
                image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((reason, index) => (
              <AnimatedSection 
                key={reason.title}
                animation="fadeUp"
                delay={index * 0.2}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Protect Your Children Today
                </h2>
                <p className="text-xl text-green-100 mb-6">
                  Don't wait for an accident to happen. Get professional children safety nets 
                  installed by our expert team with child-safe materials.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <CallbackForm 
                title="Free Child Safety Consultation"
                subtitle="Get expert advice on the best safety solutions for your children"
                className="bg-white"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildrenSafetyNets;