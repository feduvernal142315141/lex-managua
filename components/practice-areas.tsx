"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Briefcase, Shield, Users, Building2, Plane, MessageCircle } from "lucide-react"
import { useEffect, useRef } from "react"

const areas = [
  {
    icon: Scale,
    title: "Derecho Civil",
    description: "Resolución de conflictos, contratos, cobros judiciales y desalojos.",
  },
  {
    icon: Briefcase,
    title: "Laboral",
    description: "Defendemos tus derechos laborales y asesoramos empresas con soluciones justas.",
  },
  {
    icon: Shield,
    title: "Penal",
    description: "Asistencia integral en procesos penales, denuncias y defensa ante tribunales.",
  },
  {
    icon: Users,
    title: "Familia",
    description: "Mediamos en divorcios, custodia, pensión y acuerdos familiares sensibles.",
  },
  {
    icon: Building2,
    title: "Mercantil",
    description: "Apoyamos a tu empresa en constitución, contratos y litigios comerciales.",
  },
  {
    icon: Plane,
    title: "Migratorio",
    description: "Tramitamos residencias, permisos laborales y legalización de documentos.",
  },
]

export function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".practice-card")
      cards.forEach((card, index) => {
        // Stagger animation by 100ms per card
        setTimeout(() => observer.observe(card), index * 100)
      })
    }

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppClick = (area: string) => {
    const message = encodeURIComponent(`Hola, necesito asesoría en el área de ${area}. ¿Podemos conversar?`)
    window.open(`https://wa.me/50588888888?text=${message}`, "_blank")
  }

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-[#F9FAFB] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFA058]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFA058]/20 to-transparent" />

      <div className="container relative px-8 md:px-10 max-w-[1200px] mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h2 className="font-serif text-[30px] md:text-[44px] lg:text-[52px] font-bold text-[#0B1526] mb-4 leading-tight animate-fade-up">
            Especialidades legales
          </h2>
          <div className="flex items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#BFA058]" />
            <div className="h-1 w-16 bg-[#BFA058] rounded-full" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#BFA058]" />
          </div>
          <p
            className="mt-6 text-[#4B5563] text-base md:text-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Áreas de práctica en las que te representamos con excelencia
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10 justify-items-center">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="practice-card group relative w-full bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#BFA058]/30 opacity-0 min-h-[260px] flex flex-col"
              style={{
                boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#BFA058]/0 via-transparent to-[#BFA058]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              <CardContent className="relative p-6 md:p-8 flex flex-col flex-1">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#BFA058]/10 text-[#BFA058] transition-all duration-300 group-hover:scale-110 group-hover:rotate-2">
                  <area.icon className="h-7 w-7 stroke-[1.5]" />
                </div>

                <h3 className="mb-3 font-serif text-[20px] md:text-[22px] font-semibold text-[#0B1526] leading-tight">
                  {area.title}
                </h3>

                <p className="mb-6 text-[#4B5563] text-[16px] md:text-[17px] leading-relaxed flex-1">
                  {area.description}
                </p>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleWhatsAppClick(area.title)}
                  className="relative text-[#BFA058] hover:text-[#A68C48] hover:bg-[#BFA058]/5 p-0 h-auto font-semibold text-[15px] self-start group/btn"
                >
                  <MessageCircle className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                  <span className="relative">
                    Consultar este caso
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[#BFA058] transition-all duration-300 group-hover/btn:w-full" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
