import React from 'react';
import { Briefcase, ShieldCheck, TrendingUp, Home, Banknote, LineChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Portfolio Advisory',
      description: 'Tailored investment strategies designed to align with your financial goals and risk appetite.',
      features: ['Custom Portfolios', 'Asset Allocation', 'Performance Monitoring', 'Goal Alignment']
    },
    {
      icon: ShieldCheck,
      title: 'Risk Management',
      description: 'Disciplined strategies that preserve capital while optimizing returns across diverse asset classes.',
      features: ['Capital Preservation', 'Risk Assessment', 'Diversification', 'Compliance Guidance']
    },
    {
      icon: TrendingUp,
      title: 'Equities & Securities',
      description: 'Insight-driven recommendations across equities, bonds, and government securities.',
      features: ['Equity Analysis', 'Bond Investments', 'Market Insights', 'Growth Opportunities']
    },
    {
      icon: Home,
      title: 'Real Estate Consulting',
      description: 'Strategic property investments that balance long-term value with market opportunities.',
      features: ['Property Advisory', 'Market Research', 'Valuation', 'Sustainable Investments']
    },
    {
      icon: Banknote,
      title: 'Institutional Advisory',
      description: 'Comprehensive guidance for institutional clients, funds, and organizations.',
      features: ['Fund Strategy', 'Corporate Advisory', 'Governance Support', 'Institutional Risk Management']
    },
    {
      icon: LineChart,
      title: 'Wealth Strategy',
      description: 'Long-term wealth creation strategies built on clarity, discipline, and sustainable growth.',
      features: ['Financial Planning', 'Wealth Preservation', 'Growth Roadmaps', 'Succession Planning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            HFS provides disciplined, insight-driven investment advisory services across asset classes,
            helping clients preserve capital, optimize returns, and build sustainable wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-700 rounded-2xl p-8 hover:bg-gray-600 transition-all duration-300 group hover:transform hover:-translate-y-2 border border-gray-600"
            >
              {/* Icon with brand blue background */}
              <div className="w-16 h-16 bg-[#7f7b0d] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#7f7b0d]/90 transition-colors">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#CECA64] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-[#CECA64] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#7f7b0d]/90 hover:bg-[#CECA64]/80 hover:text-[#4456BE] text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#4456BE]/40"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
