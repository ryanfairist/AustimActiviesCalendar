"use client";
import React from "react";
import { Button } from "@/components/ui/button";

interface ActivityFilterProps {
  setFilter: (filter: string | null) => void;
}

export const ActivityFilter: React.FC<ActivityFilterProps> = ({ setFilter }) => {
  return (
    <div className="flex justify-center space-x-2 mb-6"> {/* Changed mb-4 to mb-6 and added justify-center */}
      <Button variant="outline" onClick={() => setFilter(null)} className="rounded-full">
        All
      </Button>
      <Button variant="outline" onClick={() => setFilter("Arts & Crafts")} className="rounded-full">
        Arts & Crafts
      </Button>
      <Button variant="outline" onClick={() => setFilter("Culinary")} className="rounded-full">
        Culinary
      </Button>
      <Button variant="outline" onClick={() => setFilter("Outside")} className="rounded-full">
        Outside
      </Button>
    </div>
  );
};
