import { motion } from 'framer-motion'
import { awards } from '../data/portfolioData'

const Awards = () => {
  return (
    <section id="awards" className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[900px] mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Awards & Distinctions
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-[500px] mx-auto">
          Recognition for academic excellence and innovation
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-dusty-blue to-dusty-lavender flex items-center justify-center text-white font-semibold text-sm">
                {award.year}
              </div>
              <p className="text-slate-700 font-medium pt-1">
                {award.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Awards
