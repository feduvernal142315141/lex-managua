"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "María J.",
    location: "Managua",
    text: "Excelente atención, resolvieron mi caso laboral rápido y sin complicaciones.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    location: "Ciudad Sandino",
    text: "Honestos y profesionales. Muy recomendado.",
    rating: 5,
  },
  {
    name: "Lucía M.",
    location: "Ticuantepe",
    text: "La comunicación fue clara y constante, me dieron mucha confianza.",
    rating: 5,
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsTransitioning(false)
      }, 400)
    }, 7000) // 7 seconds for better readability

    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsTransitioning(false)
      }, 400)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] overflow-hidden"
    >
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2
            className={`font-serif text-3xl font-bold text-[#0B1526] md:text-4xl lg:text-5xl text-balance mb-6 transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            Clientes que confiaron en nosotros
          </h2>
          <div className="flex justify-center">
            <div
              className={`h-[3px] bg-[#BFA058] rounded-full transition-all duration-800 delay-300 ${
                isVisible ? "w-16" : "w-0"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[320px] md:min-h-[280px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-800 ${
                  index === currentIndex && !isTransitioning
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
              >
                <Card
                  className={`border border-[#E5E7EB] bg-white rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 ${
                    index === currentIndex ? "animate-gold-pulse" : ""
                  }`}
                >
                  <CardContent className="p-8 md:p-10 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 fill-[#BFA058] text-[#BFA058] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_4px_rgba(191,160,88,0.7)] ${
                            isVisible && index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-50"
                          }`}
                          style={{
                            transitionDelay: `${i * 100 + 400}ms`,
                            transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                          }}
                        />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-[#0B1526] mb-6 leading-relaxed italic font-light transition-colors duration-200 hover:text-[#1E293B]">
                      {`"${testimonial.text}"`}
                    </p>

                    <div className="text-sm md:text-base">
                      <p className="font-semibold text-[#0B1526] mb-1">{testimonial.name}</p>
                      <p className="text-[#64748B]">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#BFA058] w-8 shadow-[0_0_8px_rgba(191,160,88,0.4)]"
                    : "bg-[#CBD5E1] w-2 hover:bg-[#BFA058]/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
