"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import { useEffect, useState } from "react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.9
      setIsVisible(window.scrollY > scrollThreshold)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, necesito orientación legal urgente. ¿Pueden ayudarme?")
    window.open(`https://wa.me/50588888888?text=${message}`, "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+50588888888"
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[#0B1526]/95 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-serif font-bold text-lg">L</span>
              </div>
              <span className="hidden sm:inline text-[#F8FAFC] font-semibold">LexManagua</span>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <span className="hidden md:inline text-sm text-[#CBD5E1] mr-2">Urgencias 24/7</span>

              <Button
                size="sm"
                variant="outline"
                onClick={handlePhoneClick}
                className="hidden sm:flex bg-white/5 text-[#F8FAFC] border-white/20 hover:bg-white/10 backdrop-blur-md"
              >
                <Phone className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Llamar</span>
              </Button>

              <Button
                size="sm"
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
