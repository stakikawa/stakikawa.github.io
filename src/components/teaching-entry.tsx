import { Teaching } from "@/data/teaching";

export function TeachingEntry({ teaching }: { teaching: Teaching }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{teaching.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif">
          {teaching.title} —{" "}
          {teaching.institutionUrl ? (
            <a
              href={teaching.institutionUrl}
              className="hover:text-zinc-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {teaching.institution}
            </a>
          ) : (
            teaching.institution
          )}
        </h3>
        {teaching.advisor && (
          <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
            Advisor: {teaching.advisor}
          </p>
        )}
        {teaching.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {teaching.description}
          </p>
        )}
      </div>
    </div>
  );
}
