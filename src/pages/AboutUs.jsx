import { Users, Target, Award, Globe, Heart, Star, TrendingUp, Shield, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import BookDemoModal from '../components/BookDemoModal';

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      bio: "Former Head of Radiology at Mayo Clinic, 15+ years experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "James Wilson",
      role: "CEO & Founder",
      bio: "Ex-Google AI lead, healthcare technology entrepreneur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of AI Research",
      bio: "PhD in Medical AI from Stanford, published 50+ papers",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&auto=format&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Lisa Wang",
      role: "Head of Product",
      bio: "Former Product Lead at Epic Systems, healthcare SaaS expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded with vision to transform medical documentation" },
    { year: "2021", event: "First AI model achieving 90% accuracy in radiology reports" },
    { year: "2022", event: "Partnered with 100+ healthcare facilities" },
    { year: "2023", event: "Achieved HIPAA and GDPR compliance certifications" },
    { year: "2024", event: "Expanded to 500+ partners across 3 continents" }
  ];

  const values = [
    {
      title: "Accuracy First",
      description: "Medical accuracy is non-negotiable. We maintain 98%+ accuracy in all reports.",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Patient Privacy",
      description: "We adhere to strict privacy standards including HIPAA and GDPR compliance.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Innovation",
      description: "Continuously improving our AI models to serve healthcare better.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
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
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/10 rounded-full animate-float-fast"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-full mb-8">
            <Heart className="w-5 h-5 text-secondary mr-2" />
            <span className="text-secondary font-semibold">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="block text-gray-900">Revolutionizing</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Healthcare with AI
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            At rad.ai, we're on a mission to eliminate manual documentation in healthcare, 
            allowing medical professionals to focus on what matters most - patient care.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To transform healthcare documentation through intelligent AI, reducing administrative burden 
                and improving patient care quality by providing accurate, instant medical report generation.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center text-white mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg">
                A world where every healthcare professional can document patient encounters naturally through 
                voice, with AI handling the administrative work instantly and accurately.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combining decades of medical expertise with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 p-6 shadow-xl hover:shadow-2xl transition-all">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-2xl object-cover mx-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                  <div className="text-secondary font-semibold text-center mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm text-center mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-secondary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-secondary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-0 md:pl-12 group">
                  <div className="hidden md:block absolute left-0 top-4 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 p-6 shadow-lg group-hover:shadow-xl transition-all">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 p-8 text-center hover:shadow-2xl transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:rotate-12 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you're a healthcare provider, developer, or AI enthusiast, there's a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl hover:shadow-xl transition-all font-semibold"
            >
              Book a Demo
            </button>
            <a
              href="#"
              className="px-10 py-4 bg-white text-primary border border-primary/20 rounded-2xl hover:border-primary/40 transition-all font-semibold"
            >
              View Careers
            </a>
          </div>
        </div>
      </div>

      <BookDemoModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
};

export default AboutUs;