import { Copy } from "lucide-react";
import { toast } from "sonner";

interface OtpDisplayProps {
  startOtp: string;
  endOtp: string;
}

const OtpDisplay = ({ startOtp, endOtp }: OtpDisplayProps) => {
  const copyToClipboard = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    toast.success(`${label} copied!`);
  };

  return (
    <div className="mx-4 mt-3 grid grid-cols-2 gap-3">
      <div className="flex items-center justify-between rounded-lg border-2 border-success/30 bg-success/5 px-4 py-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-success">Start OTP</p>
          <p className="text-2xl font-bold text-success">{startOtp}</p>
        </div>
        <button
          onClick={() => copyToClipboard(startOtp, "Start OTP")}
          className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted active:scale-95"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <div className="flex items-center justify-between rounded-lg border-2 border-destructive/30 bg-destructive/5 px-4 py-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-destructive">End OTP</p>
          <p className="text-2xl font-bold text-destructive">{endOtp}</p>
        </div>
        <button
          onClick={() => copyToClipboard(endOtp, "End OTP")}
          className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted active:scale-95"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default OtpDisplay;