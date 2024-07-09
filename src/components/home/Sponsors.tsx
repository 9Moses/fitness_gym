import { sponsors } from "@/assets";

export function Sponsors() {
  return (
    <div className="mx-auto w-5/6">
      <div className="flex items-center mx-auto w-5/6 justify-between gap-2">
        {sponsors.map((sponsor) => (
          <img
            key={sponsor.id}
            src={sponsor.image}
            alt={`Sponsor ${sponsor.id}`}
            className="h-[80px]  object-contain"
          />
        ))}
      </div>
    </div>
  );
}
