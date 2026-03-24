import { about } from '../data/about'

// Fixed 24×24 circle; standard logos centered via flex (no absolute + % hacks)
const LOGO_CIRCLE =
  'relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-navy/[0.1]'

function AboutTagPill({ label, logo, logoOnDark, logoVariant, compact }) {
  const base = import.meta.env.BASE_URL
  const emblemOnly = logoVariant === 'emblemOnly'

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-lavender/15 text-navy rounded-full border border-lavender/30 max-w-full ${
        compact ? 'text-xs sm:text-sm' : 'text-sm'
      }`}
    >
      {logo && (
        <span className={`${LOGO_CIRCLE} ${logoOnDark ? '!bg-navy ring-navy/30' : ''}`}>
          {emblemOnly ? (
            <img
              src={`${base}${logo}`}
              alt=""
              className="relative z-10 h-full w-full object-contain p-0.5"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <img
              src={`${base}${logo}`}
              alt=""
              className="relative z-10 block max-h-[1.2rem] max-w-[1.35rem] h-auto w-auto object-contain object-center"
              loading="lazy"
              decoding="async"
            />
          )}
        </span>
      )}
      <span className="min-w-0 self-center leading-normal">{label}</span>
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">About</p>
      <h2 className="section-heading mb-10">
        What Shapes My Work<span className="accent-dot" />
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="space-y-5">
          {about.bio.map((paragraph, i) => (
            <p key={i} className="text-navy/75 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Decorative cultural motif card */}
        <div className="relative">
          {/* Geometric background pattern (Japanese-inspired grid + Indian dot motif) */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#C4B5F4" strokeWidth="0.5" />
                </pattern>
                <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="12" cy="12" r="1.5" fill="#A8D4E6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative bg-white/50 border border-lavender/20 rounded-2xl p-8 backdrop-blur-sm">
            <p className="font-japanese text-xl md:text-2xl text-navy leading-snug mb-6">
              {about.aboutCard.headlineJa}
            </p>
            <div className="flex flex-wrap gap-3">
              {about.aboutCard.backgroundTags.map((tag) => (
                <AboutTagPill
                  key={tag.label}
                  label={tag.label}
                  logo={tag.logo}
                  logoOnDark={tag.logoOnDark}
                  logoVariant={tag.logoVariant}
                />
              ))}
            </div>
            <p className="text-xs font-medium tracking-widest uppercase text-lavender-dark mt-8 pt-6 border-t border-lavender/15 mb-3">
              Affiliations
            </p>
            <div className="flex flex-wrap gap-3">
              {about.aboutCard.affiliations.map((tag) => (
                <AboutTagPill
                  key={tag.label}
                  label={tag.label}
                  logo={tag.logo}
                  logoOnDark={tag.logoOnDark}
                  logoVariant={tag.logoVariant}
                  compact
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
