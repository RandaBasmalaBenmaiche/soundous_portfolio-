import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'

const ProjectPage = () => {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-slate-900 mb-4">Project not found</h1>
          <Link to="/" className="text-dusty-blue hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[700px] mx-auto"
      >
        <Link
          to="/"
          className="inline-flex items-center text-slate-500 hover:text-slate-700 mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to portfolio
        </Link>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white text-slate-600 text-sm font-medium rounded-full border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          {project.title}
        </h1>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 space-y-8">
          <div>
            <span className="text-xs font-semibold text-dusty-lavender uppercase tracking-wide">Problem</span>
            <p className="text-slate-700 mt-2 text-lg leading-relaxed">{project.problem}</p>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <span className="text-xs font-semibold text-dusty-lavender uppercase tracking-wide">Approach</span>
            <p className="text-slate-700 mt-2 text-lg leading-relaxed">{project.approach}</p>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <span className="text-xs font-semibold text-dusty-lavender uppercase tracking-wide">Impact</span>
            <p className="text-slate-700 mt-2 text-lg leading-relaxed">{project.impact}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectPage
