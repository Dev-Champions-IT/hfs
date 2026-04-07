// import { ArrowDown, Palette, Target, Zap } from 'lucide-react';
import { ArrowDown, DollarSign, TrendingUp, ShieldCheck } from 'lucide-react'
import image1 from '../assets/hero_image_main.png'; // This is Adetula Daniel's image

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <section
      id="hero"
      className="relative pt-20 mt-10 min-h-screen flex items-center overflow-hidden
                 bg-[url('../Picsart_25-09-11_09-01-09-579.png')]
                 bg-cover bg-center"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4456BE]/7 to-[#4456BE]/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:space-x-12">
        {/* Left-hand side: Text content */}
        <div className="max-w-4xl text-center md:text-left flex-1 py-12 md:py-0">
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <div className="p-2 bg-[#4456BE] rounded-lg">
              <DollarSign className="w-6 h-6 text-[#CECA64]" />
            </div>
            <div className="p-2 bg-[#4456BE] rounded-lg">
              <TrendingUp className="w-6 h-6 text-[#CECA64]" />
            </div>
            <div className="p-2 bg-[#4456BE] rounded-lg">
              <ShieldCheck className="w-6 h-6 text-[#CECA64]" />
            </div>
          </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
         Discipline & <br />
            <span className="text-[#CECA64]">Smarter Investment Decisions</span>
          </h1>



          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
         HFS delivers disciplined, insight-driven strategies across asset classes —
        helping retail investors, HNIs, and institutions make smarter investment decisions.
          </p>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
 From government securities to equities, we identify high-quality opportunities
        that align with your goals and risk appetite.
          </p>
          <p className="text-xl italic pt-6 md:text-2xl text-gray-300 mb-8 leading-relaxed">
        "Preserve capital, optimize returns, and build wealth that lasts."
          </p>

      

             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start mb-5">
            <button
              onClick={scrollToPortfolio}
              className="bg-[#CECA64]/80 hover:bg-[#CECA64]/80 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-[#CECA64] text-[#CECA64] px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 "
            >
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Right-hand side: Image - Adjusted */}
        <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
          {/* Removed rounded-full and adjusted sizing for a more full-body/less cropped look */}
          <div className="relative w-[300px] h-[400px] sm:w-[450px] sm:h-[600px] lg:w-[500px] lg:h-[700px] overflow-hidden shadow-2xl rounded-lg"> {/* Added rounded-lg for soft corners */}
            <img
              src={image1}
              alt="Adetula Daniel - Brand Designer"
              className="w-full h-full object-cover object-top z-0" // object-top to ensure head is visible
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToPortfolio} className="text-white/70 hover:text-white transition-colors">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;