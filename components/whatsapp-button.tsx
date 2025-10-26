"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleClick = () => {
    const message = encodeURIComponent("Hola, necesito asesoría legal. ¿Pueden ayudarme?")
    window.open(`https://wa.me/50588888888?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 animate-pulse" />
    </button>
  )
}
