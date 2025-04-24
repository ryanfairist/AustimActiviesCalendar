"use client";
import React from "react";
import { Button } from "@/components/ui/button";

interface ActivityFilterProps {
  setFilter: (filter: string | null) => void;
}

export const ActivityFilter: React.FC<ActivityFilterProps> = ({ setFilter }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <Button variant="outline" onClick={() => setFilter(null)}>
        All
      </Button>
      <Button variant="outline" onClick={() => setFilter("Sensory")}>
        Sensory
      </Button>
      <Button variant="outline" onClick={() => setFilter("Motor Skills")}>
        Motor Skills
      </Button>
      <Button variant="outline" onClick={() => setFilter("Creative")}>
        Creative
      </Button>
    </div>
  );
};
