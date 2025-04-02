import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Lock,
  Zap,
  Share2,
  Scale,
  Download,
  Users,
  Building2,
  Star,
  ChevronRight,
  Shield,
  RefreshCw,
  Link,
  UserPlus,
  Upload,
  Smartphone,
  Key
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function App() {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-800/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            {...fadeIn}
          >
            Limitless Cloud Storage
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Secure. Scalable. Lightning Fast.<br />
            Welcome to the Future of Cloud Storage.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdQd0OsQxuB3krYo-R8c7UmyKylHA4kmpdfKZt2UqnOrOFUyw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Sign Up via Google Form <ChevronRight size={20} />
            </a>
            <button 
              onClick={scrollToFeatures}
              className="px-8 py-4 border border-blue-400 rounded-lg hover:bg-blue-600/10 transition-colors"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cloud className="w-8 h-8 text-blue-400" />}
              title="Universal Access"
              description="Store and access files from anywhere, anytime."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              title="High-Speed Sync"
              description="Real-time updates across all your devices."
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-green-400" />}
              title="Bank-Grade Security"
              description="Advanced encryption for ultimate data safety."
            />
            <FeatureCard
              icon={<Scale className="w-8 h-8 text-purple-400" />}
              title="Unlimited Scalability"
              description="Storage that grows with your needs."
            />
            <FeatureCard
              icon={<Share2 className="w-8 h-8 text-pink-400" />}
              title="Effortless Sharing"
              description="Secure file sharing with one click."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-red-400" />}
              title="Data Protection"
              description="End-to-end encryption and backup systems."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Founders</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FounderCard
              image="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=400"
              name="Unnayan Mishra"
              role="AI & Cloud Computing Specialist"
              link="https://a4faa95f527bf64073c9919786737332.serveo.net/login?redirect=/files/"
            />
            <FounderCard
              image="https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400"
              name="Krish Munat"
              role="Cybersecurity & Distributed Systems Expert"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PriceCard
              icon={<Users className="w-8 h-8" />}
              title="Individual"
              originalPrice="$9.99"
              price="Free"
              features={[
                "End-to-end encryption",
                "Access on 3 devices",
                "Basic support"
              ]}
            />
            <PriceCard
              icon={<Building2 className="w-8 h-8" />}
              title="Team"
              originalPrice="$24.99"
              price="Free"
              features={[
                "Advanced sharing",
                "Unlimited devices",
                "Priority support"
              ]}
              highlighted
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Coming Soon</h2>
          <p className="text-xl text-gray-400 mb-12">Available soon on all major platforms</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button disabled className="px-6 py-3 bg-gray-700 rounded-lg opacity-50 cursor-not-allowed flex items-center gap-2">
              <Download size={20} /> Windows
            </button>
            <button disabled className="px-6 py-3 bg-gray-700 rounded-lg opacity-50 cursor-not-allowed flex items-center gap-2">
              <Download size={20} /> macOS
            </button>
            <button disabled className="px-6 py-3 bg-gray-700 rounded-lg opacity-50 cursor-not-allowed flex items-center gap-2">
              <Download size={20} /> Linux
            </button>
            <button disabled className="px-6 py-3 bg-gray-700 rounded-lg opacity-50 cursor-not-allowed flex items-center gap-2">
              <Download size={20} /> Android
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Security</li>
                <li>Enterprise</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>API</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2025 Tesseract. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="p-6 bg-gray-900 rounded-xl"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const Timeline = () => {
  const steps = [
    { icon: <UserPlus />, title: "Sign Up", description: "Create your account in seconds" },
    { icon: <Upload />, title: "Upload", description: "Upload & organize files effortlessly" },
    { icon: <Smartphone />, title: "Access", description: "Access from any device, anytime" },
    { icon: <Link />, title: "Share", description: "Share with secure links & permissions" },
    { icon: <Key />, title: "Secure", description: "Enjoy end-to-end encryption" }
  ];

  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <motion.div 
          key={index}
          className="flex gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            {step.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const FounderCard = ({ image, name, role, link }) => (
  <motion.div 
    className={`bg-gray-900 p-6 rounded-xl ${link ? 'cursor-pointer' : ''}`}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    onClick={() => link && window.open(link, '_blank')}
  >
    <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
    <p className="text-gray-400 text-center">{role}</p>
  </motion.div>
);

const PriceCard = ({ icon, title, originalPrice, price, features, highlighted = false }) => (
  <motion.div 
    className={`p-8 rounded-xl ${
      highlighted 
        ? 'bg-blue-600 transform scale-105' 
        : 'bg-gray-800'
    }`}
    whileHover={{ scale: highlighted ? 1.1 : 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="text-center mb-8">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-bold">
        <span className="line-through text-gray-400 text-2xl">{originalPrice}</span>
        <span className="ml-2">{price}</span>
      </div>
      <div className="text-sm text-gray-400">per month</div>
    </div>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Star size={16} className="text-yellow-400" />
          {feature}
        </li>
      ))}
    </ul>
    <a 
      href="https://docs.google.com/forms/d/e/1FAIpQLSdQd0OsQxuB3krYo-R8c7UmyKylHA4kmpdfKZt2UqnOrOFUyw/viewform?usp=dialog"
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full mt-8 py-3 rounded-lg text-center ${
        highlighted 
          ? 'bg-white text-blue-600 hover:bg-gray-100' 
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      Get Started
    </a>
  </motion.div>
);

export default App;