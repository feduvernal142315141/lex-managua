"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function LawyerProfile() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola José, me gustaría hablar contigo sobre mi caso.")
    window.open(`https://wa.me/50588888888?text=${message}`, "_blank")
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-white to-[#F9FAFB] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBCMTUyNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] animate-slow-pan" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2
            className={`font-serif text-3xl font-bold text-[#0B1526] md:text-4xl lg:text-5xl text-balance transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Conoce a tu abogado
          </h2>
          <div
            className={`mx-auto mt-4 h-[3px] bg-[#BFA058] transition-all duration-800 delay-300 ${
              isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div
              className={`transition-all duration-800 delay-100 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"
              }`}
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2 border-[#BFA058]/20 group hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-[#BFA058]/50 transition-all duration-300">
                <Image src="/professional-nicaraguan-lawyer-portrait-office.jpg" alt="José Díaz - Abogado" fill className="object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              <div
                className={`transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-96"
                }`}
              >
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#0B1526] mb-2">José Díaz</h3>
                <p
                  className={`text-[#BFA058] font-medium text-lg tracking-wide transition-all duration-700 delay-300 ${
                    isVisible ? "opacity-100 tracking-wide" : "opacity-0 tracking-tight"
                  }`}
                >
                  Abogado y Notario
                </p>
              </div>

              <p
                className={`text-[#475569] leading-[1.7] text-base md:text-lg max-w-[500px] transition-all duration-600 delay-400 hover:text-[#334155] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                Soy José Díaz, abogado con más de 10 años de experiencia en litigio civil y penal en Managua. Mi
                compromiso es ofrecer soluciones legales prácticas, con lenguaje claro y un trato humano.
              </p>

              <div
                className={`transition-all duration-500 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="w-full md:w-auto rounded-full py-3 px-8 bg-[#25D366] text-white hover:bg-[#1DA857] shadow-[0_4px_10px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-250 animate-pulse-green"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hablar con José por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
