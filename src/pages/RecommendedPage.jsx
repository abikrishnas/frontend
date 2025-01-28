// src/pages/RecommendedPage.jsx
import React from 'react';
import NewsCard from '../components/Category/NewsCard';

const RecommendedPage = () => {
  const recommendedSections = [
    {
      title: "Trending Now",
      news: [
        {
          title: "Breaking Headlines",
          excerpt: "Stay informed with the latest breaking news and comprehensive coverage.",
          author: "John Doe",
          date: "2 hours ago",
          image: null
        },
        {
          title: "Top Stories",
          excerpt: "Explore the most impactful stories making headlines around the world.",
          author: "Jane Smith",
          date: "3 hours ago",
          image: null
        }
      ]
    },
    {
      title: "Based on Your Interests",
      news: [
        {
          title: "Tech Innovation",
          excerpt: "Latest developments in technology and their impact on daily life.",
          author: "Tech Reporter",
          date: "1 day ago",
          image: null
        },
        {
          title: "Science Updates",
          excerpt: "Recent discoveries and breakthroughs in scientific research.",
          author: "Science Team",
          date: "2 days ago",
          image: null
        }
      ]
    },
    {
      title: "Editor's Pick",
      news: [
        {
          title: "Featured Story",
          excerpt: "Hand-picked stories that deserve your attention.",
          author: "Editorial Team",
          date: "Today",
          image: null
        },
        {
          title: "Must Read",
          excerpt: "Essential reading selected by our editorial team.",
          author: "Chief Editor",
          date: "Yesterday",
          image: null
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-12">Recommended For You</h1>
      
      <div className="space-y-16">
        {recommendedSections.map((section, index) => (
          <div key={index} className="bg-teal-800/30 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {section.news.map((news, newsIndex) => (
                <NewsCard
                  key={newsIndex}
                  title={news.title}
                  excerpt={news.excerpt}
                  author={news.author}
                  date={news.date}
                  image={news.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add a load more button */}
      <div className="flex justify-center mt-12">
        <button className="bg-pink-200/20 text-white px-6 py-3 rounded-full hover:bg-pink-200/30 transition-colors">
          Load More Recommendations
        </button>
      </div>
    </div>
  );
};

export default RecommendedPage;