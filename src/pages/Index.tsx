import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CompleteEvent, DashboardData } from "@/types/dashboard";
import { getDashboard } from "@/services/dashboardService";
import HeaderCard from "@/components/HeaderCard";
import EventTabs from "@/components/EventTabs";
import OtpDisplay from "@/components/OtpDisplay";
import EventOverview from "@/components/EventOverview";
import PaymentSection from "@/components/PaymentSection";
import FilesSection from "@/components/FilesSection";
import RatingSection from "@/components/RatingSection";

const emptyEvent: CompleteEvent = {
  id: "",
  name: "No Event Yet",
  occasionType: "Pending",
  date: "",
  status: "Pending",
  poc: { name: "-", phone: "-" },
  otp: { startOtp: "-", endOtp: "-" },
  details: {
    description: "",
    musicPreferences: "",
    locationLink: "",
    clientPoc: { name: "-", phone: "-" },
  },
  payments: { total: 0, paid: 0, due: 0, history: [] },
  files: { reels: [], pictures: [], raw: [] },
  meta: { startTime: "-", endTime: "-", duration: "-" },
  rating: { value: 0, comment: "" },
};

const Index = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<DashboardData | null>(null);
  const [selectedEventId, setSelectedEventId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        if (!id) throw new Error("No unique link ID provided in the URL.");

        const res = await getDashboard(id);

        // ── DEBUG: remove after confirming files work ──
        console.log("API response:", res);
        console.log("eventsFull:", res.eventsFull);
        console.log("first event files:", res.eventsFull?.[0]?.files);
        // ─────────────────────────────────────────────

        setData(res);

        if (res.events && res.events.length > 0) {
          setSelectedEventId(res.events[0].id);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    }

    if (id) load();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-sm font-semibold text-muted-foreground animate-pulse">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-sm font-semibold text-destructive">
        {error}
      </div>
    );
  if (!data)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-sm font-semibold text-muted-foreground">
        No data available
      </div>
    );

  // Find the active event from eventsFull using selectedEventId
  const activeEvent: CompleteEvent =
    data.eventsFull.find((e) => e.id === selectedEventId) ?? emptyEvent;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4 py-4">
        <div className="space-y-4">
          <HeaderCard
            clientName={data.client?.name || "Client"}
            occasionType={activeEvent.occasionType}
            poc={activeEvent.poc}
            status={activeEvent.status}
            tncAccepted={data.client?.tncAccepted || false}
          />

          {data.events && data.events.length > 0 && (
            <EventTabs
              events={data.events}
              selectedId={selectedEventId}
              onSelect={setSelectedEventId}
            />
          )}

          <OtpDisplay
            startOtp={activeEvent.otp.startOtp}
            endOtp={activeEvent.otp.endOtp}
          />

          <EventOverview
            details={activeEvent.details}
            eventName={activeEvent.name}
            eventDate={activeEvent.date}
            meta={activeEvent.meta}
          />

          <PaymentSection payments={activeEvent.payments} />

          <FilesSection files={activeEvent.files} meta={activeEvent.meta} />

          <RatingSection rating={activeEvent.rating} />
        </div>
      </div>
    </div>
  );
};

export default Index;
