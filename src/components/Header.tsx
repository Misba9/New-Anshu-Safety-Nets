import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'images/logo.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      submenu: [
        { name: 'Balcony Safety Nets', path: '/balcony-safety-nets' },
        { name: 'Children Safety Nets', path: '/children-safety-nets' },
        { name: 'Construction Safety Nets', path: '/construction-safety-nets' },
        { name: 'Duct Area Safety Nets', path: '/duct-area-safety-nets' },
        { name: 'Industrial Safety Nets', path: '/industrial-safety-nets' },
        { name: 'Balcony Clothes Hanger', path: '/balcony-clothes-hanger' },
        { name: 'Pigeon Safety Nets', path: '/pigeon-safety-nets' },
        { name: 'Balcony Invisible Grid', path: '/balcony-invisible-grid' },
      ],
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <img src={logo} alt="Anshu Safety Nets" width={32} height={32} /> */}
            <span className="text-xl font-bold text-gray-900">Anshu Safety Nets</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="cursor-pointer">
                    <span className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                      {item.name}
                    </span>
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${isActive(item.path)
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+919900077665"
              className="hidden sm:flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">+91 99000 77665</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="py-2 text-gray-700 font-medium">{item.name}</div>
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 text-sm font-medium transition-colors ${isActive(item.path) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="tel:+919900077665"
                className="flex items-center space-x-2 py-2 text-blue-600 font-semibold"
              >
                <Phone className="h-4 w-4" />
                <span>+91 99000 77665</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;