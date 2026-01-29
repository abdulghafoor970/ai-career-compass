import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JobCard } from "@/components/JobCard";
import { JobFilters } from "@/components/JobFilters";
import { JobModal } from "@/components/JobModal";
import { Footer } from "@/components/Footer";
import { jobs, Job } from "@/data/jobs";
import { Briefcase } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.skills.some((skill) => skill.toLowerCase().includes(searchLower));

      // Category filter
      const matchesCategory =
        selectedCategory === "All" || job.category === selectedCategory;

      // Location filter
      const matchesLocation =
        selectedLocation === "All Locations" ||
        job.location.includes(selectedLocation) ||
        (selectedLocation === "Remote" && job.type === "Remote");

      // Type filter
      const matchesType =
        selectedType === "All Types" || job.type === selectedType;

      return matchesSearch && matchesCategory && matchesLocation && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedLocation, selectedType]);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleClearFilters = () => {
    setSelectedCategory("All");
    setSelectedLocation("All Locations");
    setSelectedType("All Types");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <JobFilters
                selectedCategory={selectedCategory}
                selectedLocation={selectedLocation}
                selectedType={selectedType}
                onCategoryChange={setSelectedCategory}
                onLocationChange={setSelectedLocation}
                onTypeChange={setSelectedType}
                onClearFilters={handleClearFilters}
              />
            </div>
          </aside>

          {/* Job listings */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-xl">
                  {filteredJobs.length} Jobs Found
                </h2>
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid gap-4">
                {filteredJobs.map((job, index) => (
                  <div
                    key={job.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <JobCard job={job} onClick={() => handleJobClick(job)} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-xl border border-border">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  No jobs found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-primary hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      <JobModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
