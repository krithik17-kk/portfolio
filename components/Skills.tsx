
'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Analytics",
      skills: [
        { name: "Python", level: 95, icon: "ri-code-s-slash-line" },
        { name: "SQL", level: 92, icon: "ri-database-2-line" },
        { name: "JavaScript", level: 88, icon: "ri-javascript-line" },
        { name: "Pandas", level: 94, icon: "ri-file-excel-line" }
      ]
    },
    {
      title: "Visualization Tools",
      skills: [
        { name: "Power BI", level: 90, icon: "ri-dashboard-line" },
        { name: "Tableau", level: 87, icon: "ri-pie-chart-line" },
        { name: "Excel", level: 95, icon: "ri-file-excel-2-line" },
        { name: "Jupyter", level: 89, icon: "ri-code-line" }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", level: 91, icon: "ri-brain-line" },
        { name: "XGBoost", level: 85, icon: "ri-robot-line" },
        { name: "OpenAI", level: 82, icon: "ri-settings-3-line" },
        { name: "PyTorch", level: 78, icon: "ri-cpu-line" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-[#8121D0] to-[#B45CF0] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proficient in cutting-edge tools and technologies for data analysis, visualization, and machine learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gradient-to-br from-[#331C52]/50 to-[#291C3A]/50 backdrop-blur-sm border border-[#8121D0]/20 rounded-2xl p-8 hover:border-[#8121D0]/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-[#8121D0]/20 rounded-lg group-hover:bg-[#8121D0]/30 transition-colors duration-300">
                          <i className={`${skill.icon} text-[#8121D0] text-lg`}></i>
                        </div>
                        <span className="text-white font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-[#8121D0] font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#8121D0] to-[#B45CF0] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#8121D0]/10 to-[#B45CF0]/10 border border-[#8121D0]/20 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-[#8121D0] rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Always learning and exploring new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
