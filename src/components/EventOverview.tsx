import { useState } from "react";
import { Calendar, MapPin, Music, Info, User, Phone, Pencil, Save, ChevronDown, ChevronUp } from "lucide-react";

interface EventOverviewProps {
  details: {
    description: string;
    musicPreferences: string;
    locationLink: string;
    clientPoc: { name: string; phone: string };
  };
  eventName: string;
  eventDate: string;
  meta: { startTime: string; endTime: string; duration: string };
}

const EventOverview = ({ details, eventName, eventDate, meta }: EventOverviewProps) => {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(details);

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div className="mx-4 mt-3 rounded-lg bg-card shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 active:scale-[0.99]"
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          <Calendar className="h-4 w-4 text-primary" /> Event Overview
        </span>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-5 pt-4">
          <div className="rounded-md border border-border bg-background p-4">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Music className="h-4 w-4 text-primary" /> {eventName}
            </p>
            <p className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(eventDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
              {" · "}
              {meta.startTime} – {meta.endTime}
            </p>

            <div className="mt-5 space-y-4">
              {/* Description */}
              <div>
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <Info className="h-3.5 w-3.5" /> Description
                  </p>
                  <button onClick={() => setEditing(!editing)} className="rounded p-1 hover:bg-muted active:scale-95">
                    <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                </div>
                {editing ? (
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    rows={2}
                  />
                ) : (
                  <p className="mt-1 rounded-md border border-border bg-muted/50 px-3 py-2 text-sm">{form.description}</p>
                )}
              </div>

              {/* Music */}
              <div>
                <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <Music className="h-3.5 w-3.5" /> Music Preferences
                </p>
                {editing ? (
                  <input
                    value={form.musicPreferences}
                    onChange={(e) => setForm({ ...form, musicPreferences: e.target.value })}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                ) : (
                  <p className="mt-1 text-sm">{form.musicPreferences || "No music preferences added"}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> Event Location
                </p>
                <a
                  href={form.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block truncate rounded-md bg-muted/50 px-3 py-2 text-sm text-primary hover:underline"
                >
                  {form.locationLink}
                </a>
              </div>

              {/* Client POC */}
              <div>
                <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <User className="h-3.5 w-3.5" /> Point of Contact
                </p>
                <div className="mt-2 flex items-center gap-3 text-sm">
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-primary" /> {form.clientPoc.name}</span>
                  <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5 text-primary" /> {form.clientPoc.phone}</span>
                </div>
              </div>

              {editing && (
                <button
                  onClick={handleSave}
                  className="mt-2 flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.97]"
                >
                  <Save className="h-4 w-4" /> Save Changes
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventOverview;