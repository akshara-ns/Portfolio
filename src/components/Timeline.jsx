import { timeline } from '../data/timeline'

const typeStyles = {
  education: { dot: 'bg-lavender',      tag: 'bg-lavender',      label: 'Education' },
  work:       { dot: 'bg-sky',           tag: 'bg-sky',           label: 'Work'      },
  research:   { dot: 'bg-lavender-dark', tag: 'bg-lavender-dark', label: 'Research'  },
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 max-w-3xl mx-auto">
      <p className="section-subheading">Experience</p>
      <h2 className="section-heading mb-12">
        My journey<span className="accent-dot" />
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-lavender/30" />

        <div className="space-y-6">
          {timeline.map((entry) => {
            const style = typeStyles[entry.type] || typeStyles.work

            return (
              <div key={entry.id} className="relative pl-10">
                {/* Dot */}
                <div className={`absolute left-3 top-5 w-2.5 h-2.5 -translate-x-1/2 rounded-full ${style.dot} border-2 border-background z-10`} />

                {/* Card */}
                <div className="bg-white/60 border border-lavender/20 rounded-2xl p-6 hover:border-lavender/40 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${style.tag}/20 text-navy/60`}>
                      {style.label}
                    </span>
                    <span className="text-xs text-navy/40">{entry.period}</span>
                  </div>
                  <h3 className="font-medium text-navy mb-0.5">{entry.title}</h3>
                  {entry.subtitle && (
                    <p className="text-xs text-navy/40 mb-1">{entry.subtitle}</p>
                  )}
                  <p className="text-sm text-lavender-deeper mb-3">
                    {entry.organization} · {entry.location}
                  </p>
                  {Array.isArray(entry.bullets) ? (
                    <ul className="text-sm text-navy/60 leading-relaxed space-y-1 list-none">
                      {entry.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-navy/60 leading-relaxed">{entry.description}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
