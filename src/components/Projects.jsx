import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/portfolioData'

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[900px] mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Projects
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-[500px] mx-auto">
          Detailed case studies of my work in AI and software development
        </p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/projects/${project.slug}`}>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-dusty-blue/30 hover:shadow-lg transition-all duration-300">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white text-slate-600 text-xs font-medium rounded-full border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-slate-900 mb-3 group-hover:text-dusty-blue transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Problem</span>
                      <p className="text-slate-700 mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Approach</span>
                      <p className="text-slate-700 mt-1">{project.approach}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Impact</span>
                      <p className="text-slate-700 mt-1">{project.impact}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center text-dusty-blue font-medium text-sm">
                    <span>Read case study</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
