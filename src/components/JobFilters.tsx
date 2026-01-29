import { categories, locations, jobTypes } from "@/data/jobs";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Filter, X } from "lucide-react";

interface JobFiltersProps {
  selectedCategory: string;
  selectedLocation: string;
  selectedType: string;
  onCategoryChange: (category: string) => void;
  onLocationChange: (location: string) => void;
  onTypeChange: (type: string) => void;
  onClearFilters: () => void;
}

export const JobFilters = ({
  selectedCategory,
  selectedLocation,
  selectedType,
  onCategoryChange,
  onLocationChange,
  onTypeChange,
  onClearFilters,
}: JobFiltersProps) => {
  const hasFilters = selectedCategory !== "All" || selectedLocation !== "All Locations" || selectedType !== "All Types";

  return (
    <div className="bg-card rounded-xl p-6 card-shadow border border-border">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-primary" />
        <h2 className="font-display font-semibold text-lg">Filters</h2>
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="ml-auto text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category filter */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Category
          </label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location filter */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Location
          </label>
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Job type filter */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Job Type
          </label>
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Category quick filters */}
      <div className="mt-6 pt-6 border-t border-border">
        <label className="text-sm font-medium text-muted-foreground mb-3 block">
          Popular Categories
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.slice(1, 6).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className="text-xs"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
