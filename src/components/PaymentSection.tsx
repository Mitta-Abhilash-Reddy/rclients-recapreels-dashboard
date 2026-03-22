import { useState } from "react";
import { CreditCard, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { PaymentInfo } from "@/types/dashboard";

interface PaymentSectionProps {
  payments: PaymentInfo;
}

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const PaymentSection = ({ payments }: PaymentSectionProps) => {
  const [open, setOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  const safeDue = Math.max(0, payments.due);
  const isPaid = safeDue === 0;

  return (
    <div className="mx-4 mt-3 rounded-lg bg-card shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 active:scale-[0.99]"
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          <CreditCard className="h-4 w-4 text-primary" /> Package & Billing
          {!isPaid && (
            <span className="rounded-full bg-destructive px-2.5 py-0.5 text-[10px] font-bold text-destructive-foreground">
              {fmt(safeDue)} Due
            </span>
          )}
        </span>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-5 pt-4">
          <div className="rounded-md border border-border bg-background p-4">
            <p className="text-sm font-semibold">Payment Summary</p>
            <div className="mt-4 space-y-2.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Amount</span>
                <span className="font-medium">{fmt(payments.total)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="font-medium text-success">{fmt(payments.paid)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Balance Due</span>
                <span className={isPaid ? "font-bold text-success" : "font-bold text-destructive"}>
                  {fmt(safeDue)}
                </span>
              </div>
            </div>

            <button
              disabled={isPaid}
              className={`mt-5 w-full rounded-lg py-3 text-sm font-semibold shadow-md transition-transform active:scale-[0.97] ${
                isPaid 
                  ? "bg-muted text-muted-foreground opacity-70 cursor-not-allowed" 
                  : "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
              }`}
            >
              <CreditCard className="mr-2 inline h-4 w-4" />
              {isPaid ? "Paid" : `Pay Now ${fmt(safeDue)}`}
            </button>
          </div>

          {/* Payment History */}
          <div className="mt-3 rounded-md border border-border bg-background">
            <button
              onClick={() => setHistoryOpen(!historyOpen)}
              className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold active:scale-[0.99]"
            >
              <span className="flex items-center gap-2">
                💰 Payment History
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {payments.history.length} Payment{payments.history.length === 1 ? "" : "s"}
                </span>
              </span>
              {historyOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
            </button>
            {historyOpen && (
              <div className="border-t border-border px-4 pb-3 pt-2">
                {payments.history.length > 0 ? (
                  payments.history.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-md border border-border bg-muted/30 p-3 mt-2">
                      <div>
                        <p className="text-xs text-muted-foreground">{item.method}</p>
                        <p className="mt-0.5 text-base font-bold">{fmt(item.amount)}</p>
                        <p className="text-[11px] text-muted-foreground">{item.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-success px-2.5 py-0.5 text-[10px] font-bold text-success-foreground">
                          {item.status}
                        </span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="mt-4 text-center text-sm text-muted-foreground pb-2">No payments yet</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSection;