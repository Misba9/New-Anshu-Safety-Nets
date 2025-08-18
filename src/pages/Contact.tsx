// import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import CallbackForm from '../components/CallbackForm';
import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {

   const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Phone Number',
      details: '+91 99000 77665',
      action: 'tel:+919900077665'
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: 'WhatsApp',
      details: '+91 99000 77665',
      action: 'https://wa.me/919900077665'
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: 'Service Area',
      details: 'All areas in Bengaluru, Karnataka',
      action: null
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: 'Working Hours',
      details: 'Mon - Sat: 9:00 AM - 7:00 PM',
      action: null
    }
  ];

  const services = [
    'Balcony Safety Nets',
    'Children Safety Nets', 
    'Pigeon Safety Nets',
    'Construction Safety Nets',
    'Industrial Safety Nets',
    'Duct Area Safety Nets',
    'Balcony Clothes Hanger',
    'Balcony Invisible Grid'
  ];

  return (
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 👇 Add Helmet at the top of the page component */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">Anshu Safety Nets</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for professional safety net installation services in Bengaluru. 
              Free consultation and competitive pricing for all your safety needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <AnimatedSection 
                key={info.title}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">{info.details}</p>
                  {info.action && (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                    >
                      {info.title === 'Phone Number' ? 'Call Now' : 
                       info.title === 'WhatsApp' ? 'Chat Now' : 'Contact'}
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slideLeft">
              <CallbackForm 
                title="Request Free Consultation"
                subtitle="Share your details and our team will reach out to assist you with the best safety solutions."
              />
            </AnimatedSection>

            {/* Services & Info */}
            <AnimatedSection animation="slideRight">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Professional Safety Solutions
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We provide comprehensive safety net installation services across Bengaluru. 
                    Our experienced team ensures quality installation with guaranteed satisfaction.
                  </p>
                </div>

                {/* <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div> */}

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Free consultation and site visit</li>
                    <li>• Quality materials with warranty</li>
                    <li>• Professional installation team</li>
                    <li>• Competitive pricing</li>
                    <li>• Post-installation support</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665?text=Hi, I need information about safety nets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Service Areas in Bengaluru
            </h2>
            <p className="text-lg text-gray-600">
              We provide safety net installation services across all areas in Bengaluru
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  'Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City',
                  'Marathahalli', 'BTM Layout', 'HSR Layout', 'Jayanagar',
                  'Rajajinagar', 'Malleswaram', 'Banashankari', 'Basavanagudi',
                  'JP Nagar', 'Hebbal', 'Yelahanka', 'Sarjapur'
                ].map((area) => (
                  <div key={area} className="py-2 text-gray-700">
                    {area}
                  </div>
                ))}
              </div>
              <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  <strong>Note:</strong> We cover all areas in Bengaluru and nearby locations. 
                  Contact us to confirm service availability in your area.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;

