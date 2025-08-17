import { ChevronDown, FileText, Briefcase } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/60" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Aljhone Agnas
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-8">
            Materials Engineer & Project Leader
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting innovative solutions at the intersection of materials science, project management, and sustainable engineering. 
            Transforming ideas into impactful realities through strategic leadership and technical excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("resume")}
              className="inline-flex items-center px-8 py-4 bg-gradient-blue text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <FileText className="mr-2" size={20} />
              View My Resume
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <Briefcase className="mr-2" size={20} />
              Explore My Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating animation element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <button
          onClick={() => scrollToSection("about")}
          className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
