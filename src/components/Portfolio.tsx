import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'TechFlow Brand Identity',
      category: 'Brand Identity',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity system for a innovative tech startup, including logo design, color palette, and brand guidelines.',
      tags: ['Logo Design', 'Brand Guidelines', 'Digital Assets']
    },
    {
      id: 2,
      title: 'Artisan Coffee Co.',
      category: 'Package Design',
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium coffee packaging design that reflects craft quality and sustainable sourcing values.',
      tags: ['Package Design', 'Typography', 'Sustainable Design']
    },
    {
      id: 3,
      title: 'Urban Wellness Studio',
      category: 'Brand Strategy',
      image: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Strategic rebrand for wellness studio, creating cohesive visual identity across all touchpoints.',
      tags: ['Rebranding', 'Strategy', 'Environmental Design']
    },
    {
      id: 4,
      title: 'NextGen Financial',
      category: 'Digital Brand',
      image: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern financial services brand with focus on digital-first customer experience.',
      tags: ['Digital Design', 'UI/UX', 'Financial Services']
    },
    {
      id: 5,
      title: 'Eco Living Magazine',
      category: 'Editorial Design',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Magazine layout and visual direction for sustainable lifestyle publication.',
      tags: ['Editorial', 'Layout Design', 'Sustainability']
    },
    {
      id: 6,
      title: 'Creative Hub Event',
      category: 'Event Branding',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete event branding including signage, promotional materials, and digital assets.',
      tags: ['Event Design', 'Signage', 'Promotional Materials']
    }
  ];

  const categories = ['All', 'Brand Identity', 'Package Design', 'Brand Strategy', 'Digital Brand', 'Editorial Design', 'Event Branding'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-[#2D024C]/80 via-transparent to-[#2D024C]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Selected Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of brand identities, strategic solutions, and creative projects 
            that have helped businesses connect with their audiences and achieve their goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#CECA64] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-[#CECA64] font-medium">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-600 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;