import React from 'react';
import Hero from '../components/Home/Hero';
import CategoryCard from '../components/Home/CategoryCard';
import FAQ from '../components/Home/FAQ';
import TeamSection from '../components/Home/TeamSection';

const HomePage = () => {
  const categories = [
    {
      title: 'Politics',
      description: 'Stay updated with the latest political news and developments'
    },
    {
      title: 'Technology',
      description: 'Explore the latest innovations and tech trends'
    },
    {
      title: 'Sports',
      description: 'Get the latest updates from the world of sports'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="h-full">
              <CategoryCard
                title={category.title}
                description={category.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-teal-700/30 py-16">
        <FAQ />
      </div>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
};

export default HomePage;