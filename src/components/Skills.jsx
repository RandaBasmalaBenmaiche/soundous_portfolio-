import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[900px] mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Skills & Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-slate-200"
            >
              <h3 className="font-serif text-lg font-semibold text-slate-900 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm rounded-lg border border-slate-200 hover:border-dusty-blue/30 hover:bg-dusty-blue/5 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
