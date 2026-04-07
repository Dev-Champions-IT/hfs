import React from 'react';
import { Banknote, TrendingUp, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '200+', label: 'Clients Served' },
    { icon: Banknote, number: '$50M+', label: 'Assets Under Advisory' },
    { icon: TrendingUp, number: '15+', label: 'Asset Classes Covered' },
    { icon: ShieldCheck, number: '10+', label: 'Years of Market Insight' }
  ];

  const strengths = [
    { name: 'Government Securities', level: 95 },
    { name: 'Equities & Stocks', level: 90 },
    { name: 'Real Estate Advisory', level: 88 },
    { name: 'Risk Management', level: 92 },
    { name: 'Institutional Strategy', level: 94 },
    { name: 'Retail Investor Guidance', level: 96 }
  ];

  return (
    <section id="about" className="py-20 mt-20 bg-[linear-gradient(135deg,#4456BE/7,#4456BE/70)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center md:text-left">
  About <span className="text-[#CECA64]">HFS</span>
</h2>

            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              HFS is a consulting firm delivering tailored investment advisory services to 
              retail investors, high-net-worth individuals, and institutional clients. 
              We provide disciplined, insight-driven strategies across diverse asset classes 
              to help clients achieve sustainable wealth.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Leveraging deep market knowledge, we identify high-quality opportunities in 
              government securities, commercial papers, real estate, and equities. Our 
              client-centric approach ensures every recommendation aligns with your 
              financial goals and risk appetite.
            </p>

            <p className="text-lg italic text-[#CECA64] mb-8 leading-relaxed">
              “Preserve capital, optimize returns, and build wealth that lasts.”
            </p>

            {/* Strengths */}
            <div className="space-y-4">
              {strengths.map((strength) => (
                <div key={strength.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{strength.name}</span>
                    <span className="text-gray-300">{strength.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-[#CECA64] h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${strength.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Financial advisory team at work"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#7f7b0d]/90 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Trusted Advisory</p>
                    <p className="text-sm text-gray-300">Decades of disciplined insight</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <stat.icon className="w-8 h-8 text-[#CECA64] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
