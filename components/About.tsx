
'use client';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About <span className="bg-gradient-to-r from-[#8121D0] to-[#B45CF0] bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hi! I'm <span className="text-white font-semibold">Krithik Kotian</span>, a data-driven problem solver passionate about transforming raw data into powerful insights and intelligent solutions. I specialize in crafting data analytics dashboards, predictive models, and GenAI-powered applications that drive real-world impact. I enjoy exploring new tools, uncovering hidden patterns, and telling compelling stories through data. From solo projects to collaborative challenges, I'm always pushing the boundaries of what's possible with data and AI.
              </p>
            </div>
            
            <div className="mt-10">
              <a
                href="/resume.pdf"
                download
                className="bg-gradient-to-r from-[#8121D0] to-[#B45CF0] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#8121D0]/30 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-3"
              >
                <i className="ri-download-line w-5 h-5 flex items-center justify-center"></i>
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20data%20scientist%20working%20with%20multiple%20monitors%20displaying%20advanced%20analytics%20dashboards%2C%20machine%20learning%20models%2C%20and%20data%20visualizations%20in%20a%20modern%20futuristic%20office%20setup%20with%20purple%20ambient%20lighting%2C%20clean%20workspace%2C%20focused%20professional%20atmosphere&width=600&height=700&seq=about-img&orientation=portrait"
                alt="Data Analyst Workspace"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#291C3A]/60 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#8121D0] to-[#B45CF0] p-6 rounded-2xl text-white">
              <div className="text-2xl font-bold">Data-Driven</div>
              <div className="text-sm opacity-90">Decision Making</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
