import React from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/Category/NewsCard';

const CategoryPage = () => {
  const { id } = useParams();
  
  // Mock data - replace with actual API call
  const newsItems = [
    {
      title: "Latest News Headlines",
      excerpt: "Breaking news and top stories from around the world. Stay informed with comprehensive coverage.",
      image: null
    },
    {
      title: "Technology Updates",
      excerpt: "The latest developments in technology and innovation. Discover what's new in the tech world.",
      image: null
    },
    {
      title: "Sports Coverage",
      excerpt: "Complete sports coverage including live scores, highlights, and analysis of major sporting events.",
      image: null
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Category {id}</h1>
      
      <div className="grid grid-cols-1 gap-8">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            excerpt={item.excerpt}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;