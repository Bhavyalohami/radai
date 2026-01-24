import { useState, useEffect } from 'react';
import { Mic, Brain, Zap, Shield, ArrowRight, Play, CheckCircle, BarChart, Cloud, Users, Clock, FileText, Activity, Target, Award, Star, Calendar, TrendingUp, Heart, Stethoscope, X, MessageSquare } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState({ 
    reports: 0, 
    time: 0, 
    partners: 0, 
    accuracy: 0 
  });

  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice-to-Report AI",
      description: "Convert doctor's dictation into medical reports with 98% accuracy",
      stats: "Processes speech in real-time",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Medical Context Aware",
      description: "Understands radiology terminology and medical context across specialties",
      stats: "500,000+ medical terms",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Generate complete reports in seconds instead of hours",
      stats: "85% faster than manual typing",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with end-to-end encryption and audit trails",
      stats: "Zero data breaches",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Doctor Examines Patient",
      description: "During MRI/CT scan examination, doctor dictates findings",
      image: "https://images.unsplash.com/photo-1516549655669-df565bcfbc19?w=600&auto=format&fit=crop",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      step: "2",
      title: "AI Transcribes Voice",
      description: "Advanced AI captures and transcribes medical terminology accurately",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop",
      icon: <Mic className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Report Generation",
      description: "AI structures data into professional medical reports instantly",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop",
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Review & Approval",
      description: "Doctor reviews and approves report with one click",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&fit=crop",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Time",
      description: "Reduce report generation time from hours to minutes",
      stats: "Save 15+ hours/week per radiologist"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Increase Efficiency",
      description: "Handle more patients without increasing staff",
      stats: "Increase throughput by 40%"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Improve Accuracy",
      description: "Reduce human errors in documentation",
      stats: "98.5% accuracy rate"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Boost Revenue",
      description: "Faster billing and reduced administrative costs",
      stats: "Increase revenue by 25%"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief of Radiology, Mayo Clinic",
      content: "rad.ai has transformed our workflow. What used to take hours now takes minutes, allowing us to focus more on patient care.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Hospital Administrator, Mount Sinai",
      content: "The ROI was immediate. We reduced report turnaround time by 85% and improved accuracy significantly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Radiologist, Cleveland Clinic",
      content: "The AI understands complex medical terminology better than any other tool we've tried. It's like having a super-efficient assistant.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop",
      rating: 5
    }
  ];

  const specialties = [
    "MRI Reports",
    "CT Scan Reports", 
    "X-Ray Reports",
    "Ultrasound Reports",
    "Mammography Reports",
    "Nuclear Medicine"
  ];

  const integrations = [
    { name: "Epic", logo: "🏥" },
    { name: "Cerner", logo: "⚕️" },
    { name: "Allscripts", logo: "📊" },
    { name: "Meditech", logo: "💻" },
    { name: "GE Healthcare", logo: "🔬" },
    { name: "Siemens Healthineers", logo: "⚙️" }
  ];

  useEffect(() => {
    const targets = {
      reports: 10000,
      time: 85,
      partners: 500,
      accuracy: 98.5
    };

    const durations = {
      reports: 2000,
      time: 1500,
      partners: 1800,
      accuracy: 1200
    };

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / Math.max(...Object.values(durations)), 1);

      // Easing function for smoother animation
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      setCounter({
        reports: Math.floor(easeOutCubic(progress) * targets.reports),
        time: Math.floor(easeOutCubic(progress) * targets.time),
        partners: Math.floor(easeOutCubic(progress) * targets.partners),
        accuracy: parseFloat((easeOutCubic(progress) * targets.accuracy).toFixed(1))
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        {/* Background with medical image overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&auto=format&fit=crop&q=80"
            alt="Healthcare AI Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-40 left-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl animate-float border border-white/30"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl animate-float-slow border border-white/30"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-full animate-float-fast border border-secondary/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Animated Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-ping"></div>
                <span className="text-secondary font-semibold">Trusted by 500+ Healthcare Providers</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-gray-900">AI-Powered Radiology</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Report Generation
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Transform doctor's voice notes into accurate, structured medical reports for MRI, CT-Scan, and X-Ray examinations instantly. 
                Reduce documentation time by 85% while improving accuracy to 98.5%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <button
                  onClick={openModal}
                  className="group relative px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-gray-700">
                    <div className="font-semibold">4.9/5 Rating</div>
                    <div className="text-sm text-gray-500">From 250+ reviews</div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{counter.reports.toLocaleString()}+</div>
                  <div className="text-gray-600 text-sm">Reports Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{counter.time}%</div>
                  <div className="text-gray-600 text-sm">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{counter.partners}+</div>
                  <div className="text-gray-600 text-sm">Healthcare Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{counter.accuracy}%</div>
                  <div className="text-gray-600 text-sm">Accuracy Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/40">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&auto=format&fit=crop&q=80"
                  alt="AI Radiology Dashboard"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">AI Radiology Assistant</h3>
                      <p className="text-gray-600 text-sm">Real-time voice transcription</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Processing</span>
                      <span className="text-secondary font-semibold">Live</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Accuracy</span>
                      <span className="text-secondary font-semibold">98.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Time Saved</span>
                      <span className="text-secondary font-semibold">85%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/40">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">HIPAA Certified</div>
                    <div className="text-gray-600 text-sm">Enterprise Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized for Radiology
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              AI-powered report generation for all radiology specialties with medical-grade accuracy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6 text-center hover:border-secondary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionizing Medical Documentation
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Replace manual typing with intelligent AI that understands medical terminology and context
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm rounded-3xl border border-white/30 transform group-hover:scale-105 transition-all duration-300"></div>
                <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm text-secondary font-semibold">
                    {feature.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From voice dictation to completed report in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 group"
                >
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-white flex items-center justify-center">
                      <div className="text-secondary">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80"
                  alt="Medical Workflow"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                  <div className="text-white">
                    <div className="text-2xl font-bold mb-2">Live Demo Available</div>
                    <p className="text-white/80">See how rad.ai transforms radiology workflow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Radiology Department
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience significant improvements across all metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {benefit.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Works with your existing healthcare systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {integration.logo}
                </div>
                <div className="font-semibold text-gray-900 text-center">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-full mb-4">
              <MessageSquare className="w-5 h-5 text-secondary mr-2" />
              <span className="text-secondary font-semibold">Trusted by Healthcare Leaders</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from healthcare providers who transformed their workflow with rad.ai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/40 p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Radiology Workflow?
            </h2>
            <p className="text-white/80 text-xl mb-10">
              Join 500+ healthcare providers using rad.ai to save time, improve accuracy, and enhance patient care
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={openModal}
                className="group relative px-12 py-5 bg-white text-primary rounded-2xl hover:shadow-2xl transition-all font-bold text-lg hover:scale-105 transform"
              >
                <span className="relative z-10">Start Free 14-Day Trial</span>
              </button>
              <a
                href="/contact"
                className="px-12 py-5 bg-white/20 backdrop-blur-sm text-white rounded-2xl border border-white/30 hover:bg-white/30 transition-all font-semibold text-lg"
              >
                Schedule Consultation
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">14 Days</div>
                <div className="text-white/80">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">No Credit Card</div>
                <div className="text-white/80">Required</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7 Support</div>
                <div className="text-white/80">During Trial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookDemoModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
};

export default Home;