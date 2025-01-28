import React from 'react';
import Hero from '../components/Home/Hero';
import CategoryCard from '../components/Home/CategoryCard';
import FAQ from '../components/Home/FAQ';

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
    <div>
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>

      <FAQ />
    </div>
  );
};

export default HomePage;