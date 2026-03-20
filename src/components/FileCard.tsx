import { Download, Play } from "lucide-react";

interface FileCardProps {
  file: { name: string; url: string; thumbnail?: string };
  type: "reel" | "picture" | "raw";
}

const FileCard = ({ file, type }: FileCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-muted/30 transition-shadow hover:shadow-md">
      {/* Thumbnail area */}
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
        {type === "reel" && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-4 w-4 ml-0.5" />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-3 py-2.5">
        <p className="truncate text-xs font-medium">{file.name}</p>
        <button className="shrink-0 rounded p-1 text-muted-foreground transition-colors hover:bg-muted active:scale-95">
          <Download className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default FileCard;