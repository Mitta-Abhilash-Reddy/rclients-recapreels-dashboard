export const data = {
  client: {
    name: "Mounika Reddy",
    phone: "9876543210",
    tncAccepted: true,
  },
  events: [
    {
      id: "event1",
      name: "Wedding",
      occasionType: "Wedding Package",
      date: "2026-03-20",
      status: "Done",
      poc: {
        name: "Aishu",
        phone: "9999999999",
      },
    },
    {
      id: "event2",
      name: "Engagement",
      occasionType: "Engagement Package",
      date: "2026-02-18",
      status: "Done",
      poc: {
        name: "Aishu",
        phone: "9999999999",
      },
    },
    {
      id: "event3",
      name: "Bachelorette",
      occasionType: "Party Package",
      date: "2026-02-26",
      status: "Done",
      poc: {
        name: "Aishu",
        phone: "9999999999",
      },
    },
  ],
  selectedEvent: {
    id: "event1",
    details: {
      description: "Cinematic wedding coverage",
      musicPreferences: "Romantic Telugu songs",
      locationLink: "https://maps.google.com",
      clientPoc: {
        name: "Ravi",
        phone: "8888888888",
      },
    },
    payments: {
      total: 60000,
      paid: 10000,
      due: 50000,
      history: [
        {
          method: "Razorpay Link",
          amount: 10000,
          date: "13 Feb 2026, 01:25 pm",
          status: "PAID",
        },
      ],
    },
    files: {
      reels: [
        { name: "Wedding Highlight Reel", url: "#", thumbnail: "" },
        { name: "Ceremony Reel", url: "#", thumbnail: "" },
        { name: "Reception Reel", url: "#", thumbnail: "" },
        { name: "Couple Reel", url: "#", thumbnail: "" },
      ],
      pictures: [],
      raw: [],
    },
    meta: {
      startTime: "10:00 AM",
      endTime: "02:00 PM",
      duration: "4h",
    },
    rating: {
      value: 0,
      comment: "",
    },
  },
};