"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ActivityFilter } from "@/components/activity-filter";
import Link from "next/link"; // Import the Link component

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
    materials: ["Leaves"], // Corrected spelling
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

export default function Home() {
  const [filter, setFilter] = React.useState<string | null>(null);
  const [currentDate, setCurrentDate] = React.useState<Date | null>(null);

  React.useEffect(() => {
    setCurrentDate(new Date());
  }, []);


  const filteredActivities = React.useMemo(() => {
    if (!filter) {
      return activities;
    }
    return activities.filter((activity) => activity.category === filter);
  }, [filter]);

  return (
    <div className="flex flex-col bg-background">
      <header className="px-4 py-6 text-center"> {/* Added text-center */}
        <h1 className="text-3xl font-bold text-foreground">Autism Activities Calendar</h1>
        <p className="text-muted-foreground">Fun activities for high-functioning autistic preschool children</p>
      </header>
      <main className="flex-1 p-4">
        <ActivityFilter setFilter={setFilter} />
        <ScrollArea className="h-[calc(100vh-240px)]"> {/* Adjusted height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredActivities.map((activity) => (
            <Link key={activity.month} href={`/activity/${activity.month}`}>
            <Card  className="hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
                <CardHeader className="pb-2">
                <CardTitle>{activity.month}</CardTitle>
                    <CardDescription>{activity.title}</CardDescription>
                </CardHeader>
                <CardContent>
                    <img
                        src={`https://picsum.photos/400/225?random=${activity.month}`}
                        alt={activity.title}
                        className="object-cover rounded-md w-full h-48"
                        data-ai-hint={`${activity.category} ${activity.title}`}
                    />
                    <p className="text-sm text-muted-foreground mt-3">{activity.description}</p>
                    <p className="text-xs mt-2 font-medium">
                        Materials: <span className="font-normal">{activity.materials.join(", ")}</span>
                    </p>
                </CardContent>
            </Card>
        </Link>
          ))}
        </div>
        </ScrollArea>
      </main>
      <footer className="px-4 py-3 text-center text-sm text-muted-foreground border-t">
        <p>© {currentDate ? currentDate.getFullYear() : 'Loading...'} Autism Activities Calendar</p>
         <p className="text-center text-[12px] mt-2">
          The information provided on this website is for general informational
          purposes only and is not intended to be a substitute for
          professional medical advice, diagnosis, or treatment. We are not
          medical professionals. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding autism or any medical condition.</p>
      </footer>
    </div>
  );
}
