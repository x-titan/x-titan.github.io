"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ImageDemo() {
  return (
    <Card className="w-full max-w-sm overflow-hidden pt-0">
      <div className="relative aspect-video w-full">
        <Image
          src="/demo/mountain-landscape.png"
          alt="Layered mountain ridgelines fading into mist at golden hour"
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>Golden Ridgelines</CardTitle>
          <Badge variant="secondary">Nature</Badge>
        </div>
        <CardDescription className="line-clamp-2">
          A serene mountain landscape captured at golden hour, with soft mist
          settling between layered peaks.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}
