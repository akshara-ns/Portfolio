import { useState } from 'react'
import { projects } from '../data/projects'

const filters = ['all', 'research', 'academic', 'independent']

const typeColors = {
  research:    'bg-lavender-dark/10 text-lavender-deeper',
  academic:    'bg-sky/20 text-sky-700',
  independent: 'bg-lavender/20 text-lavender-dark',
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.type === active)

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">Projects</p>
      <h2 className="section-heading mb-6">
        Things I've built<span className="accent-dot" />
      </h2>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1.5 rounded-full text-sm capitalize transition-colors ${
              active === f
                ? 'bg-navy text-background'
                : 'border border-navy/20 text-navy/50 hover:border-navy/40 hover:text-navy'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {filtered.map(project => (
          <div
            key={project.id}
            className="group bg-white/60 border border-lavender/20 rounded-2xl p-6 hover:border-lavender/50 hover:shadow-sm transition-all flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${typeColors[project.type]}`}>
                {project.type}
              </span>
              <span className="text-xs text-navy/30">{project.year}</span>
            </div>

            <h3 className="font-medium text-navy mb-0.5 group-hover:text-lavender-dark transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs text-lavender-deeper mb-2">{project.subtitle}</p>
            )}
            <p className="text-sm text-navy/60 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-background border border-navy/10 text-navy/50 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-navy/50 hover:text-navy transition-colors flex items-center gap-1"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-lavender-dark hover:text-lavender transition-colors"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
