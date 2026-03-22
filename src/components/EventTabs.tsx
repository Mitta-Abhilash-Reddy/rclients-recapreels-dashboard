import { EventListItem } from "@/types/dashboard";

interface EventTabsProps {
  events: EventListItem[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const EventTabs = ({ events, selectedId, onSelect }: EventTabsProps) => {
  return (
    <div className="mx-4 mt-4 rounded-lg bg-card p-4 shadow-sm" style={{ animationDelay: "80ms" }}>
      <div className="flex gap-3 overflow-x-auto scroll-hidden pb-1">
        {events.map((event) => {
          const isSelected = event.id === selectedId;
          return (
            <button
              key={event.id}
              onClick={() => onSelect(event.id)}
              className={`shrink-0 rounded-lg border px-5 py-3 text-center transition-all duration-200 active:scale-[0.97] ${
                isSelected
                  ? "border-primary bg-primary text-primary-foreground shadow-md"
                  : "border-border bg-background hover:border-primary/40"
              }`}
            >
              <p className="text-sm font-semibold">{event.name}</p>
              <span className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                isSelected
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-success/10 text-success"
              }`}>
                ✉ {event.status}
              </span>
              <p className={`mt-1 text-xs ${isSelected ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {new Date(event.date).toLocaleDateString("en-IN", { day: "2-digit", month: "2-digit", year: "numeric" })}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EventTabs;