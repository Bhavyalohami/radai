import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Heart, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Voice-to-Report AI', path: '/product' },
      { name: 'Radiology Suite', path: '#' },
      { name: 'Pricing', path: '/product#pricing' },
      { name: 'Security', path: '#' }
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Guide', path: '/guide' },
      { name: 'Contact', path: '/contact' }
    ],
    Resources: [
      { name: 'Documentation', path: '/guide' },
      { name: 'API Reference', path: '#' },
      { name: 'Case Studies', path: '/blog' },
      { name: 'HIPAA Guide', path: '#' }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-white to-primary/5 pt-20 pb-8 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-primary/10 rounded-full animate-float-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  rad.ai
                </h2>
                <div className="text-sm text-secondary font-medium">AI Radiology Assistant</div>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Transforming healthcare documentation with AI-powered voice-to-report technology.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm text-gray-600">HIPAA Compliant</span>
            </div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:text-secondary hover:border-secondary transition-all hover:shadow-lg"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-primary mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-gray-600 hover:text-secondary transition-colors ${
                          isActive ? 'text-secondary font-medium' : ''
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="mailto:contact@rad.ai" className="flex items-center space-x-4 group">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="text-gray-700 group-hover:text-secondary transition-colors">
                  contact@rad.ai
                </div>
              </div>
            </a>
            
            <a href="tel:+15551234567" className="flex items-center space-x-4 group">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="text-gray-700 group-hover:text-secondary transition-colors">
                  +1 (555) 123-4567
                </div>
              </div>
            </a>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="text-gray-700">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} rad.ai. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-secondary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-secondary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-secondary text-sm transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;