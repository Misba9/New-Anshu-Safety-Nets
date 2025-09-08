import AnimatedSection from '../components/AnimatedSection';
import { Phone, MapPin, Clock, MessageCircle, Loader2, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accessKey = "0a138f90-955d-4c66-82d8-2e61d5541693"; 

  const { submit } = useWeb3Forms<FormData>({
    access_key: accessKey,
    settings: {
      from_name: "Anshu Safety Nets",
      subject: "New Callback Request",
    },
    onSuccess: (msg) => {
      setResult(msg);
      setSubmitted(true);
      setIsSubmitting(false);
      reset();
      setTimeout(() => {
        setSubmitted(false);
        setResult(null);
      }, 5000);
    },
    onError: (msg) => {
      setResult(msg);
      setSubmitted(false);
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setResult(null);
    await submit(data);
  };

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

  return (
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Anshu Safety Nets | Balcony Safety Nets in Bengaluru</title>
        <meta
          name="description"
          content="Professional Balcony, Pigeon, Children and Industrial Safety Nets Installation services in Bengaluru. Request a Callback Today."
        />
        <link rel="canonical" href="https://www.pegionsafetynets.in/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={info.title} animation="fadeUp" delay={index * 0.1}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{info.title}</h3>
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
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Web3Forms Callback Form */}
          <AnimatedSection animation="slideLeft">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Request a Callback</h2>
              <p className="text-gray-600 mb-6">
                Share your details and our team will reach out to assist you with the best safety solutions.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    {...register("name", { 
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" }
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    {...register("phone", { 
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number"
                      }
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 hover:shadow-md active:transform active:scale-[0.98]'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Request Callback'
                  )}
                </button>
              </form>

              {/* Success Message */}
              {submitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-semibold flex items-center gap-2">
                    <span className="text-green-600"><Check /></span>
                    Thank you! We will contact you shortly.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {result && !submitted && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-semibold flex items-center gap-2">
                    <span className="text-red-600">❌</span>
                    {result}
                  </p>
                </div>
              )}

              {/* Loading Overlay */}
              {/* {isSubmitting && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-700 font-medium flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                    Sending your request...
                  </p>
                </div>
              )} */}
            </div>
          </AnimatedSection>

          {/* Right Side Info */}
          <AnimatedSection animation="slideRight">
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
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;