import { Briefcase, GraduationCap, Award, Cog } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-gradient-blue mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            A timeline of my professional development, leadership roles, and academic achievements
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center">
              <Briefcase className="text-blue-400 mr-3" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {/* DOST-ITDI Intern */}
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-2 border-navy-950"></div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-slate-200">Research Intern</h4>
                    <span className="text-sm text-blue-400 font-medium">Jun 2025 - Aug 2025</span>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mb-3">DOST-ITDI, Materials Science Division</p>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Trained on 3D printing manufacturing workflow and research applications</li>
                    <li>• Applied materials knowledge to improve properties and optimize production</li>
                    <li>• Assisted in MAST3R projects across multiple engineering fields</li>
                  </ul>
                </div>
              </div>
              
              {/* UP Fair Director */}
              <div className="relative pl-8 border-l-2 border-cyan-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-cyan-500 rounded-full border-2 border-navy-950"></div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-slate-200">Director</h4>
                    <span className="text-sm text-cyan-400 font-medium">Nov 2024 - Apr 2025</span>
                  </div>
                  <p className="text-cyan-400 text-sm font-medium mb-3">UP Fair Kalye Tunes 2025</p>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Co-led execution of flagship hip-hop event advocating for urban communities</li>
                    <li>• Generated seven-figure sales and revenue with optimized cost management</li>
                    <li>• Managed cross-functional teams across 7+ specialized committees</li>
                  </ul>
                </div>
              </div>
              
              {/* National Summit Head */}
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-2 border-navy-950"></div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-slate-200">Head of Marketing & Finance</h4>
                    <span className="text-sm text-blue-400 font-medium">Dec 2024 - Apr 2025</span>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mb-3">National Mining, Metallurgical & Materials Engineering Summit</p>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Secured 7 corporate partnerships and six-figure sponsorships</li>
                    <li>• Led corporate relations through strategic negotiations</li>
                    <li>• Managed comprehensive financial oversight and budget planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education & Skills */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center">
              <GraduationCap className="text-cyan-400 mr-3" />
              Education & Certifications
            </h3>
            <div className="space-y-6 mb-12">
              {/* UP Diliman */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <h4 className="text-lg font-semibold text-slate-200 mb-2">University of the Philippines Diliman</h4>
                <p className="text-cyan-400 text-sm font-medium mb-2">BS Materials Engineering • Undergraduate</p>
                <p className="text-slate-400 text-sm">Focusing on advanced materials science, engineering principles, and sustainable technology solutions</p>
              </div>
              
              {/* PSHS */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <h4 className="text-lg font-semibold text-slate-200 mb-2">Philippine Science High School - Bicol</h4>
                <p className="text-blue-400 text-sm font-medium mb-2">Physics Track • Graduated 2019</p>
                <p className="text-slate-400 text-sm">Specialized education in science and mathematics with focus on physics and research methodology</p>
              </div>
              
              {/* Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
                  <Award className="text-blue-400 mb-2" />
                  <h5 className="text-slate-200 font-medium">Six Sigma White Belt</h5>
                  <p className="text-slate-400 text-xs">Completed 2025</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
                  <Award className="text-cyan-400 mb-2" />
                  <h5 className="text-slate-200 font-medium">EFSET C2 English</h5>
                  <p className="text-slate-400 text-xs">Proficiency Certified</p>
                </div>
              </div>
            </div>
            
            {/* Technical Skills */}
            <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center">
              <Cog className="text-blue-400 mr-3" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-200 font-medium">Project Leadership</span>
                  <span className="text-blue-400">●●●●●</span>
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-200 font-medium">3D Printing & Manufacturing</span>
                  <span className="text-cyan-400">●●●●●</span>
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-200 font-medium">Data Analysis (MATLAB)</span>
                  <span className="text-blue-400">●●●●●</span>
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-200 font-medium">Finance & Accounting</span>
                  <span className="text-cyan-400">●●●●●</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
