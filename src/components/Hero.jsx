import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-[700px] text-center"
      >
        {/* Avatar Placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-dusty-blue to-dusty-lavender flex items-center justify-center text-white font-serif text-2xl font-semibold"
        >
          SC
        </motion.div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          {personalInfo.name}
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-6 font-medium">
          {personalInfo.title}
        </p>

        <p className="text-slate-600 leading-relaxed mb-8 max-w-[600px] mx-auto">
          {personalInfo.bio}
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-slate-600 hover:text-dusty-blue transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">Email</span>
          </a>
          <a
            href="https://linkedin.com/in/soundous-chemam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-dusty-blue transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>

        <p className="mt-4 text-sm text-slate-500">{personalInfo.location}</p>
      </motion.div>
    </section>
  )
}

export default Hero
