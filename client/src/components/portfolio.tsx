import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "UP Fair Kalye Tunes 2025",
      description: "Led a flagship hip-hop event that generated seven-figure revenue while advocating for urban communities. Managed cross-functional teams and end-to-end project execution.",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      tags: ["Project Management", "Leadership", "Event Production"],
      color: "blue",
    },
    {
      id: 2,
      title: "3D Printing Research",
      description: "Conducted materials research at DOST-ITDI focusing on optimizing 3D printing processes and exploring new applications in manufacturing and production.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      tags: ["Materials Science", "3D Printing", "Research"],
      color: "cyan",
    },
    {
      id: 3,
      title: "National Engineering Summit",
      description: "Secured corporate partnerships and managed finances for a national summit connecting students with industry leaders in mining and materials engineering.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      tags: ["Corporate Relations", "Finance", "Marketing"],
      color: "blue",
    },
    {
      id: 4,
      title: "MATLAB Data Analysis",
      description: "Developed analytical models using MATLAB for materials characterization and process optimization in manufacturing applications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      tags: ["MATLAB", "Data Analysis", "Modeling"],
      color: "cyan",
    },
    {
      id: 5,
      title: "Process Optimization",
      description: "Applied Six Sigma methodologies to improve manufacturing processes and reduce waste in materials production workflows.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      tags: ["Six Sigma", "Process Improvement", "Manufacturing"],
      color: "blue",
    },
    {
      id: 6,
      title: "Academic Research",
      description: "Contributed to materials engineering research publications and presented findings at academic conferences and symposiums.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      tags: ["Research", "Publications", "Presentations"],
      color: "cyan",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-blue mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Showcasing my work in materials engineering, project management, and research innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-${project.color}-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-${project.color}-500/20 cursor-pointer aspect-square flex flex-col`}
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-slate-400 text-xs mb-3 line-clamp-3 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 bg-${project.color}-500/20 text-${project.color}-400 text-xs rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-1 bg-slate-600/20 text-slate-400 text-xs rounded-full">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
                <button
                  className={`inline-flex items-center text-${project.color}-400 hover:text-${project.color}-300 transition-all duration-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}
                >
                  View Details <ArrowRight className="ml-1" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
