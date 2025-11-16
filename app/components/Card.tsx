import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  tag?: string;
}

export default function Card({ title, description, link, image, tag }: CardProps) {
  return (
    <Link href={link} className="group block">
      <article className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {image && (
          <div className="aspect-video overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        )}
        <div className="p-8">
          {tag && (
            <span className="text-xs uppercase tracking-widest text-[--accent] font-semibold mb-3 block">
              {tag}
            </span>
          )}
          <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-[--accent] transition-colors">
            {title}
          </h3>
          <p className="text-[--gray-medium] leading-relaxed">
            {description}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[--foreground] group-hover:text-[--accent] transition-colors">
            Leer más
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
