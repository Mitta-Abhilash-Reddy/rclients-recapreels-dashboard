import { Phone, User, CheckCircle2 } from "lucide-react";
import { CompleteEvent } from "@/types/dashboard";

interface HeaderCardProps {
  clientName: string;
  occasionType: string;
  poc: CompleteEvent["poc"];
  status: string;
  tncAccepted: boolean;
}

const HeaderCard = ({ clientName, occasionType, poc, status, tncAccepted }: HeaderCardProps) => {
  return (
    <div className="animate-fade-in-up">
      {/* Brand Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold tracking-tight text-primary">
          Recap<span className="text-foreground">Reels</span>
        </h1>
      </div>

      {/* Greeting Card */}
      <div className="mx-4 rounded-lg bg-card p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold leading-tight">
              Hi, {clientName}!
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Welcome back! Here's everything about your booking with RecapReels.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-success px-3 py-1 text-xs font-semibold text-success-foreground">
            POC Assigned
          </span>
        </div>

        {/* Occasion + POC Row */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-md border border-border bg-background p-4">
            <p className="mb-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <span className="inline-block h-4 w-4">📅</span> Occasion
            </p>
            <p className="text-base font-semibold">{occasionType}</p>
          </div>

          <div className="rounded-md border border-primary/20 bg-primary/5 p-4">
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-primary">
              Your ROG Buddy
            </p>
            <p className="text-sm text-muted-foreground">
              {poc.name} is your point of contact for this event.
            </p>
            <div className="mt-2 flex items-center gap-4 text-sm font-medium">
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5 text-primary" /> {poc.name}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-3.5 w-3.5 text-primary" /> {poc.phone}
              </span>
            </div>
          </div>
        </div>

        {/* TNC */}
        {tncAccepted && (
          <div className="mt-4 flex items-center gap-2 rounded-md border border-border bg-background px-4 py-3 text-sm">
            <CheckCircle2 className="h-5 w-5 text-success" />
            <span>
              I agree to the{" "}
              <button className="font-medium text-primary hover:underline">T&C</button>{" "}
              and{" "}
              <button className="font-medium text-primary hover:underline">Policies</button>.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderCard;