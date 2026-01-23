import { useState } from 'react';
import { BookOpen, Video, Download, CheckCircle, FileText, Play, Search, Filter, Star, Award, Zap, Users, ArrowRight, Shield } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

const Guide = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const guides = [
    {
      title: "Getting Started with rad.ai",
      description: "Complete setup guide for your first AI-powered report generation in 15 minutes",
      icon: <BookOpen className="w-6 h-6" />,
      duration: "15 min",
      type: "Beginner",
      category: "setup",
      popular: true
    },
    {
      title: "Voice Command Reference",
      description: "Complete list of voice commands and medical terminology recognition",
      icon: <FileText className="w-6 h-6" />,
      duration: "25 min",
      type: "Reference",
      category: "reference"
    },
    {
      title: "Integration with EHR Systems",
      description: "Step-by-step guide to integrate with Epic, Cerner, and other EHR systems",
      icon: <Video className="w-6 h-6" />,
      duration: "30 min",
      type: "Advanced",
      category: "integration"
    },
    {
      title: "Custom Template Creation",
      description: "Create custom report templates for different radiology specialties",
      icon: <Download className="w-6 h-6" />,
      duration: "20 min",
      type: "Intermediate",
      category: "templates"
    },
    {
      title: "Quality Control Workflow",
      description: "Best practices for maintaining 98%+ accuracy in medical reports",
      icon: <Star className="w-6 h-6" />,
      duration: "18 min",
      type: "Best Practices",
      category: "quality",
      popular: true
    },
    {
      title: "API Documentation",
      description: "Complete API reference for developers and system integrators",
      icon: <Award className="w-6 h-6" />,
      duration: "45 min",
      type: "Technical",
      category: "api"
    }
  ];

  const tutorials = [
    {
      title: "Basic Report Generation",
      description: "Learn how to generate your first radiology report using voice commands",
      videoId: "demo1",
      duration: "5:32",
      level: "Beginner",
      views: "1.2K"
    },
    {
      title: "Editing and Corrections",
      description: "How to edit and correct AI-generated reports efficiently",
      videoId: "demo2",
      duration: "7:15",
      level: "Beginner",
      views: "856"
    },
    {
      title: "Batch Processing",
      description: "Process multiple reports simultaneously for maximum efficiency",
      videoId: "demo3",
      duration: "9:48",
      level: "Intermediate",
      views: "542",
      featured: true
    },
    {
      title: "Quality Control Workflow",
      description: "Implement quality control measures for clinical accuracy",
      videoId: "demo4",
      duration: "6:22",
      level: "Advanced",
      views: "324"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI in recognizing medical terminology?",
      answer: "Our AI achieves 98% accuracy for common radiology terminology and 95% for specialized sub-fields, continuously improving through machine learning."
    },
    {
      question: "What EHR systems do you integrate with?",
      answer: "We offer seamless integration with all major EHR systems including Epic, Cerner, Allscripts, Meditech, and more via HL7/FHIR standards."
    },
    {
      question: "Is rad.ai HIPAA compliant?",
      answer: "Yes, we are fully HIPAA compliant with end-to-end encryption, access controls, audit logs, and BAAs available for all healthcare providers."
    },
    {
      question: "How long does implementation take?",
      answer: "Typical implementation takes 2-4 weeks including integration, template setup, and staff training. We provide dedicated implementation support."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Guides', count: guides.length },
    { id: 'setup', label: 'Setup', count: guides.filter(g => g.category === 'setup').length },
    { id: 'reference', label: 'Reference', count: guides.filter(g => g.category === 'reference').length },
    { id: 'integration', label: 'Integration', count: guides.filter(g => g.category === 'integration').length },
    { id: 'templates', label: 'Templates', count: guides.filter(g => g.category === 'templates').length },
    { id: 'quality', label: 'Quality', count: guides.filter(g => g.category === 'quality').length },
    { id: 'api', label: 'API', count: guides.filter(g => g.category === 'api').length }
  ];

  const filteredGuides = activeCategory === 'all' 
    ? guides 
    : guides.filter(guide => guide.category === activeCategory);

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
            <BookOpen className="w-5 h-5 text-secondary mr-2" />
            <span className="text-secondary font-semibold">Learning Center</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="block text-gray-900">Learning &</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to successfully implement and use rad.ai in your healthcare facility.
          </p>
        </div>

        {/* Search and Stats */}
        <div className="mb-12">
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search guides and tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{guides.length}</div>
              <div className="text-gray-700 font-medium">Guides</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{tutorials.length}</div>
              <div className="text-gray-700 font-medium">Tutorials</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support</div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-80">({category.count})</span>
                {activeCategory === category.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Start Guides */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Quick Start Guides</h2>
            <div className="flex items-center text-secondary">
              <Zap className="w-5 h-5 mr-2" />
              <span className="font-semibold">Popular Guides</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    {guide.icon}
                  </div>
                  {guide.popular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-secondary rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {guide.type}
                  </span>
                  <span className="text-gray-500 text-sm">{guide.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                <button className="text-secondary hover:text-primary font-medium text-sm flex items-center group">
                  View Guide
                  <CheckCircle className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Video Tutorials */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Video Tutorials</h2>
            <div className="flex items-center text-secondary">
              <Video className="w-5 h-5 mr-2" />
              <span className="font-semibold">Watch & Learn</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl ${
                  tutorial.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-3xl">
                  <div className="bg-gray-900 rounded-2xl overflow-hidden">
                    <div className="relative h-64 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        {tutorial.featured && (
                          <div className="absolute -top-2 -right-2">
                            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                        {tutorial.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {tutorial.level}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {tutorial.views} views
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {tutorial.description}
                      </p>
                      <button className="text-white hover:text-secondary font-medium flex items-center group">
                        Watch Tutorial
                        <Play className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ & Documentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 p-6 hover:shadow-xl transition-all"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-secondary mr-3">
                      Q
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 h-full">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-secondary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Documentation</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Access our comprehensive API documentation, integration guides, and technical specifications.
              </p>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 hover:border-secondary transition-all group"
                >
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-secondary mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        API Documentation
                      </div>
                      <div className="text-sm text-gray-500">Complete REST API reference</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-secondary transition-colors" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 hover:border-secondary transition-all group"
                >
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-secondary mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        Integration Guide
                      </div>
                      <div className="text-sm text-gray-500">Step-by-step integration</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-secondary transition-colors" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 hover:border-secondary transition-all group"
                >
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-secondary mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        Security Whitepaper
                      </div>
                      <div className="text-sm text-gray-500">Security & compliance details</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-secondary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Personalized Assistance?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Our team of healthcare AI specialists is ready to help you implement rad.ai in your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl hover:shadow-xl transition-all font-semibold"
            >
              Schedule Expert Consultation
            </button>
            <a
              href="/contact"
              className="px-10 py-4 bg-white/60 backdrop-blur-sm text-primary border border-primary/20 rounded-2xl hover:border-primary/40 transition-all font-semibold"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      <BookDemoModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
};

export default Guide;