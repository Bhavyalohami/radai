import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mic, Brain, FileText } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import BookDemoModal from './BookDemoModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Product', hasDropdown: true, path: '/product' },
    { name: 'Blog', path: '/blog' },
    { name: 'Guide', path: '/guide' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
    const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  rad.ai
                </h1>
                <div className="text-xs text-secondary font-medium">AI Radiology Assistant</div>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center justify-center gap-3 font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-primary'
                          : 'text-gray-700 hover:text-primary'
                      }`}
                      onMouseEnter={() => setProductDropdown(true)}
                      onMouseLeave={() => setProductDropdown(false)}
                      onClick={() => (window.location.href = '/radai/product')}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 mt-0.5" />
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `font-medium transition-colors ${
                          isActive
                            ? 'text-primary'
                            : 'text-gray-700 hover:text-primary'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}

                  {/* Product Dropdown */}
                  {item.name === 'Product' && productDropdown && (
                    <div
                      className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-4"
                      onMouseEnter={() => setProductDropdown(true)}
                      onMouseLeave={() => setProductDropdown(false)}
                    >
                      <NavLink
                        to="/product"
                        className={({ isActive }) =>
                          `block px-6 py-3 hover:bg-primary/5 transition-colors ${
                            isActive ? 'text-primary border-l-4 border-primary' : 'text-gray-700'
                          }`
                        }
                      >
                        <div className="font-medium">Voice-to-Report AI</div>
                        <div className="text-sm text-gray-500">Convert voice to structured reports</div>
                      </NavLink>
                      <a href="#" className="block px-6 py-3 hover:bg-primary/5 text-gray-700 transition-colors">
                        <div className="font-medium">Radiology Suite</div>
                        <div className="text-sm text-gray-500">Complete workflow automation</div>
                      </a>
                      <a href="#" className="block px-6 py-3 hover:bg-primary/5 text-gray-700 transition-colors">
                        <div className="font-medium">Integration Hub</div>
                        <div className="text-sm text-gray-500">Seamless EHR/PACS integration</div>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={openModal}
                className="group relative px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold overflow-hidden"
              >
                <span className="relative z-10">Book Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20">
              <div className="flex flex-col space-y-2 p-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 hover:bg-primary/5'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openModal();
                  }}
                  className="mt-4 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold"
                >
                  Book Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <BookDemoModal isOpen={showModal} onClose={closeModal} />
    </>
  );
};

export default Header;