export default function ProjectCard({ image, title, blurb, href }) {
  return (
    <article className="group card-project h-[440px] card-interactive hover:shadow-lg hover:shadow-black/20">
      <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
        {/* Image Goes Here */}
        <img
          src={image}
          alt={`Screenshot of ${title} project showing the main interface and features`}
          className="h-full w-full object-cover hover-scale-subtle"
          loading="lazy"
        />
      </div>
      <div className="flex h-[calc(440px-(440px*0.75))] flex-col p-4">
        {/* Title and Blurb */}
        <h4 className="text-base font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-white/80 line-clamp-3">{blurb}</p>
        <div className="mt-auto pt-3">
          {/* Link Section */}
          <a
            href={href}
            className="inline-block text-sm text-white/75 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
          >
            View Details &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
