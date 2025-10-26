import { Scale } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-8 w-8 text-secondary" />
              <span className="font-serif text-2xl font-bold">LexManagua</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Protegiendo tus derechos con experiencia y dedicación.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#inicio" className="hover:text-secondary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-secondary transition-colors">
                  Áreas
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-secondary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-secondary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-secondary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Edificio Ofiplaza El Retiro</li>
              <li>Managua, Nicaragua</li>
              <li className="pt-2">
                <strong className="text-white">Horario:</strong>
              </li>
              <li>Lunes a Viernes</li>
              <li>8:00 AM – 6:00 PM</li>
              <li>Sábados 9:00 AM – 12:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              La información de este sitio no constituye asesoría legal formal. Contáctenos para una consulta
              personalizada.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} LexManagua. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
