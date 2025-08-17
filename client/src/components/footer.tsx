export default function Footer() {
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
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-blue-400">AA</span>
              <span className="text-slate-300 font-medium">Aljhone Agnas</span>
            </div>
            <p className="text-slate-400 text-sm">
              Materials Engineering student and project leader committed to innovative solutions and sustainable development.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-200 font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("resume")}
                className="block text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-200 font-medium mb-4">Professional</h4>
            <div className="space-y-2">
              <p className="text-slate-400 text-sm">UP Diliman</p>
              <p className="text-slate-400 text-sm">Materials Engineering</p>
              <p className="text-slate-400 text-sm">DOST-ITDI Research</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 Aljhone Agnas. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
