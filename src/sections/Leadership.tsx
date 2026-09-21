import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LeadershipPhoto } from '@/components/ui/LeadershipPhoto'
import { LinkedinIcon } from '@/components/ui/SocialIcons'
import { Reveal } from '@/components/ui/Reveal'
import { BigType } from '@/components/ui/BigType'
import { leadershipTeam } from '@/data/leadership'

export function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-ivory-soft py-24 sm:py-32">
      <BigType text="TEAM" className="bottom-0 text-charcoal/[0.06]" parallax={40} />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-royal/10 blur-[130px]" />

      <Container className="relative">
        <SectionHeading eyebrow="Leadership" title="Meet our leadership" subtitle="The people behind EverfinePrinters." />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
          {leadershipTeam.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.12}>
              <div className="group">
                <LeadershipPhoto src={member.photoSrc} name={member.name} />
                <div className="mt-6 text-center">
                  <h3 className="font-display text-2xl font-medium text-charcoal">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-royal">{member.role}</p>
                  <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-charcoal/55">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/50 transition-colors hover:border-royal hover:text-royal"
                    >
                      <LinkedinIcon className="h-[15px] w-[15px]" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
