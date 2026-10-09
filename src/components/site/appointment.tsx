"use client";

import { useId, useRef, useState } from "react";
import { IconArrowLeft, IconArrowRight, IconArrowUpRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { services, serviceName, siteConfig, whatsappHref } from "@/site.config";

const options = [...services.map(serviceName), "Necesito orientación"];
const days = ["lunes", "martes", "miércoles", "jueves", "viernes"];

// Asistente de cita sin servidor: dos pasos que componen el mensaje y abren
// WhatsApp. No guarda nada.
export function Appointment() {
  const id = useId();
  const [step, setStep] = useState<1 | 2>(1);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const firstOption = useRef<HTMLInputElement>(null);

  const trimmed = name.trim();
  const message = `${siteConfig.messages.appointment} Mi nombre es ${trimmed}. El trámite que necesito es: ${service.toLocaleLowerCase("es-MX")}.${day ? ` Mi día preferido es el ${day}.` : ""}`;

  function next() {
    if (!service) {
      setError("Elija un trámite para continuar.");
      firstOption.current?.focus();
      return;
    }
    setError("");
    setStep(2);
    requestAnimationFrame(() => nameRef.current?.focus());
  }

  return (
    <div className="s-marfil border border-[var(--rule)] p-6 sm:p-10">
      <div className="flex items-baseline justify-between gap-6">
        <h2 className="t-h3">
          {step === 1 ? "¿Qué trámite necesita?" : "¿A nombre de quién?"}
        </h2>
        <span className="font-serif text-[0.9375rem] text-[var(--muted)]" aria-live="polite">
          <span className="sr-only">Paso </span>0{step} / 02
        </span>
      </div>
      <div className="mt-4 h-px bg-[var(--rule)]" aria-hidden="true">
        <div className="h-px origin-left bg-laton transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" style={{ transform: `scaleX(${step / 2})` }} />
      </div>

      <div aria-live="assertive" className="min-h-0">
        {error && (
          <p role="alert" className="mt-5 border-l-2 border-[#9b2c1f] pl-3 text-[0.9375rem] text-[#7a2216]">
            {error}
          </p>
        )}
      </div>

      {step === 1 ? (
        <div key="paso-1" className="paso mt-6">
          <fieldset className="m-0 border-0 p-0">
            <legend className="sr-only">Trámite</legend>
            <div className="border-b border-[var(--rule)]">
              {options.map((o, i) => (
                <label key={o} className="choice">
                  <input
                    ref={i === 0 ? firstOption : undefined}
                    type="radio"
                    name={`${id}-tramite`}
                    value={o}
                    checked={service === o}
                    onChange={() => {
                      setService(o);
                      setError("");
                    }}
                  />
                  <span className="font-serif text-[1.25rem] leading-tight">{o}</span>
                  <IconArrowRight size={18} stroke={1.5} aria-hidden="true" className="shrink-0 opacity-60" />
                </label>
              ))}
            </div>
          </fieldset>
          <button type="button" className="btn btn-fwd btn-block mt-8" onClick={next}>
            <span className="btn-label">Continuar</span>
            <span className="btn-icon" aria-hidden="true">
              <IconArrowRight size={18} stroke={1.5} />
              <IconArrowRight size={18} stroke={1.5} />
            </span>
          </button>
        </div>
      ) : (
        <div key="paso-2" className="paso mt-6">
          <button
            type="button"
            className="link"
            onClick={() => {
              setStep(1);
              setError("");
            }}
          >
            <IconArrowLeft size={18} stroke={1.5} aria-hidden="true" />
            <span className="link-text">Cambiar trámite: {service}</span>
          </button>
          <label htmlFor={`${id}-nombre`} className="mt-6 block font-medium">
            Su nombre
          </label>
          <input
            id={`${id}-nombre`}
            ref={nameRef}
            className="field"
            value={name}
            maxLength={100}
            autoComplete="name"
            aria-invalid={!!error}
            aria-describedby={error ? undefined : `${id}-nota`}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
          />
          <fieldset className="m-0 mt-8 border-0 p-0">
            <legend className="font-medium">
              Día preferido <span className="font-normal text-[var(--muted)]">(opcional)</span>
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {["", ...days].map((d) => (
                <label key={d || "sin"} className="day">
                  <input type="radio" name={`${id}-dia`} value={d} checked={day === d} onChange={() => setDay(d)} />
                  <span>{d ? d.charAt(0).toUpperCase() + d.slice(1) : "Sin preferencia"}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="mt-8 border-l border-laton bg-piedra/60 px-5 py-4" aria-live="polite">
            <p className="t-small text-[var(--muted)]">Su mensaje</p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed">{trimmed ? message : "Escriba su nombre para preparar el mensaje."}</p>
          </div>
          {trimmed ? (
            <a className="btn btn-block mt-8" href={whatsappHref(message)} target="_blank" rel="noopener noreferrer" data-contact="whatsapp" data-origin="asistente">
              <span className="btn-label">
                <IconBrandWhatsapp size={20} stroke={1.5} aria-hidden="true" />
                Abrir WhatsApp
              </span>
              <span className="btn-icon" aria-hidden="true">
                <IconArrowUpRight size={18} stroke={1.5} />
                <IconArrowUpRight size={18} stroke={1.5} />
              </span>
              <span className="sr-only"> (abre WhatsApp)</span>
            </a>
          ) : (
            <button
              type="button"
              className="btn btn-block mt-8"
              onClick={() => {
                setError("Escriba su nombre para preparar el mensaje.");
                nameRef.current?.focus();
              }}
            >
              <span className="btn-label">
                <IconBrandWhatsapp size={20} stroke={1.5} aria-hidden="true" />
                Abrir WhatsApp
              </span>
              <span className="btn-icon" aria-hidden="true">
                <IconArrowUpRight size={18} stroke={1.5} />
                <IconArrowUpRight size={18} stroke={1.5} />
              </span>
            </button>
          )}
        </div>
      )}
      <p id={`${id}-nota`} className="t-small mt-6 text-[var(--muted)]">
        La cita se confirma por WhatsApp. Su nombre, trámite y día preferido se usan para preparar el mensaje; al abrir WhatsApp, el texto se comparte con ese servicio. Los campos no se guardan en el sitio. Responsable: {siteConfig.titular}, Notaría 80, {siteConfig.address}, {siteConfig.neighborhood}, C.P. {siteConfig.postalCode}, {siteConfig.city}. Puede limitar el uso de sus datos en {siteConfig.email}. Consulte el <a href="/aviso-de-privacidad/" className="underline underline-offset-4">aviso de privacidad integral</a>.
      </p>
    </div>
  );
}
