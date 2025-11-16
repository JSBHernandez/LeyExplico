interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  overlay?: boolean;
  size?: "small" | "medium" | "large";
}

export default function Hero({ title, subtitle, image, overlay = true, size = "large" }: HeroProps) {
  const heightClass = {
    small: "h-[40vh]",
    medium: "h-[60vh]",
    large: "h-[85vh]",
  }[size];

  return (
    <section className={`relative ${heightClass} flex items-center justify-center`}>
      {/* Background Image */}
      {image && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
          {overlay && <div className="absolute inset-0 bg-black/40" />}
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className={`font-serif font-bold mb-6 ${image ? 'text-white' : 'text-[--foreground]'} ${
          size === "large" ? "text-hero" : size === "medium" ? "text-title" : "text-subtitle"
        }`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-body max-w-3xl mx-auto ${image ? 'text-white/90' : 'text-[--gray-medium]'}`}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Scroll Indicator */}
      {size === "large" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className={`w-6 h-6 ${image ? 'text-white' : 'text-[--foreground]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  );
}
