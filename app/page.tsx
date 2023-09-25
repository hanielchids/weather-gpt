"use client";
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7B] p-10 flex flex-col justifyy-center items-center">
      <div className="p-10 bg-white container max-w-4xl mx-auto rounded shadow-lg">
        <Text className="text-xl font-bold text-center mb-10">
          GPT Weather AI
        </Text>
        <Subtitle className="text-sm text-center">
          Next.js, Tailwind, Tremor, Stepzen and Open AI
        </Subtitle>

        <Divider className="my-10" />

        <div className="container p-10 bg-gradient-to-br from-[#394F68] to-[#183B7B]">
          <CityPicker />
        </div>
      </div>
    </div>
  );
}
