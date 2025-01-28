import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-teal-600/30">
      <button
        className="w-full py-4 flex justify-between items-center text-white hover:text-pink-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{heading}</span>
        <ChevronDown
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Frequently Asked Questions !
      </h2>
      <div className="space-y-4">
        <FAQItem heading="What is News Segregator?">
          News Segregator is a platform that helps you organize and filter news based on your interests and preferences.
        </FAQItem>
        <FAQItem heading="How does it work?">
          Our AI-powered system categorizes news articles into different topics and presents them in an organized manner.
        </FAQItem>
        <FAQItem heading="Is it free to use?">
          Yes, the basic features are free to use. We also offer premium features for advanced users.
        </FAQItem>
        <FAQItem heading="How do I get started?">
          Simply sign up for an account and start exploring news categories that interest you.
        </FAQItem>
      </div>
    </div>
  );
};

export default FAQ;