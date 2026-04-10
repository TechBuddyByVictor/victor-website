export default function PortraitFrame({
  className = "",
  src = "",
  alt = "Victor Licona portrait",
  eyebrow = "Victor Licona",
  title = "Portrait Placeholder",
  caption = "Replace this with your real portrait when you are ready.",
}) {
  const hasImage = Boolean(src);

  return (
    <figure className={`portrait-frame${className ? ` ${className}` : ""}`}>
      <div className="portrait-shell">
        {hasImage ? (
          <img
            className="portrait-image"
            src={src}
            alt={alt}
            decoding="async"
            fetchPriority="high"
          />
        ) : (
          <div className="portrait-placeholder" aria-label={alt} role="img">
            <span className="portrait-placeholder-mark">VL</span>
            <div className="portrait-placeholder-copy">
              <small>{eyebrow}</small>
              <strong>{title}</strong>
              <p>{caption}</p>
            </div>
          </div>
        )}

        <div className="portrait-aura" aria-hidden="true" />
      </div>

      <figcaption className="portrait-caption">
        <span className="kicker">Fort Worth, Texas</span>
        <strong>Cybersecurity, entrepreneurship, and real-world execution.</strong>
      </figcaption>
    </figure>
  );
}
