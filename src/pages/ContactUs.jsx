import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Users, Globe, Shield, CheckCircle } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    department: '',
    inquiryType: 'demo',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@rad.ai", "support@rad.ai"],
      description: "We'll respond within 24 hours",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Mon-Fri, 9AM-6PM PST",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["123 Healthcare Ave", "San Francisco, CA 94107"],
      description: "Visit by appointment",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const inquiryTypes = [
    { value: 'demo', label: 'Book a Demo', icon: <Clock className="w-4 h-4" /> },
    { value: 'sales', label: 'Sales Inquiry', icon: <Users className="w-4 h-4" /> },
    { value: 'support', label: 'Technical Support', icon: <Shield className="w-4 h-4" /> },
    { value: 'partnership', label: 'Partnership', icon: <Globe className="w-4 h-4" /> }
  ];

  const departments = [
    'Radiology',
    'Cardiology',
    'Oncology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Emergency Medicine',
    'General Practice'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/10 rounded-full animate-float-fast"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-full mb-8">
            <MessageSquare className="w-5 h-5 text-secondary mr-2" />
            <span className="text-secondary font-semibold">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="block text-gray-900">Let's Transform</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-normal">
              Healthcare Together
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Ready to transform your radiology workflow? Contact us for a personalized demo or to learn more about rad.ai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </div>
                </div>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 group-hover:text-primary transition-colors">
                    {detail}
                  </p>
                ))}
              </div>
            ))}

            {/* Support Hours */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-secondary" />
                <h3 className="text-lg font-bold text-gray-900">Support Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Technical Support:</span>
                  <span className="text-secondary font-semibold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sales Inquiries:</span>
                  <span className="text-secondary font-semibold">Mon-Fri, 9AM-6PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Emergency Support:</span>
                  <span className="text-secondary font-semibold">Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="text-center">
              <button
                onClick={openModal}
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
              >
                Book Instant Demo
              </button>
              <p className="text-gray-500 text-sm mt-2">No commitment required</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-8">
                <Send className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="Dr. John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="City General Hospital"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="john.smith@hospital.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    >
                      {inquiryTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Inquiry Type Buttons */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData({...formData, inquiryType: type.value})}
                        className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl transition-all ${
                          formData.inquiryType === type.value
                            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                            : 'bg-white/80 border border-gray-300 text-gray-700 hover:border-secondary'
                        }`}
                      >
                        {type.icon}
                        <span className="text-sm font-medium">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder="Tell us about your needs, current workflow, and how we can help..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                  <p className="text-sm text-gray-600">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                    We'll never share your information with third parties.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-xl transition-all font-semibold text-lg flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">24h</div>
                <div className="text-gray-700 font-medium">Response Time</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-700 font-medium">Satisfaction Rate</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-700 font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookDemoModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
};

export default ContactUs;