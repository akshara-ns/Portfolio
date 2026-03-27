import { timeline } from '../data/timeline'

// Render order: groups (education + concurrent TA work) and standalone work entries
const RENDER_PLAN = [
  { type: 'group',      educationId: 2, workIds: [10, 9, 8, 5, 7] }, // B.E. Shibaura + MMC/SNS/TA Calculus/Hanoi/SIT
  { type: 'standalone', id: 4 },                            // Venture Fellow (standalone)
  { type: 'group',      educationId: 1, workIds: [6, 3] }, // M.S. CMU + TA DS/DL
]

// Curly brace — point faces LEFT (toward education), opening faces RIGHT (toward work cards)
// preserveAspectRatio="none" lets it stretch vertically to match any number of work items
function CurlyBrace({ className }) {
  return (
    <svg
      viewBox="0 0 16 100"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3 Q4 3 4 12 L4 46 Q3 50 0 50 Q3 50 4 54 L4 88 Q4 97 14 97" />
    </svg>
  )
}

function BulletList({ bullets, description }) {
  if (Array.isArray(bullets)) {
    return (
      <ul className="text-sm text-navy/60 leading-relaxed space-y-1 list-none">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    )
  }
  return <p className="text-sm text-navy/60 leading-relaxed">{description}</p>
}

function EducationCard({ entry }) {
  return (
    <div className="bg-white/60 border border-lavender/30 rounded-2xl p-6 hover:border-lavender/50 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
        <span className="text-xs px-2 py-0.5 rounded-full bg-lavender/20 text-navy/60">Education</span>
        <span className="text-xs text-navy/40">{entry.period}</span>
      </div>
      <h3 className="font-medium text-navy mb-0.5">{entry.title}</h3>
      {entry.subtitle && <p className="text-xs text-navy/40 mb-1">{entry.subtitle}</p>}
      <p className="text-sm text-lavender-deeper mb-3">{entry.organization} · {entry.location}</p>
      <BulletList bullets={entry.bullets} description={entry.description} />
    </div>
  )
}

function WorkCard({ entry }) {
  return (
    <div className="bg-white/60 border border-sky/20 rounded-2xl p-6 hover:border-sky/40 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
        <span className="text-xs px-2 py-0.5 rounded-full bg-sky/20 text-navy/60">Work</span>
        <span className="text-xs text-navy/40">{entry.period}</span>
      </div>
      <h3 className="font-medium text-navy mb-0.5">{entry.title}</h3>
      {entry.subtitle && <p className="text-xs text-navy/40 mb-1">{entry.subtitle}</p>}
      <p className="text-sm text-lavender-deeper mb-3">{entry.organization} · {entry.location}</p>
      <BulletList bullets={entry.bullets} description={entry.description} />
    </div>
  )
}

export default function Timeline() {
  const byId = Object.fromEntries(timeline.map(e => [e.id, e]))

  return (
    <section id="timeline" className="py-24 px-6 max-w-4xl mx-auto">
      <p className="section-subheading">Experience</p>
      <h2 className="section-heading mb-12">
        My journey<span className="accent-dot" />
      </h2>

      <div className="relative">
        {/* Center vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-lavender/30 -translate-x-1/2" />
        {/* Mobile: left line */}
        <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-lavender/30" />

        <div className="space-y-8">
          {RENDER_PLAN.map((item, i) => {
            if (item.type === 'group') {
              const edu = byId[item.educationId]
              const work = item.workIds.map(id => byId[id]).filter(Boolean)
              return (
                <div key={i} className="relative">
                  {/* Dot — left on mobile, center on desktop */}
                  <div className="absolute top-6 left-3 md:left-1/2 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-lavender border-2 border-background z-10" />

                  {/* Mobile: single column */}
                  <div className="md:hidden space-y-4 pl-10">
                    <EducationCard entry={edu} />
                    {work.map(e => <WorkCard key={e.id} entry={e} />)}
                  </div>

                  {/* Desktop: two-column */}
                  <div className="hidden md:flex items-center">
                    {/* Left — education, vertically centered to curly brace point */}
                    <div className="w-1/2 pr-8">
                      <EducationCard entry={edu} />
                    </div>

                    {/* Right — curly bracket right at center line, then work cards */}
                    <div className="w-1/2 pl-2 flex gap-4 items-stretch">
                      {/* Curly brace: point faces left toward education bubble */}
                      <div className="self-stretch flex flex-col w-5 flex-shrink-0">
                        <CurlyBrace className="flex-1 w-full text-sky/40" />
                      </div>
                      <div className="flex-1 space-y-4">
                        {work.map(e => <WorkCard key={e.id} entry={e} />)}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            // Standalone work entry (right side only)
            const entry = byId[item.id]
            return (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="absolute top-6 left-3 md:left-1/2 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-sky border-2 border-background z-10" />

                {/* Mobile */}
                <div className="md:hidden pl-10">
                  <WorkCard entry={entry} />
                </div>

                {/* Desktop: right column only */}
                <div className="hidden md:flex items-start">
                  <div className="w-1/2 pr-8" /> {/* empty left */}
                  <div className="w-1/2 pl-8">
                    <WorkCard entry={entry} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
