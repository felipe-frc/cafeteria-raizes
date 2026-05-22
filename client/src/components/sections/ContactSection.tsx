import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const contactItems = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua das Flores, 123 - Centro, Patrocínio - MG",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(34) 3821-2000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@cafeteriaraizes.com.br",
  },
  {
    icon: Clock,
    label: "Horários",
    value: "Seg-Sex: 7h-19h | Sab: 8h-18h | Dom: 9h-17h",
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <SectionTitle eyebrow="Visite-nos" title="Nos Encontre" />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            {contactItems.map((item) => (
              <div key={item.label} className="group flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-600/20 transition-all group-hover:bg-amber-600/40">
                  <item.icon className="h-6 w-6 text-amber-600" />
                </div>

                <div>
                  <p className="mb-1 text-sm font-light uppercase tracking-wider text-white/60">
                    {item.label}
                  </p>
                  <p className="text-lg font-light text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-96 overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552737.0817473176!2d-47.094663697587215!3d-19.00589641062706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94afba88e5ce6e53%3A0x6131553223c88567!2sPatroc%C3%ADnio%20-%20MG%2C%2038740-000!5e0!3m2!1spt-BR!2sbr!4v1776968163894!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Patrocínio MG"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
