import { Download, Play, Image as ImageIcon } from "lucide-react";
import { ReelFile } from "@/types/dashboard";

interface FileCardProps {
  file: ReelFile;
  type: "reel" | "picture" | "raw";
}

const FileCard = ({ file, type }: FileCardProps) => {
  const handlePlay = () => {
    console.log("view", file.id);
  };

  const handleDownload = () => {
    console.log("download", file.id);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-muted/30 transition-shadow hover:shadow-md">
      {/* Thumbnail area */}
      <div className="relative flex aspect-video items-center justify-center bg-muted/50 overflow-hidden">
        {file.thumbnail || file.url ? (
          <img 
            src={file.thumbnail || file.url} 
            alt={file.name}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
               (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : null}
        
        {/* Fallback pattern / overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 mix-blend-overlay pointer-events-none" />
        
        {type === "reel" ? (
          <button
            onClick={handlePlay}
            className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110"
          >
            <Play className="h-4 w-4 ml-0.5" />
          </button>
        ) : !file.thumbnail && !file.url ? (
          <ImageIcon className="h-6 w-6 text-muted-foreground/30 z-10" />
        ) : null}
      </div>
      
      <div className="flex items-center justify-between px-3 py-2.5">
        <div>
          <p className="truncate text-xs font-medium">{file.name}</p>
          <p className="text-[10px] text-muted-foreground">
            {Math.round(file.size / 1024 / 1024)}MB • {new Date(file.createdAt).toLocaleDateString()}
          </p>
        </div>
        <button
          onClick={handleDownload}
          className="shrink-0 rounded p-1 text-muted-foreground transition-colors hover:bg-muted active:scale-95 z-10"
        >
          <Download className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default FileCard;