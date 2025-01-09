import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  BarChart2, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  TrendingUp,
  Users,
  PieChart,
  Brain,
  Leaf,
  Home,
  Info,
  PlayCircle,
  ChevronRight,
  Star,
  Sparkles,
  Cloud,
  Zap
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 font-poppins overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <Sparkles className="w-8 h-8 text-white/5" />
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/10"
      >
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-8 h-8 text-yellow-300" />
              </motion.div>
              <span className="font-script text-3xl text-white">Abstractions</span>
            </div>
            <nav className="flex space-x-12">
              {[
                { icon: Home, label: 'Home', id: 'home' },
                { icon: Info, label: 'About', id: 'about' },
                { icon: MessageSquare, label: 'Contact', id: 'contact' }
              ].map(({ icon: Icon, label, id }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center space-x-2 text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5 ${
                    activeSection === id ? 'bg-white/10' : ''
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-lg">{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container mx-auto px-8 pt-40 pb-32">
        {/* Hero Section */}
        <div className="relative mb-32">
          <div className="max-w-3xl flex-row align-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-block p-6 bg-white/10 backdrop-blur-lg rounded-full mb-8"
            >
              <MessageSquare className="w-8 h-8 text-purple-300" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-script text-5xl md:text-8xl font-bold text-white mb-2 leading-tight"
            >
              Social_Abstractions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-merriweather  font-normal text-xl text-purple-200 mb-12 max-w-2xl leading-relaxed"
            > Level Up Your Social Media Game with one click !            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Free
            </motion.button>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [-20, 20],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          >
            <div className="relative w-full h-full">
              <Cloud className="absolute top-10 right-10 w-20 h-20 text-white/10" />
              <Sparkles className="absolute top-40 right-40 w-16 h-16 text-purple-300/20" />
              <Zap className="absolute bottom-20 right-20 w-24 h-24 text-pink-300/20" />
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-32 bg-white/5 backdrop-blur-lg rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
          <div className="relative">
            <h2 className="text-4xl font-script text-white mb-8">See it in Action</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
            
              <iframe                 className="w-full h-[600px]"
 src="https://www.youtube.com/embed/iDCS2sxDWIE" title="Social_Abstractions" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </motion.div>

        {/* Features Section - Alternating Layout */}
        <div className="space-y-32">
          {[
            {
              icon: Brain,
              title: "AI-Powered Analysis",
              description: "Our advanced machine learning algorithms analyze your conversations in real-time, providing deep insights into communication patterns, sentiment trends, and engagement metrics.",
              align: 'right'
            },
            {
              icon: Star,
              title: "Smart Insights",
              description: "Get immediate actionable insights from your chat data, helping you make informed decisions and improve your communication strategy instantly.",
              align: 'left'
            },
            {
              icon: TrendingUp,
              title: "Trend Detection",
              description: "Stay ahead of the curve with our powerful trend detection system that identifies emerging patterns and helps you adapt your approach proactively.",
              align: 'right'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: feature.align === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex items-center ${feature.align === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-16`}
            >
              <div className={`flex-1 ${feature.align === 'left' ? 'text-left' : 'text-right'}`}>
                <feature.icon className="w-16 h-16 text-purple-300 mb-6 inline-block" />
                <h3 className="text-4xl font-script text-white mb-6">{feature.title}</h3>
                <p className="text-xl text-purple-200 leading-relaxed">{feature.description}</p>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-3xl p-8 h-[400px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
                {/* Add feature-specific visualization here */}
                <div className="relative h-full flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <feature.icon className="w-32 h-32 text-white/20" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 mb-32">
          {[
            { icon: Users, label: "Active Users", value: "10,000+" },
            { icon: Brain, label: "AI Insights Generated", value: "1M+" },
            { icon: TrendingUp, label: "Growth Rate", value: "300%" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 text-center relative overflow-hidden group hover:bg-white/10 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <stat.icon className="w-16 h-16 text-purple-300 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-4xl font-bold text-white mb-4">{stat.value}</h3>
                <p className="text-xl text-purple-200">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-32">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-script text-5xl text-white mb-12"
          >
            Trusted by leading companies worldwide
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-12"
          >
            {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <Icon className="w-8 h-8 text-purple-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;