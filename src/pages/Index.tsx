import { useState } from "react";
import { data } from "@/mock/dashboardData";
import HeaderCard from "@/components/HeaderCard";
import EventTabs from "@/components/EventTabs";
import OtpDisplay from "@/components/OtpDisplay";
import EventOverview from "@/components/EventOverview";
import PaymentSection from "@/components/PaymentSection";
import FilesSection from "@/components/FilesSection";
import RatingSection from "@/components/RatingSection";

const Index = () => {
  const [selectedEventId, setSelectedEventId] = useState(data.events[0].id);
  const selectedEvent = data.events.find((e) => e.id === selectedEventId) || data.events[0];

  return (
    <div className="mx-auto min-h-screen max-w-lg bg-background pb-8">
      <HeaderCard
        clientName={data.client.name}
        occasionType={selectedEvent.occasionType}
        poc={selectedEvent.poc}
        status={selectedEvent.status}
        tncAccepted={data.client.tncAccepted}
      />

      <EventTabs
        events={data.events}
        selectedId={selectedEventId}
        onSelect={setSelectedEventId}
      />

      <OtpDisplay startOtp="5558" endOtp="3344" />

      <EventOverview
        details={data.selectedEvent.details}
        eventName={selectedEvent.name}
        eventDate={selectedEvent.date}
        meta={data.selectedEvent.meta}
      />

      <PaymentSection payments={data.selectedEvent.payments} />

      <FilesSection
        files={data.selectedEvent.files}
        meta={data.selectedEvent.meta}
      />

      <RatingSection rating={data.selectedEvent.rating} />
    </div>
  );
};

export default Index;