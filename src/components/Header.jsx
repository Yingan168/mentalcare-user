import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MentalCare</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Resources</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
