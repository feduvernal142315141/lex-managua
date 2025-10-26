"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Scale, FileCheck, UserCheck, Briefcase } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Contáctanos por WhatsApp",
    description: "Cuéntanos brevemente tu situación y te responderemos en minutos.",
  },
  {
    number: "2",
    icon: UserCheck,
    title: "Evaluación inicial",
    description: "Analizamos tu caso y te brindamos una orientación legal gratuita.",
  },
  {
    number: "3",
    icon: FileCheck,
    title: "Propuesta de solución",
    description: "Diseñamos una estrategia legal clara y adaptada a tus necesidades.",
  },
  {
    number: "4",
    icon: Briefcase,
    title: "Representación y seguimiento",
    description: "Ejecutamos la estrategia y te mantenemos informado en cada etapa.",
  },
]

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      setLineHeight(100)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")

            if (entry.target === sectionRef.current) {
              setTimeout(() => {
                let progress = 0
                const interval = setInterval(() => {
                  progress += 2
                  setLineHeight(progress)
                  if (progress >= 100) {
                    clearInterval(interval)
                  }
                }, 20)
              }, 300)
            }
          }
        })
      },
      { threshold: 0.2 }, // Increased threshold for better mobile experience
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)

      const children = sectionRef.current.querySelectorAll(".fade-up-element")
      children.forEach((child, index) => {
        setTimeout(() => observer.observe(child), index * 200)
      })
    }

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, quiero comenzar el proceso de asesoría legal.")
    window.open(`https://wa.me/50588888888?text=${message}`, "_blank")
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-white to-[#F9FAFB] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23BFA058' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container px-5 md:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h2 className="fade-up-element font-serif text-[30px] font-bold text-[#0B1526] md:text-[44px] lg:text-[50px] leading-tight text-balance mb-4">
            Proceso de atención
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

        <div className="max-w-[700px] mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-10 top-0 bottom-20 w-[2px] bg-[#BFA058]/20 overflow-hidden">
              <div
                ref={lineRef}
                className="w-full bg-gradient-to-b from-[#BFA058] to-[#BFA058]/60 transition-all duration-1000 ease-in-out shadow-[0_0_10px_rgba(191,160,88,0.3)]"
                style={{ height: `${lineHeight}%` }}
              />
            </div>

            <div className="space-y-10 md:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="fade-up-element relative flex gap-6 md:gap-8 group">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#BFA058] flex items-center justify-center shadow-[0_4px_12px_rgba(191,160,88,0.25)] transition-all duration-300 group-hover:shadow-[0_6px_20px_rgba(191,160,88,0.4)] group-hover:scale-105 group-hover:bg-[#CBAF63] animate-[popIn_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)]">
                        <div className="text-center">
                          <div className="text-white font-bold text-xl md:text-2xl leading-none mb-0.5">
                            {step.number}
                          </div>
                          <Icon
                            className="w-4 h-4 md:w-5 md:h-5 text-white/90 mx-auto transition-transform duration-300 group-hover:scale-110"
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 pt-2 md:pt-3 bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] group-hover:-translate-y-1.5">
                      <h3 className="mb-2 text-base md:text-xl font-semibold text-[#0B1526] font-sans transition-colors duration-200 group-hover:text-[#BFA058]">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-[17px] text-[#475569] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="fade-up-element mt-12 md:mt-16 text-center">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20B857] shadow-[0_4px_16px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-[1.03] rounded-full py-5 md:py-6 px-6 md:px-8 text-sm md:text-lg font-semibold animate-[subtlePulse_12s_ease-in-out_infinite]"
            >
              <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="text-balance">Inicia tu consulta ahora por WhatsApp</span>
            </Button>
            <p className="mt-4 text-xs md:text-sm text-[#475569]">Respuesta en menos de 10 minutos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
