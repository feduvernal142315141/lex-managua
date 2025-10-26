"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useEffect, useRef } from "react"

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

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

    if (sectionRef.current) {
      const children = sectionRef.current.querySelectorAll(".fade-in-element")
      children.forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, necesito atención inmediata para mi caso legal.")
    window.open(`https://wa.me/50588888888?text=${message}`, "_blank")
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/abstract-legal-pattern.png')] bg-cover bg-center" />
      </div>

      <div className="container px-4 md:px-8 relative z-10 max-w-[1200px] mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="fade-in-element font-serif text-3xl font-bold md:text-4xl lg:text-5xl text-balance mb-6">
            Tu caso merece atención inmediata
          </h2>

          <p className="fade-in-element text-lg md:text-xl text-white/90 leading-relaxed mb-10 text-balance">
            No esperes más, cada día cuenta en un proceso legal. Escríbenos por WhatsApp y recibe orientación sin costo.
          </p>

          <div className="fade-in-element">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 text-base px-8 py-6 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar ahora por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
