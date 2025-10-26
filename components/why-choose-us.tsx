"use client"

import { Award, Clock, Shield, FileText, TrendingUp, Scale } from "lucide-react"
import { useEffect, useRef } from "react"

const reasons = [
  {
    icon: Award,
    title: "Experiencia local",
    description:
      "Más de una década de experiencia en los tribunales de Managua, brindando asesoría sólida y confiable.",
  },
  {
    icon: Clock,
    title: "Atención inmediata",
    description: "Comunicación directa por WhatsApp. Atención rápida, sin esperas ni intermediarios.",
  },
  {
    icon: Shield,
    title: "Confidencialidad total",
    description: "Tu caso se trata con total discreción y profesionalismo desde el primer contacto.",
  },
  {
    icon: FileText,
    title: "Honorarios claros",
    description: "Tarifas transparentes y justas, acordadas por etapas, sin cargos ocultos.",
  },
  {
    icon: TrendingUp,
    title: "Resultados comprobados",
    description: "Más de 1200 clientes respaldan nuestra trayectoria de resultados positivos.",
  },
]

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.2 }, // Better threshold for mobile
    )

    if (sectionRef.current) {
      const children = sectionRef.current.querySelectorAll(".fade-up-element")
      children.forEach((child, index) => {
        setTimeout(() => observer.observe(child), index * 100)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container px-4 md:px-8 relative z-10 max-w-[1200px] mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h2 className="fade-up-element font-serif text-3xl font-bold text-[#0B1526] md:text-[46px] lg:text-[52px] leading-tight text-balance mb-4">
            Tu tranquilidad legal empieza aquí
          </h2>
          <div
            className="flex justify-center items-center gap-3 mt-6 animate-fade-up"
            style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
          >
            <div className="h-[3px] w-0 bg-[#BFA058] rounded-full animate-[expandWidth_0.7s_ease-out_0.6s_forwards]" />
            <Scale
              className="w-5 h-5 text-[#BFA058] opacity-0 animate-[fadeIn_0.5s_ease-out_0.8s_forwards]"
              strokeWidth={1.5}
            />
            <div className="h-[3px] w-0 bg-[#BFA058] rounded-full animate-[expandWidth_0.7s_ease-out_0.6s_forwards]" />
          </div>
        </div>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="fade-up-element group text-center transition-all duration-300 hover:-translate-y-1.5 rounded-2xl p-6 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:border hover:border-[#BFA058]/25"
              >
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[#BFA058]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#BFA058]/25 group-hover:shadow-[0_4px_16px_rgba(191,160,88,0.25)] group-hover:scale-110">
                      <Icon
                        className="w-7 h-7 text-[#BFA058] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:text-[#c9a861]"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold text-[#0B1526] font-sans transition-colors duration-200 group-hover:text-[#BFA058]">
                    {reason.title}
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-[#475569] leading-relaxed max-w-sm mx-auto">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
