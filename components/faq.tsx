"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useRef, useState } from "react"

const faqs = [
  {
    question: "¿Atienden consultas por WhatsApp?",
    answer:
      "Sí, brindamos atención directa por WhatsApp. Puedes enviarnos tu caso y obtendrás una respuesta rápida y personalizada.",
  },
  {
    question: "¿Cuánto cuesta la consulta?",
    answer:
      "La primera orientación legal por WhatsApp es gratuita. Si el caso requiere revisión de documentos, te informamos el costo antes de proceder.",
  },
  {
    question: "¿Atienden urgencias legales?",
    answer:
      'Sí, atendemos casos urgentes todos los días. Solo envía la palabra "URGENTE" por WhatsApp y te daremos prioridad.',
  },
  {
    question: "¿Puedo pagar por etapas?",
    answer:
      "Sí, ofrecemos planes de pago por fases según la complejidad de tu caso y tus posibilidades. Todo con transparencia y claridad.",
  },
]

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      const children = sectionRef.current.querySelectorAll(".fade-up-element")
      children.forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F9FAFB] relative overflow-hidden"
    >
      <div className="container px-4 max-w-[1200px] mx-auto">
        <div className="mx-auto max-w-[850px] text-center mb-16">
          <h2
            className={`fade-up-element font-serif text-3xl font-bold text-[#0B1526] md:text-[46px] lg:text-[50px] text-balance mb-4 ${!hasAnimated ? "opacity-0" : ""} [animation-delay:200ms]`}
          >
            Preguntas frecuentes
          </h2>
          <div
            className={`fade-up-element mx-auto h-[3px] w-0 bg-[#BFA058] rounded-full animate-expand-line ${!hasAnimated ? "opacity-0" : ""} [animation-delay:400ms]`}
          />
        </div>

        <div className="max-w-[850px] mx-auto space-y-6">
          <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`
                  fade-up-element
                  ${!hasAnimated ? "opacity-0" : ""}
                  border-0 rounded-2xl bg-white 
                  shadow-[0_4px_16px_rgba(0,0,0,0.05)]
                  transition-all duration-300 ease-out
                  hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                  hover:-translate-y-1
                  hover:border hover:border-[#BFA05820]
                  focus-within:shadow-[0_0_0_2px_rgba(191,160,88,0.3)]
                  ${openItem === `item-${index}` ? "shadow-[0_10px_28px_rgba(0,0,0,0.08)]" : ""}
                `}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <AccordionTrigger
                  className={`
                    text-left text-lg md:text-xl font-semibold 
                    px-6 py-5 md:px-8 md:py-6
                    transition-all duration-300
                    hover:bg-[#FFFDF9]
                    hover:no-underline
                    [&[data-state=open]]:text-[#BFA058]
                    [&[data-state=closed]]:text-[#0B1526]
                    [&>svg]:text-[#BFA058]
                    [&>svg]:transition-transform
                    [&>svg]:duration-300
                    [&>svg]:w-5
                    [&>svg]:h-5
                    [&>svg]:md:w-6
                    [&>svg]:md:h-6
                  `}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="
                    text-[#475569] 
                    leading-[1.7] 
                    px-6 md:px-8 
                    pb-5 md:pb-6
                    pt-0
                    border-t-2 border-[#BFA05820]
                  "
                >
                  <div className="pt-4">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
