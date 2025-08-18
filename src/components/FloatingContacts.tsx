import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContacts = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919900077665?text=Hi, I need information about safety nets installation"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <div className="absolute right-16 bg-green-500 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp Us
        </div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919900077665"
        className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      >
        <Phone className="w-6 h-6 text-white" />
        <div className="absolute right-16 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Now
        </div>
      </a>
    </div>
  );
};

export default FloatingContacts;