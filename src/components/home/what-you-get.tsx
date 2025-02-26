import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
const features = [
  {
    title: "Compliance simplified",
    description:
      "Build a comprehensive database of complex profiles using our artificial intelligence.",
    image: "/background.png"
  },
  {
    title: "Flexible & customizable",
    description:
      "Quickly replenish your sales pipeline with new clients based on sales signals.",
    image: "/background2.jpeg"
  },
];

export default function WhatYouGet() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">
        What we can do for you
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-none rounded-xl shadow-none">
            <CardContent className="pt-6">
                {/* TODO: FIX THE IMAGES AND MAKE THEM BETTER */}
               <Image src={feature.image} alt="image" width="128" height="128" />
              <CardHeader className="p-0">
                <CardTitle className="text-2xl font-bold mb-4">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <p className="text-lg text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
