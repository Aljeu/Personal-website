import { GraduationCap, FlaskConical, Box, TrendingUp, Users, Calculator } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="prose prose-slate prose-lg">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a passionate Materials Engineering student at the University of the Philippines Diliman with a proven track record in project leadership and innovation. My journey spans from conducting cutting-edge research at DOST-ITDI to leading seven-figure revenue events.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Currently exploring the fascinating world of 3D printing and materials science while developing strategic leadership skills through various organizational roles. I believe in the power of combining technical expertise with effective project management to create meaningful impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="text-3xl text-blue-400 mb-3">
                  <GraduationCap />
                </div>
                <h3 className="text-slate-200 font-semibold mb-2">Education</h3>
                <p className="text-slate-400 text-sm">BS Materials Engineering<br />UP Diliman</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="text-3xl text-cyan-400 mb-3">
                  <FlaskConical />
                </div>
                <h3 className="text-slate-200 font-semibold mb-2">Research</h3>
                <p className="text-slate-400 text-sm">3D Printing & Materials<br />DOST-ITDI</p>
              </div>
            </div>
            
            {/* Skills Icons */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-200 mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                  <Box className="text-2xl text-blue-400 mb-2" />
                  <span className="text-slate-300 text-sm font-medium">3D Printing</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                  <TrendingUp className="text-2xl text-cyan-400 mb-2" />
                  <span className="text-slate-300 text-sm font-medium">MATLAB</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                  <Users className="text-2xl text-blue-400 mb-2" />
                  <span className="text-slate-300 text-sm font-medium">Leadership</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                  <Calculator className="text-2xl text-cyan-400 mb-2" />
                  <span className="text-slate-300 text-sm font-medium">Finance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
