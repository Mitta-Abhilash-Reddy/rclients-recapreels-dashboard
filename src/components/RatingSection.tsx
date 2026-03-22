import { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";
import { EventRating } from "@/types/dashboard";

interface RatingSectionProps {
  rating: EventRating;
}

const RatingSection = ({ rating }: RatingSectionProps) => {
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState(rating.value);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState(rating.comment);

  const handleSubmit = () => {
    if (stars === 0) {
      toast.error("Please select a rating");
      return;
    }
    toast.success("Rating submitted!");
  };

  return (
    <div className="mx-4 mt-3 mb-8 rounded-lg bg-card shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 active:scale-[0.99]"
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          <Star className="h-4 w-4 text-primary" /> Rating
        </span>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-5 pt-4">
          <div className="rounded-md border border-border bg-background p-4">
            <p className="text-sm font-semibold">Rate Your Experience</p>

            {rating.value > 0 ? (
              <div className="mt-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i <= rating.value
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                {rating.comment && (
                  <p className="mt-2 text-sm italic text-muted-foreground">"{rating.comment}"</p>
                )}
              </div>
            ) : (
              <>
                <p className="mt-3 text-xs font-semibold text-muted-foreground">Select Rating</p>
                <div className="mt-1 flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(0)}
                      onClick={() => setStars(i)}
                      className="transition-transform active:scale-90"
                    >
                      <Star
                        className={`h-7 w-7 ${
                          i <= (hovered || stars)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted-foreground/30"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>

                <p className="mt-4 text-xs font-semibold text-muted-foreground">Comments (Optional)</p>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience..."
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  rows={3}
                />

                <button
                  onClick={handleSubmit}
                  className="mt-3 w-full rounded-lg bg-primary/70 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary active:scale-[0.97]"
                >
                  Submit Rating
                </button>
                <p className="mt-4 text-center text-sm text-muted-foreground">No rating yet</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingSection;