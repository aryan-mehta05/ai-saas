"use client";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

const testimonials = [
  {
    name: "Aryan",
    avatar: "A",
    title: "AI Engineer",
    description: "Best integration of all the supreme AI services out there!",
  },
  {
    name: "Tanish",
    avatar: "T",
    title: "Tax Advisor",
    description: "This app even helps me write convincing emails to my clients!",
  },
  {
    name: "Harsh",
    avatar: "H",
    title: "Product Manager",
    description: "I literally generated all the images in my recent PPT using GENIUS!",
  },
  {
    name: "Nishant",
    avatar: "N",
    title: "Entrepreneur",
    description: "I'm still learning to use AI tech, but this UI is seemless!",
  },
  {
    name: "Suhashi",
    avatar: "S",
    title: "Marketting Manager",
    description: "Yes, yes yes! This is exactly the tool I needed to make my services top notch & lightening fast!",
  },
  {
    name: "Mokshit",
    avatar: "M",
    title: "Business Owner",
    description: "I didn't know much about AI. I'm endorsing my friends app because the chat module helped me learn!",
  },
  {
    name: "Hemali",
    avatar: "H",
    title: "Author",
    description: "This app generates storylines almost as breathtaking as my imagination! Wait on my next project :)",
  },
  {
    name: "Aditi",
    avatar: "A",
    title: "Event Manager",
    description: "I'm all the way in Canada using this app, and there's NO LATENCY ISSUES! Wow!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};