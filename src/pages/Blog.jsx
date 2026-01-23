import { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, Clock, Search, Filter, BookOpen, MessageSquare, TrendingUp } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Radiology: AI-Powered Documentation",
      excerpt: "How artificial intelligence is transforming medical reporting and reducing physician burnout by automating documentation workflows.",
      author: "Dr. Sarah Chen",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      category: "AI in Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Voice Recognition Accuracy in Medical Settings",
      excerpt: "Achieving 98% accuracy in medical terminology recognition - our technical breakthrough in natural language processing for healthcare.",
      author: "James Wilson",
      date: "Mar 10, 2024",
      readTime: "4 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "HIPAA Compliance in AI Healthcare Solutions",
      excerpt: "Ensuring patient privacy and data security in AI-powered medical applications - a comprehensive guide for healthcare providers.",
      author: "Lisa Wang",
      date: "Mar 5, 2024",
      readTime: "6 min read",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Case Study: Reducing Report Turnaround Time by 85%",
      excerpt: "How Mercy Hospital reduced radiology report generation time from hours to minutes with rad.ai implementation.",
      author: "Dr. Michael Rodriguez",
      date: "Feb 28, 2024",
      readTime: "7 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1516549655669-df565bcfbc19?w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: 5,
      title: "Integrating AI with Existing EHR Systems",
      excerpt: "Seamless integration strategies for healthcare providers adopting new AI tools without disrupting existing workflows.",
      author: "James Wilson",
      date: "Feb 20, 2024",
      readTime: "5 min read",
      category: "Integration",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "The ROI of AI in Medical Documentation",
      excerpt: "Quantifying the financial and operational benefits of AI adoption in healthcare - a detailed analysis of cost savings and efficiency gains.",
      author: "Dr. Sarah Chen",
      date: "Feb 15, 2024",
      readTime: "8 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Natural Language Processing in Radiology",
      excerpt: "How advanced NLP techniques are revolutionizing the way we understand and process medical imaging reports.",
      author: "Dr. Michael Rodriguez",
      date: "Feb 10, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1554475900-0a0350f3f8c9?w=800&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Telemedicine and AI: The Future of Remote Care",
      excerpt: "Combining telemedicine with AI-powered documentation to create seamless remote healthcare experiences.",
      author: "Lisa Wang",
      date: "Feb 5, 2024",
      readTime: "5 min read",
      category: "Future Trends",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop"
    }
  ];

  const categories = [
    "All",
    "AI in Healthcare",
    "Technology",
    "Case Studies",
    "Compliance",
    "Integration",
    "Business",
    "Future Trends"
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
            <span className="text-secondary font-semibold">Latest Insights</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="block text-gray-900">Insights &</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Updates
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest in AI healthcare technology, radiology innovations, and industry trends.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative w-full md:w-auto flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 font-medium">Filter by:</span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`group relative px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {activeCategory === 'All' && featuredPosts.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
              <div className="flex items-center text-secondary">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="font-semibold">Trending Now</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/60 backdrop-blur-sm border border-white/40">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-secondary font-medium">
                          <Tag className="w-3 h-3 mr-2" />
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-6 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-gray-500">
                            <User className="w-4 h-4 mr-2" />
                            {post.author}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Calendar className="w-4 h-4 mr-2" />
                            {post.date}
                          </div>
                        </div>
                        <button className="text-secondary hover:text-primary font-semibold flex items-center group">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-secondary text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-xs">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <button className="text-secondary hover:text-primary text-sm font-medium flex items-center group">
                      Read
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Newsletter */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-secondary mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest insights on AI in healthcare.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg transition-shadow">
                Subscribe
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Expert Advice?</h3>
            <p className="text-white/80 mb-6">
              Schedule a consultation with our healthcare AI specialists.
            </p>
            <button
              onClick={openModal}
              className="w-full py-3 bg-white text-primary rounded-xl font-semibold hover:shadow-lg transition-shadow"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      <BookDemoModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
};

export default Blog;