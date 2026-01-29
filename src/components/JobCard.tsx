import { MapPin, Clock, Briefcase, Star, ExternalLink } from "lucide-react";
import { Job } from "@/data/jobs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export const JobCard = ({ job, onClick }: JobCardProps) => {
  const typeColors: Record<string, string> = {
    "Full-time": "bg-primary/10 text-primary border-primary/20",
    "Part-time": "bg-accent/10 text-accent border-accent/20",
    "Contract": "bg-orange-500/10 text-orange-600 border-orange-500/20",
    "Remote": "bg-green-500/10 text-green-600 border-green-500/20",
    "Hybrid": "bg-purple-500/10 text-purple-600 border-purple-500/20",
  };

  return (
    <div
      onClick={onClick}
      className="group relative bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 cursor-pointer border border-border hover:border-primary/30 hover:-translate-y-1"
    >
      {/* Featured badge */}
      {job.featured && (
        <div className="absolute -top-3 right-4">
          <Badge className="gradient-bg text-primary-foreground border-0 gap-1">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </Badge>
        </div>
      )}

      <div className="flex gap-4">
        {/* Company logo */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center overflow-hidden border border-border">
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=random&size=80`;
              }}
            />
          </div>
        </div>

        {/* Job info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {job.title}
              </h3>
              <p className="text-muted-foreground font-medium">{job.company}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              {job.experience}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {job.postedDate}
            </span>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs font-medium">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 4 && (
              <Badge variant="secondary" className="text-xs font-medium">
                +{job.skills.length - 4}
              </Badge>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="font-display font-semibold text-foreground">
              {job.salary}
            </span>
            <Badge className={`${typeColors[job.type]} border`}>
              {job.type}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
