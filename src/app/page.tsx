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
    title: "Penguin Bags for the Homeless",
    description: "Use Penguin stickers to decorate bags and fill them with sorted items for the homeless",
    category: "Arts & Crafts",
    materials: ["Penguin stickers", "Bags", "Ribbon", "Snacks", "Toiletries","Socks"],
  },
  {
    month: "February",
    title: "Poptart St Valentine's Houses",
    description: "Build St. Valentine's houses out of Poptarts",
    category: "Culinary",
    materials: ["Plates", "Buttercream Icing", "Poptarts", "Light weight small candies"],
  },
  {
    month: "March",
    title: "Irish Pasta Making",
    description: "Making homemade Irish flag colored pasta",
    category: "Culinary",
    materials: ["Flower", "Food coloring", "Eggs", "Rolling Pin", "Optional- Mixer with pasta cutter"],
  },
  {
    month: "April",
    title: "Resurrection Gardens",
    description: "Use flower pots to make a garden from seeds and gathered twigs from outside",
    category: "Outside",
    materials: ["flower pot", "soil", "sunflower or grass seeds", "stones", "string","twigs"],
  },
  {
    month: "May",
    title: "Farm Fruit and Vegetable picking",
    description: "Visit a farm that has strawberry and Asparugus picking",
    category: "Outside",
    materials: ["basket","sunblock","sunhat"],
  },
  {
    month: "June",
    title: "Car Show",
    description: "Visit the Auto parts store and then go to a car show",
    category: "Outside",
    materials: ["traspertation"],
  },
  {
    month: "July",
    title: "American Flag Sancastles",
    description: "Build little sancastle on the beach and put mini American flags in them",
    category: "Outside",
    materials: ["Beach Sand", "shovel", "mini American flags on sticks"],
  },
  {
    month: "August",
    title: "Vist the Pet Store",
    description: "Visit the pet store and look at all the animals, their food, and habitat needs",
    category: "Outside",
    materials: ["Transportation"],
  },
  {
    month: "September",
    title: "Puppet Show",
    description: "Use  puppets to put on a puppet show at home",
    category: "Arts & Crafts",
    materials: ["puppets", "Fun voices"],
  },
  {
    month: "October",
    title: "Pumpkin Patch Farm visit",
    description: "Visit at pumpkin patch on a farm and see the different size pumpkins and  farm animals",
    category: "Outside",
    materials: ["Transportation"], // Corrected spelling
  },
  {
    month: "November",
    title: "Shop at a Craft Fair",
    description: "Walk through a carf fair and ask the child to describe the gifts on the table and incurrage them to ask questions to the vendors",
    category: "Outside",
    materials: ["Transportation"],
  },
  {
    month: "December",
    title: "Make Christmas Cards",
    description: "Make Christmas cards and go out to the stores and public places to give them out to people",
    category: "Arts & Crafts",
    materials: ["Paper", "Crayons","Stickets","Envelopes"],
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
