import { motion } from 'framer-motion'
import { researchExperience } from '../data/portfolioData'

const ResearchExperience = () => {
  return (
    <section id="research" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[900px] mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Research Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-300" />

          <div className="space-y-12">
            {researchExperience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -ml-1.5 mt-6 rounded-full bg-dusty-blue ring-4 ring-white" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                    <span className="inline-block px-3 py-1 bg-dusty-lavender/10 text-dusty-lavender text-xs font-medium rounded-full mb-3">
                      {exp.dates}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-slate-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4">
                      {exp.institution}
                    </p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                      {exp.contributions.map((contribution, i) => (
                        <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                          {index % 2 !== 0 && <span className="text-dusty-blue mt-1">•</span>}
                          <span>{contribution}</span>
                          {index % 2 === 0 && <span className="text-dusty-blue mt-1 flex-shrink-0">•</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ResearchExperience
