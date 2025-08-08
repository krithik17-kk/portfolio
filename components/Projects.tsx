
'use client';

import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Fraud Detection System",
      description:
        "An end-to-end machine learning project to detect fraudulent credit card transactions using real-world data. The system includes data preprocessing, model training, evaluation, and a Streamlit-powered interactive dashboard for predictions.",
      tech: ["Python", "SQL", "Excel", "Dataset", "Random Forest"],
      image: "https://readdy.ai/api/search-image?query=Modern%20sales%20analytics%20dashboard%20with%20interactive%20charts%2C%20KPI%20metrics%2C%20revenue%20graphs%2C%20and%20business%20intelligence%20visualizations%20in%20purple%20color%20scheme%20on%20professional%20interface&width=500&height=300&seq=project2&orientation=landscape",
      category: "Machine Learning",
      github: "https://github.com/krithik17-kk/fraud-detection-system.git"
    },
    {
      title: "Customer 360 Analytics Churn Prediction System",
      description:
        "Built a unified analytics platform to track customer behavior, segment profiles, and predict churn using machine learning models. Integrated visual dashboards for business teams to monitor churn trends and proactively reduce customer attrition.",
      tech: ["Dashboard", "ML Model", "Data Analysis", "Visualization"],
      image:"https://readdy.ai/api/search-image?query=Financial%20market%20trend%20analysis%20interface%20with%20stock%20charts%2C%20sentiment%20analysis%20graphs%2C%20competitor%20data%20visualization%2C%20and%20automated%20trading%20indicators%20in%20futuristic%20purple%20design&width=500&height=300&seq=project3&orientation=landscape",
      category: "Business Intelligence",
      github: "https://github.com/krithik17-kk/Customer-360-Analytics-Churn-Prediction-System-Telecom-Domain.git"
    },
    {
      title: "Global Workforce Intelligence",
      description:
        "Leverages advanced data analytics and AI to uncover workforce trends, optimize talent strategies, and support data-driven HR decision-making at a global scale. Provides strategic insights into employee distribution, skill gaps, attrition risk, and diversity metrics.",
      tech: ["Cloud", "GenAI", "Data Visualization", "Dashboard", "plotly"],
      image:
        "https://readdy.ai/api/search-image?query=Financial%20market%20trend%20analysis%20interface%20with%20stock%20charts%2C%20sentiment%20analysis%20graphs%2C%20competitor%20data%20visualization%2C%20and%20automated%20trading%20indicators%20in%20futuristic%20purple%20design&width=500&height=300&seq=project3&orientation=landscape",
      category: "Workforce Intelligence & Analytics",
      details: "https://global-workforce-intelligence-sthjbf3yj6q4gb2dgngdma.streamlit.app/",
      github: "https://github.com/krithik17-kk/global-workforce-intelligence.git"
    },
    {
      title: "Flipkart Business Intelligence System",
      description:
        "Designed a robust BI system to analyze Flipkart’s sales, customer behavior, and operational KPIs. Automated data pipelines, created actionable dashboards, and delivered insights that support marketing, supply chain, and category growth decisions.",
      tech: ["PowerBI", "Python", "Libraries"],
      image:
        "https://readdy.ai/api/search-image?query=Modern%20sales%20analytics%20dashboard%20with%20interactive%20charts%2C%20KPI%20metrics%2C%20revenue%20graphs%2C%20and%20business%20intelligence%20visualizations%20in%20purple%20color%20scheme%20on%20professional%20interface&width=500&height=300&seq=project2&orientation=landscape",
      category: "E-commerce Analytics",
      github: "https://github.com/krithik17-kk/Flipkart_BIS.git"
    },
    {
      title: "Retail Sales Forecasting",
      description:
        "Retail Sales Forecasting is a data-driven project that leverages historical sales data, promotions, seasonality, and external factors to predict future demand across product categories. This enables inventory optimization, minimizes stockouts/overstock, and enhances profitability through smarter supply chain decisions.",
      tech: ["Python", "Libraries", "XGBoost", "Tableau", "SQL", "Jupyter Notebook"],
      image:
        "https://readdy.ai/api/search-image?query=Social%20media%20sentiment%20analysis%20dashboard%20with%20real-time%20monitoring%20charts%2C%20brand%20mention%20tracking%2C%20emotion%20analytics%2C%20and%20social%20listening%20interface%20in%20modern%20purple%20design&width=500&height=300&seq=project6&orientation=landscape",
      category: "Retail Analytics & Demand",
      github: "https://github.com/krithik17-kk/Retail_Sales_Forecasting.git"
    },
    {
      title: "Banking Data Analysis",
      description:
        "Analyzed customer transaction data to uncover insights related to product usage, customer segmentation, and potential cross-sell opportunities. Identified patterns in spending behavior, credit card defaults, and customer churn to support data-driven decision-making in retail banking services.",
      tech: ["Python", "Google colab", "Git", "Analysis and Visualization"],
      image:
        "https://readdy.ai/api/search-image?query=Modern%20sales%20analytics%20dashboard%20with%20interactive%20charts%2C%20KPI%20metrics%2C%20revenue%20graphs%2C%20and%20business%20intelligence%20visualizations%20in%20purple%20color%20scheme%20on%20professional%20interface&width=500&height=300&seq=project2&orientation=landscape",
      category: "Finance",
      github: "https://github.com/krithik17-kk/Banking_Data_analysis.git"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-[#8121D0] to-[#B45CF0] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of data-driven solutions that have delivered measurable business impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#331C52]/30 to-[#291C3A]/30 backdrop-blur-sm border border-[#8121D0]/20 rounded-2xl overflow-hidden hover:border-[#8121D0]/60 hover:shadow-2xl hover:shadow-[#8121D0]/20 transition-all duration-500 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#291C3A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#8121D0]/20 backdrop-blur-sm text-[#B45CF0] px-3 py-1 rounded-full text-sm font-medium border border-[#8121D0]/30">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B45CF0] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#8121D0]/10 text-[#8121D0] px-2 py-1 rounded-full text-xs font-medium border border-[#8121D0]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {index === 0 || index === 1 ? (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#8121D0] to-[#B45CF0] text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-[#8121D0]/30 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                      >
                        <i className="ri-eye-line mr-2"></i>
                        View Details
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#331C52]/50 text-[#8121D0] py-2 px-4 rounded-lg font-medium hover:bg-[#8121D0] hover:text-white transition-all duration-300 border border-[#8121D0]/20 whitespace-nowrap cursor-pointer text-center"
                      >
                        <i className="ri-code-line mr-2"></i>
                        Code
                      </a>
                    </>
                  ) : index === 2 ? (
                    <>
                      <a
                        href={project.details}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#8121D0] to-[#B45CF0] text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-[#8121D0]/30 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                      >
                        <i className="ri-eye-line mr-2"></i>
                        View Details
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#331C52]/50 text-[#8121D0] py-2 px-4 rounded-lg font-medium hover:bg-[#8121D0] hover:text-white transition-all duration-300 border border-[#8121D0]/20 whitespace-nowrap cursor-pointer text-center"
                      >
                        <i className="ri-code-line mr-2"></i>
                        Code
                      </a>
                    </>
                  ) : index === 3 ? (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#8121D0] to-[#B45CF0] text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-[#8121D0]/30 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                      >
                        <i className="ri-eye-line mr-2"></i>
                        View Details
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#331C52]/50 text-[#8121D0] py-2 px-4 rounded-lg font-medium hover:bg-[#8121D0] hover:text-white transition-all duration-300 border border-[#8121D0]/20 whitespace-nowrap cursor-pointer text-center"
                      >
                        <i className="ri-code-line mr-2"></i>
                        Code
                      </a>
                    </>
                  ) : (
                    <>
                      <button className="flex-1 bg-gradient-to-r from-[#8121D0] to-[#B45CF0] text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-[#8121D0]/30 transition-all duration-300 whitespace-nowrap cursor-pointer">
                        <i className="ri-eye-line mr-2"></i>
                        View Details
                      </button>
                      <button className="bg-[#331C52]/50 text-[#8121D0] py-2 px-4 rounded-lg font-medium hover:bg-[#8121D0] hover:text-white transition-all duration-300 border border-[#8121D0]/20 whitespace-nowrap cursor-pointer">
                        <i className="ri-code-line mr-2"></i>
                        Code
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a
            href="https://www.github.com/krithik17-kk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#331C52] to-[#291C3A] text-white border-2 border-[#8121D0] px-8 py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#8121D0] hover:to-[#B45CF0] hover:border-transparent transition-all duration-300 whitespace-nowrap cursor-pointer inline-block"
          >
            <i className="ri-github-line mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
