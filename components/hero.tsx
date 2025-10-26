"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Award, Star, Briefcase } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      const children = heroRef.current.querySelectorAll(".fade-in-element")
      children.forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, necesito orientación legal sobre [tu caso]. ¿Podemos hablar ahora?")
    window.open(`https://wa.me/50588888888?text=${message}`, "_blank")
  }

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1526] via-[#0F172A] to-[#0B1526]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,21,38,0.4)_100%)]" />

      <div className="absolute inset-0 opacity-[0.12]" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="absolute inset-0 bg-[url('/abstract-legal-pattern-scales-justice.jpg')] bg-cover bg-center" />
      </div>

      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]" />

      <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="fade-in-element mb-6 inline-flex items-center gap-2 text-sm text-[#CBD5E1] font-medium [animation-delay:0ms]">
            <span>Abogados en Managua</span>
            <span className="text-accent">·</span>
            <span>Respuesta en &lt; 10 min</span>
          </div>

          <h1 className="fade-in-element font-serif text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.2] text-[#F8FAFC] text-balance [animation-delay:80ms]">
            Resuelve tu caso con un abogado de confianza en Managua
          </h1>

          <p className="fade-in-element mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-[1.7] text-[#CBD5E1] text-balance [animation-delay:160ms]">
            Civil, laboral, penal y mercantil. Orientación inmediata y estrategia por etapas, con honorarios
            transparentes.
          </p>

          <div className="fade-in-element mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center [animation-delay:240ms]">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="group relative overflow-hidden bg-[#25D366] text-white hover:bg-[#20BD5A] text-base px-8 py-6 shadow-lg hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-[1.02] animate-pulse-subtle"
            >
              <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-[-2px]" />
              Hablar por WhatsApp ahora
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 text-[#F8FAFC] border-white/20 hover:bg-white/10 backdrop-blur-md text-base px-8 py-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-[2px]" />
              Agendar cita presencial
            </Button>
          </div>

          <p className="fade-in-element mt-6 text-sm text-[#CBD5E1] flex flex-wrap items-center justify-center gap-3 [animation-delay:320ms]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              Evaluación inicial sin costo
            </span>
            <span className="text-accent">·</span>
            <span>Confidencialidad total</span>
          </p>

          <div className="fade-in-element mt-12 flex flex-wrap items-center justify-center gap-4 [animation-delay:400ms]">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-[#F8FAFC]">+10 años</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-[#F8FAFC]">4.9★ Opiniones</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
              <Briefcase className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-[#F8FAFC]">+1200 casos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 drop-shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  )
}
