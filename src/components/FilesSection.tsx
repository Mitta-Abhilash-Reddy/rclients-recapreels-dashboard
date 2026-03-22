import { useState } from "react";
import { Film, Image, FileText, ChevronDown, ChevronUp, Clock } from "lucide-react";
import FileCard from "./FileCard";
import { EventFiles, EventMeta } from "@/types/dashboard";

interface FilesSectionProps {
  files: EventFiles;
  meta: EventMeta;
}

const FilesSection = ({ files, meta }: FilesSectionProps) => {
  const [open, setOpen] = useState(false);
  const [reelsOpen, setReelsOpen] = useState(false);
  const [picturesOpen, setPicturesOpen] = useState(false);
  const [rawOpen, setRawOpen] = useState(false);

  const totalReels = files.reels.length;

  return (
    <div className="mx-4 mt-3 rounded-lg bg-card shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 active:scale-[0.99]"
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          <Film className="h-4 w-4 text-primary" /> Your Files
        </span>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-5 pt-4 space-y-3">
          {/* Meta bar */}
          <div className="grid grid-cols-3 gap-2 rounded-md border border-primary/15 bg-primary/5 px-3 py-3 text-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1">
                <Clock className="h-3 w-3" /> Started
              </p>
              <p className="mt-0.5 text-xs font-semibold">{meta.startTime}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1">
                <Clock className="h-3 w-3" /> Ended
              </p>
              <p className="mt-0.5 text-xs font-semibold">{meta.endTime}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1">
                <Clock className="h-3 w-3" /> Duration
              </p>
              <p className="mt-0.5 text-xs font-semibold text-primary">{meta.duration}</p>
            </div>
          </div>

          {/* Reels */}
          <div className="rounded-md border border-border">
            <button onClick={() => setReelsOpen(!reelsOpen)} className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold active:scale-[0.99]">
              <span className="flex items-center gap-2">
                <Film className="h-4 w-4 text-primary" /> Reels
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{totalReels}</span>
              </span>
              {reelsOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
            </button>
            {reelsOpen && (
              <div className="border-t border-border p-3">
                {files.reels.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-4">No reels uploaded yet</p>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {files.reels.map((f) => (
                      <FileCard key={f.id} file={f} type="reel" />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Pictures */}
          <div className="rounded-md border border-border">
            <button onClick={() => setPicturesOpen(!picturesOpen)} className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold active:scale-[0.99]">
              <span className="flex items-center gap-2"><Image className="h-4 w-4 text-primary" /> Pictures</span>
              {picturesOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
            </button>
            {picturesOpen && (
              <div className="border-t border-border p-3">
                {files.pictures.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-4">No pictures uploaded yet</p>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {files.pictures.map((f) => (
                      <FileCard key={f.id} file={f} type="picture" />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Raw */}
          <div className="rounded-md border border-border">
            <button onClick={() => setRawOpen(!rawOpen)} className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold active:scale-[0.99]">
              <span className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /> Raw Content</span>
              {rawOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
            </button>
            {rawOpen && (
              <div className="border-t border-border p-3">
                {files.raw.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-4">No raw files uploaded yet</p>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {files.raw.map((f) => (
                      <FileCard key={f.id} file={f} type="raw" />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilesSection;