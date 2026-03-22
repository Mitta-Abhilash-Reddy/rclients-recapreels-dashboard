export interface ClientData {
  id: string;
  name: string;
  phone: string;
  tncAccepted: boolean;
}

export interface EventListItem {
  id: string;
  name: string;
  date: string;
  status: string;
}

export interface EventDetails {
  description: string;
  musicPreferences: string;
  locationLink: string;
  clientPoc: {
    name: string;
    phone: string;
  };
}

export interface PaymentHistoryItem {
  id: string;
  method: string;
  amount: number;
  createdAt: string; // ← was "date", backend sends "createdAt"
  status: string;
}

export interface PaymentInfo {
  total: number;
  paid: number;
  due: number;
  history: PaymentHistoryItem[];
}

export interface ReelFile {
  id: string;
  name: string;
  url: string;
  size: number;
  createdAt: string;
  thumbnail?: string;
}

export interface EventFiles {
  reels: ReelFile[];
  pictures: ReelFile[];
  raw: ReelFile[];
}

export interface EventMeta {
  startTime: string;
  endTime: string;
  duration: string;
}

export interface EventRating {
  value: number;
  comment: string;
}

export interface EventOtp {
  startOtp: string;
  endOtp: string;
}

export interface CompleteEvent {
  id: string;
  name: string;
  occasionType: string;
  date: string;
  status: string;
  poc: {
    name: string;
    phone: string;
  };
  otp: EventOtp;
  details: EventDetails;
  payments: PaymentInfo;
  files: EventFiles;
  meta: EventMeta;
  rating: EventRating;
}

export interface DashboardData {
  client: ClientData;
  events: EventListItem[];
  eventsFull: CompleteEvent[]; // ← removed optional "?" — backend always returns this
}
