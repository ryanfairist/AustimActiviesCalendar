// src/app/activity/[month]/page.tsx

"use client";

import React, { useState } from "react"; // Import useState
import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input"; // Import Input
import { Calendar } from "@/components/ui/calendar"; // Import Calendar

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

export default function ActivityPage() {
  const { month } = useParams();
  const [zipCode, setZipCode] = useState(""); // State for zip code
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined); // State for selected date

  const activity = activities.find((activity) => activity.month === month);

  if (!activity) {
    return <div>Activity not found</div>;
  }

  const handleWeatherLookup = () => {
    // Placeholder for weather API call
    console.log("Looking up weather for:", zipCode, "on", selectedDate);
    // Here you would typically make an API call to a weather service
  };

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