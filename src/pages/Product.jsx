import { useState } from 'react';
import { Check, BarChart3, Zap, Cpu, Lock, Cloud, Mic, Brain, Shield, Users, Database, Globe } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  const productFeatures = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Real-time Transcription",
      description: "Convert speech to text with medical context understanding",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Intelligent structuring of medical findings",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Track report generation metrics and insights",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "End-to-end encryption and HIPAA compliance",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & On-premise",
      description: "Flexible deployment options",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "EHR Integration",
      description: "Seamless integration with existing systems",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "For small clinics",
      features: [
        "Up to 100 reports/month",
        "Basic AI transcription",
        "Standard templates",
        "Email support",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For growing diagnostic centers",
      popular: true,
      features: [
        "Up to 500 reports/month",
        "Advanced AI with context",
        "Custom templates",
        "Priority support",
        "EHR Integration",
        "Advanced analytics"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large hospitals",
      features: [
        "Unlimited reports",
        "Full AI capabilities",
        "Custom workflows",
        "24/7 dedicated support",
        "On-premise deployment",
        "SLA guarantee",
        "Custom AI training"
      ]
    }
  ];

  const integrations = [
    { name: "Epic Systems", icon: "🏥" },
    { name: "Cerner", icon: "⚕️" },
    { name: "Allscripts", icon: "📊" },
    { name: "Meditech", icon: "💻" },
    { name: "GE Healthcare", icon: "🔬" },
    { name: "Siemens", icon: "⚙️" }
  ];

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-secondary/10 rounded-full animate-float"></div>
      <div className="fixed bottom-40 right-20 w-24 h-24 bg-primary/10 rounded-full animate-float-slow"></div>
      <div className="fixed top-1/2 left-1/3 w-16 h-16 bg-accent/10 rounded-full animate-float-fast"></div>

      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-full mb-8">
            <Brain className="w-5 h-5 text-secondary mr-2" />
            <span className="text-secondary font-semibold">AI-Powered Solution</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="block text-gray-900">The Future of</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-normal">
              Radiology Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            AI-powered voice-to-report technology that understands medical context and generates accurate, structured reports in seconds.
          </p>
          <button
            onClick={openModal}
            className="group relative px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg overflow-hidden"
          >
            <span className="relative z-10">Book a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'features'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'pricing'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'integrations'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80'
              }`}
            >
              Integrations
            </button>
          </div>

          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-4">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-3xl overflow-hidden ${
                    plan.popular 
                      ? 'border-2 border-secondary shadow-2xl transform scale-105' 
                      : 'border border-gray-200 shadow-xl'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8 bg-white">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-8">{plan.description}</p>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-5 h-5 text-secondary mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={openModal}
                      className={`w-full py-4 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl'
                          : 'bg-gray-100 text-primary hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                      {integration.icon}
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{integration.name}</div>
                      <div className="text-sm text-secondary font-medium mt-1">Integrated</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
                  <Globe className="w-5 h-5 text-primary mr-2" />
                  <span className="text-primary font-semibold">+20 more integrations available</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how rad.ai can transform your radiology workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl hover:shadow-xl transition-all font-semibold"
            >
              Book a Demo
            </button>
            <a
              href="/contact"
              className="px-10 py-4 bg-white text-primary border border-primary/20 rounded-2xl hover:border-primary/40 transition-all font-semibold"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      <BookDemoModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
};

export default Product;