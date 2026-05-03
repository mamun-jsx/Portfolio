import React from "react";

const AboutMe = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center p-8 md:p-12 lg:p-16" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full" data-purpose="about-me-container">
        
        {/* LeftColumn (Skills/Services) */}
        <div className="lg:col-span-5 flex" data-purpose="services-timeline">
          {/* Timeline Graphics */}
          <div className="relative flex flex-col items-center mr-8 pt-6">
            <div className="timeline-line h-full absolute"></div>
            <div className="timeline-dot top-8"></div>
            <div className="timeline-dot top-[50%] -translate-y-1/2"></div>
            <div className="timeline-dot bottom-8"></div>
          </div>
          
          {/* Service List */}
          <div className="space-y-16">
            {/* Item 1 */}
            <div className="flex items-center gap-6 group cursor-default" data-purpose="service-item">
              <div className="w-16 h-16 flex items-center justify-center text-white/80 group-hover:text-accent transition-colors duration-300">
                <svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                  <rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
                  <line x1="8" x2="16" y1="21" y2="21"></line>
                  <line x1="12" x2="12" y1="17" y2="21"></line>
                  <path d="m10 8-2 2 2 2"></path>
                  <path d="m14 8 2 2-2 2"></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">Frontend development</h3>
            </div>
            
            {/* Item 2 */}
            <div className="flex items-center gap-6 group cursor-default" data-purpose="service-item">
              <div className="w-16 h-16 flex items-center justify-center text-white/80 group-hover:text-accent transition-colors duration-300">
                <svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                  <rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
                  <line x1="12" x2="12.01" y1="18" y2="18"></line>
                  <path d="M9 7h6"></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">Backend development</h3>
            </div>
            
            {/* Item 3 */}
            <div className="flex items-center gap-6 group cursor-default" data-purpose="service-item">
              <div className="w-16 h-16 flex items-center justify-center text-white/80 group-hover:text-accent transition-colors duration-300">
                <svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v8"></path>
                  <path d="m16 6-4 4-4-4"></path>
                  <rect height="8" rx="2" width="20" x="2" y="14"></rect>
                  <path d="M6 18h.01"></path>
                  <path d="M10 18h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">Fullstack development</h3>
            </div>
          </div>
        </div>
        
        {/* RightColumn (Biography) */}
        <div className="lg:col-span-7 space-y-10 mt-12 lg:mt-0" data-purpose="about-biography">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">About me</h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
            My web development journey is fueled by a passion for building interactive and user-friendly digital experiences. Since 2022, I have been deeply immersed in modern frameworks, mastering technologies like React, Next.js, Express.js, and Node.js to build robust, scalable, and high-performance applications that solve real-world problems.
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8" data-purpose="career-stats">
            {/* Stat 1 */}
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold flex items-center gap-1">
                <span>1.5</span>
                <span className="text-accent">+</span>
              </div>
              <p className="text-gray-500 uppercase tracking-wider text-sm font-semibold">Years of<br/>experience</p>
            </div>
            
            {/* Stat 2 */}
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold flex items-center gap-1">
                <span>100</span>
                <span className="text-accent">%</span>
              </div>
              <p className="text-gray-500 uppercase tracking-wider text-sm font-semibold">Client<br/>satisfaction</p>
            </div>
            
            {/* Stat 3 */}
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold flex items-center gap-1">
                <span>20</span>
                <span className="text-accent">+</span>
              </div>
              <p className="text-gray-500 uppercase tracking-wider text-sm font-semibold">Completed<br/>Projects</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutMe;
