interface ContentBlockProps {
  title?: string;
  subtitle?: string;
  content: string | string[];
  align?: "left" | "center";
  width?: "narrow" | "medium" | "wide";
  background?: "white" | "gray";
}

export default function ContentBlock({ 
  title, 
  subtitle,
  content, 
  align = "left", 
  width = "medium",
  background = "white" 
}: ContentBlockProps) {
  const widthClass = {
    narrow: "max-w-2xl",
    medium: "max-w-4xl",
    wide: "max-w-6xl",
  }[width];

  const alignClass = align === "center" ? "text-center" : "text-left";
  const bgClass = background === "gray" ? "bg-[--gray-light]" : "bg-white";

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className={`${widthClass} mx-auto ${alignClass}`}>
        {title && (
          <h2 className="font-serif text-subtitle font-bold mb-6">
            {title}
          </h2>
        )}
        {subtitle && (
          <h3 className="text-xl font-semibold uppercase tracking-wide mb-8 text-[--accent]">
            {subtitle}
          </h3>
        )}
        <div className="prose prose-lg max-w-none">
          {Array.isArray(content) ? (
            content.map((paragraph, index) => (
              <p key={index} className="text-body text-[--foreground] mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-body text-[--foreground] mb-6 leading-relaxed">
              {content}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
