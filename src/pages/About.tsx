import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Shield, Users, Award, Clock, CheckCircle, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality Materials',
      description: 'We use only the highest quality, weather-resistant materials for all our installations.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Expert Team',
      description: 'Our skilled technicians have years of experience in safety net installation.'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: 'Certified Installation',
      description: 'All installations are done following industry standards and safety protocols.'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: 'Timely Service',
      description: 'We respect your time and complete all projects within the agreed timeframe.'
    }
  ];

  const services = [
    'Balcony Safety Nets Installation',
    'Children Safety Nets',
    'Pigeon Protection Nets',
    'Construction Safety Nets',
    'Industrial Safety Solutions',
    'Duct Area Safety Nets',
    'Balcony Clothes Hanger',
    'Invisible Grid Systems'
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
                  About <span className="text-blue-600">Anshu Safety Nets</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Anshu Safety Nets has been Bengaluru's trusted partner for professional safety net 
                  installations for over 5 years. We specialize in providing comprehensive safety 
                  solutions for residential, commercial, and industrial spaces.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our commitment to quality, safety, and customer satisfaction has made us the 
                  preferred choice for hundreds of customers across Bengaluru.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">500+ Happy Customers</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-500">
                    <Star className="h-5 w-5" />
                    <span className="font-semibold">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional safety net installation"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide the highest quality safety net solutions that protect families, 
                  properties, and businesses across Bengaluru. We are committed to excellence 
                  in every installation, ensuring peace of mind for our customers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading safety net service provider in Karnataka, known for 
                  our reliability, quality craftsmanship, and customer-centric approach. 
                  Making safety accessible and affordable for everyone.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Anshu Safety Nets?
            </h2>
            <p className="text-lg text-gray-600">
              We stand out through our commitment to quality, service, and customer satisfaction
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={feature.title}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Comprehensive Safety Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We offer a complete range of safety net services to meet all your protection needs:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={service} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Safety installation 1"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Safety installation 2"
                  className="rounded-lg shadow-lg mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Safety installation 3"
                  className="rounded-lg shadow-lg -mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Safety installation 4"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Space?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let us help you create a safer environment
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+919900077665"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call +91 99000 77665
              </a>
              <a
                href="https://wa.me/919900077665"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;