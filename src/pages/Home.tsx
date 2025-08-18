import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CallbackForm from '../components/CallbackForm';
import AnimatedSection from '../components/AnimatedSection';
import { Shield, Baby, Building, Wind, Factory, Bird, Grid3X3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const services = [
    {
      title: 'Balcony Safety Nets',
      description: 'Premium quality balcony safety nets to prevent accidents and ensure child safety. Durable, weather-resistant, and professionally installed.',
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/balcony-safety-nets',
      features: ['Weather resistant', 'Child-safe installation', 'Durable materials']
    },
    {
      title: 'Children Safety Nets',
      description: 'Specialized safety nets designed specifically for child protection. Soft, non-toxic materials that provide maximum safety.',
      icon: <Baby className="h-6 w-6 text-green-600" />,
      imageUrl: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/children-safety-nets',
      features: ['Non-toxic materials', 'Child-friendly design', 'Extra strong mesh']
    },
    {
      title: 'Pigeon Safety Nets',
      description: 'Effective bird protection nets that prevent pigeons and other birds from nesting while being humane and safe.',
      icon: <Bird className="h-6 w-6 text-purple-600" />,
      imageUrl: 'https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/pigeon-safety-nets',
      features: ['Humane bird deterrent', 'UV resistant', 'Easy maintenance']
    },
    {
      title: 'Construction Safety Nets',
      description: 'Heavy-duty construction safety nets for building sites and industrial applications. Meets all safety standards.',
      icon: <Building className="h-6 w-6 text-orange-600" />,
      imageUrl: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/construction-safety-nets',
      features: ['Industry standard', 'Heavy-duty material', 'Professional grade']
    },
    {
      title: 'Industrial Safety Nets',
      description: 'Robust industrial safety solutions for warehouses, factories, and commercial spaces. Custom sizes available.',
      icon: <Factory className="h-6 w-6 text-red-600" />,
      imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/industrial-safety-nets',
      features: ['Custom sizing', 'Industrial grade', 'Fire resistant options']
    },
    {
      title: 'Balcony Invisible Grid',
      description: 'Invisible grids that provide safety without compromising the aesthetic appeal of your balcony view.',
      icon: <Grid3X3 className="h-6 w-6 text-cyan-600" />,
      imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/balcony-invisible-grid',
      features: ['Nearly invisible', 'Modern design', 'Unobstructed view']
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality Assurance',
      description: 'Premium materials and professional installation with quality guarantee'
    },
    {
      icon: <Building className="h-8 w-8 text-green-600" />,
      title: 'Expert Installation',
      description: 'Experienced technicians with years of safety net installation expertise'
    },
    {
      icon: <Wind className="h-8 w-8 text-purple-600" />,
      title: 'Weather Resistant',
      description: 'All our nets are designed to withstand harsh weather conditions'
    },
    {
      icon: <Factory className="h-8 w-8 text-orange-600" />,
      title: 'Custom Solutions',
      description: 'Tailored safety solutions to meet your specific requirements'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Anshu Safety Nets | Balcony Safety Nets in Bengaluru</title>
        <meta
          name="description"
          content="Professional Balcony, Pigeon, Children and Industrial Safety Nets Installation services in Bengaluru. Request a Callback Today."
        />
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Safety Net Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety solutions for residential, commercial, and industrial needs in Bengaluru
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection 
                key={service.link}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Anshu Safety Nets?
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by hundreds of customers across Bengaluru
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection 
                key={item.title}
                animation="fadeUp"
                delay={index * 0.1}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Secure Your Space?
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Get professional safety net installation with quality guarantee. 
                  Free consultation and competitive pricing.
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
                subtitle="Fill in your details for a free consultation and quote"
                className="bg-white"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;