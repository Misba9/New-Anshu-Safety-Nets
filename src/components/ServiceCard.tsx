import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  link: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  link,
  features = []
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
          {icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        {features.length > 0 && (
          <ul className="space-y-1 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-500 flex items-center">
                <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Link
          to={link}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
        >
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;