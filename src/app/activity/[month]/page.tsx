// src/app/activity/[month]/page.tsx

"use client";

import React from "react";
import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Activity {
  month: string;
  title: string;
  description: string;
  category: string;
  materials: string[];
}

const activities: Activity[] = [
  {
    month: "January",
    title: "Sensory Bin",
    description: "Create a sensory bin with rice and small toys.",
    category: "Sensory",
    materials: ["Rice", "Small toys", "Bin"],
  },
  {
    month: "February",
    title: "Obstacle Course",
    description: "Set up a simple obstacle course in your living room.",
    category: "Motor Skills",
    materials: ["Pillows", "Blankets", "Tape"],
  },
  {
    month: "March",
    title: "Drawing with Crayons",
    description: "Encourage drawing with large crayons.",
    category: "Creative",
    materials: ["Large crayons", "Paper"],
  },
  {
    month: "April",
    title: "Bubble Time",
    description: "Playing with bubbles.",
    category: "Sensory",
    materials: ["Bubbles", "Bubble wand"],
  },
  {
    month: "May",
    title: "Stacking Cups",
    description: "Stacking Cups for motor skills.",
    category: "Motor Skills",
    materials: ["Cups"],
  },
  {
    month: "June",
    title: "Coloring Book",
    description: "Coloring Book Fun.",
    category: "Creative",
    materials: ["Coloring Book", "Crayons"],
  },
  {
    month: "July",
    title: "Water Play",
    description: "Water Play activities.",
    category: "Sensory",
    materials: ["Water", "Toys"],
  },
  {
    month: "August",
    title: "Ball Pit",
    description: "Ball Pit activities.",
    category: "Motor Skills",
    materials: ["Ball Pit balls"],
  },
  {
    month: "September",
    title: "Finger Painting",
    description: "Finger Painting activity.",
    category: "Creative",
    materials: ["Paint", "Paper"],
  },
  {
    month: "October",
    title: "Leaf Pile",
    description: "Leaf Pile activity.",
    category: "Sensory",
    materials: ["Leaves"],
  },
  {
    month: "November",
    title: "Bean Bag Throw",
    description: "Bean Bag Throw activity.",
    category: "Motor Skills",
    materials: ["Bean Bags"],
  },
  {
    month: "December",
    title: "Snow Angel",
    description: "Snow Angel activity.",
    category: "Creative",
    materials: ["Snow"],
  },
];

export default function ActivityPage() {
  const { month } = useParams();

  const activity = activities.find((activity) => activity.month === month);

  if (!activity) {
    return <div>Activity not found</div>;
  }

  return (
    <div className="p-4">
        <Link href={"/"}>
      <Button variant={"ghost"} size={"icon"}>
          <ArrowLeft/>
      </Button>
        </Link>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>{activity.month}</CardTitle>
          <CardDescription>{activity.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{activity.description}</p>
          <p className="mt-2 font-medium">
            Materials: <span className="font-normal">{activity.materials.join(", ")}</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
