import Image from "next/image";
const features = [
  {
    headline:
      "Build a comprehensive database of complex profiles using our artificial intelligence.",
    body1: "Submit your Ideal Customer Profile (ICP) in plain language",
    body2: "Use boundless filters to refine your ICP",
    description: "Get the prospects base ideally matched with the ICP.",
    image: "/background.png",
  },
  {
    headline:
      "Quickly replenish your sales pipeline with new clients based on sales signals.",
    body1: "Submit your Ideal Customer Profile (ICP) in plain language",
    body2: "Define the sales signals",
    description:
      "Get enriched leads with contact details into your inbox, refreshed and updated in real-time.",
    image: "/background2.jpeg",
  },
];

export default function WhatYouGet() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl mb-8 text-center">
        Karhuno AI at a glance
      </h2>
      <div>
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-9 space-x-4 my-8">
            <p className="w-full h-full font-bold col-span-1 text-xl">
              {feature.headline}
            </p>
            <div className="p-2 mx-2 col-span-1">
              <Image
                className="object-contain"
                src={feature.image}
                alt={feature.headline}
                width={148}
                height={148}
              />
            </div>
            <div className="relative max-w-xl w-full col-span-3">
              <div className="relative bg-purple-600 text-white p-8 text-center flex items-center justify-center min-h-4 mx-4 arrowShape">
                <h5 className="text-xs lg:text-base m-4  font-medium leading-tight">
                  Submit your Ideal Customer Profile (ICP) in plain language
                </h5>
              </div>
            </div>
            <div className="relative max-w-xl w-full col-span-3">
              <div className="relative bg-purple-400 text-white p-8 text-center flex items-center justify-center min-h-4 mx-4 arrowShape">
                <h5 className="text-xs lg:text-base m-4 font-medium leading-tight">
                  Submit your Ideal Customer Profile (ICP) in plain language
                </h5>
              </div>
            </div>
            <div className="col-span-1">
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
