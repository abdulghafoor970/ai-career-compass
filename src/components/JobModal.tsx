import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Job } from "@/data/jobs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Clock, Briefcase, DollarSign, Building2, ExternalLink, Heart, Share2 } from "lucide-react";
import { toast } from "sonner";

interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JobModal = ({ job, isOpen, onClose }: JobModalProps) => {
  if (!job) return null;

  const handleApply = () => {
    toast.success("Application submitted!", {
      description: `Your application for ${job.title} at ${job.company} has been sent.`,
    });
  };

  const handleSave = () => {
    toast.success("Job saved!", {
      description: "You can find this job in your saved jobs.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!", {
      description: "Job link has been copied to clipboard.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center overflow-hidden border border-border flex-shrink-0">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=random&size=80`;
                }}
              />
            </div>
            <div className="flex-1">
              <DialogTitle className="font-display text-xl mb-1">{job.title}</DialogTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="w-4 h-4" />
                <span className="font-medium">{job.company}</span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Quick info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-secondary rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-xs">Location</span>
              </div>
              <p className="font-medium text-sm">{job.location}</p>
            </div>
            <div className="bg-secondary rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs">Experience</span>
              </div>
              <p className="font-medium text-sm">{job.experience}</p>
            </div>
            <div className="bg-secondary rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <DollarSign className="w-4 h-4" />
                <span className="text-xs">Salary</span>
              </div>
              <p className="font-medium text-sm">{job.salary}</p>
            </div>
            <div className="bg-secondary rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs">Posted</span>
              </div>
              <p className="font-medium text-sm">{job.postedDate}</p>
            </div>
          </div>

          {/* Job type & category */}
          <div className="flex flex-wrap gap-2">
            <Badge className="gradient-bg text-primary-foreground border-0">
              {job.type}
            </Badge>
            <Badge variant="secondary">{job.category}</Badge>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-display font-semibold mb-2">About this role</h3>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-display font-semibold mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button variant="hero" className="flex-1" asChild>
              <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Apply on LinkedIn
              </a>
            </Button>
            <Button variant="outline" onClick={handleSave}>
              <Heart className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
