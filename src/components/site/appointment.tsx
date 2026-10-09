"use client";
import { useRef, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { services, siteConfig, whatsappHref } from "@/site.config";
import { WhatsAppIcon } from "./contact-link";
export function Appointment() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const message = `${siteConfig.messages.appointment} Mi nombre es ${name.trim()}. El trámite que necesito es ${service}.${day ? ` Mi día preferido es ${day}.` : ""}`;
  function next() {
    if (!service) {
      setError("Seleccione un trámite para continuar.");
      selectRef.current?.focus();
      return;
    }
    setError("");
    setStep(2);
    requestAnimationFrame(() => nameRef.current?.focus());
  }
  function validate() {
    if (!name.trim()) {
      setError("Escriba su nombre para preparar el mensaje.");
      nameRef.current?.focus();
      return;
    }
    setError("");
    setReady(true);
  }
  return (
    <div className="appointment">
      <div className="appointment-top">
        <h3>Preparemos su cita.</h3>
        <span>{step} de 2</span>
      </div>
      <p className="appointment-intro">
        Cuéntenos qué necesita. Continuamos por WhatsApp.
      </p>
      <div aria-live="polite" className="form-feedback">
        {error && (
          <p role="alert" className="form-error">
            {error}
          </p>
        )}
      </div>
      {step === 1 ? (
        <div className="form-step">
          <label htmlFor="service">¿Qué trámite necesita?</label>
          <select
            id="service"
            ref={selectRef}
            value={service}
            aria-invalid={!!error}
            onChange={(e) => {
              setService(e.target.value);
              setError("");
            }}
          >
            <option value="">Seleccione un trámite</option>
            {services.map((s) => (
              <option key={s.title}>{s.title}</option>
            ))}
            <option>Créditos hipotecarios</option>
            <option>Necesito orientación</option>
          </select>
          <button type="button" className="button primary" onClick={next}>
            Continuar
            <IconArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      ) : (
        <div className="form-step">
          <button
            type="button"
            className="text-link back"
            onClick={() => {
              setStep(1);
              setError("");
              setReady(false);
            }}
          >
            <IconArrowLeft size={18} aria-hidden="true" />
            Cambiar trámite
          </button>
          <p className="selected-service">{service}</p>
          <label htmlFor="name">Su nombre</label>
          <input
            id="name"
            ref={nameRef}
            value={name}
            maxLength={100}
            autoComplete="given-name"
            aria-invalid={!!error}
            onChange={(e) => {
              setName(e.target.value);
              setReady(false);
              setError("");
            }}
          />
          <label htmlFor="day">
            Día preferido <span>(opcional)</span>
          </label>
          <select
            id="day"
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
              setReady(false);
            }}
          >
            <option value="">Sin preferencia</option>
            {["lunes", "martes", "miércoles", "jueves", "viernes"].map((d) => (
              <option value={d} key={d}>
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </option>
            ))}
          </select>
          {ready ? (
            <>
              <div className="message-preview" aria-live="polite">
                <span>Su mensaje está listo</span>
                <p>{message}</p>
              </div>
              <a
                className="button primary"
                href={whatsappHref(message)}
                target="_blank"
                rel="noopener noreferrer"
                data-contact="whatsapp"
              >
                <WhatsAppIcon />
                Abrir WhatsApp
              </a>
            </>
          ) : (
            <button type="button" className="button primary" onClick={validate}>
              Preparar mensaje
              <IconArrowRight size={18} aria-hidden="true" />
            </button>
          )}
        </div>
      )}
      <p className="form-note">
        La cita se confirma por WhatsApp. Estos datos no se guardan en el sitio.
      </p>
    </div>
  );
}
