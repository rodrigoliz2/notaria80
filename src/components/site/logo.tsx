// Logotipo caligráfico como máscara del SVG trazado: nítido a cualquier tamaño y
// del color del texto que lo rodea (marfil sobre oscuro, bosque sobre claro).
export function Logo({ className = "", label = "Notaría 80 Guadalajara" }: { className?: string; label?: string | null }) {
  return label ? (
    <span role="img" aria-label={label} className={`logo ${className}`} />
  ) : (
    <span aria-hidden="true" className={`logo ${className}`} />
  );
}
