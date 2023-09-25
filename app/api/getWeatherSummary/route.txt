// import { NextResponse } from "next/server";
// import openai from "@/openai";

// export async function POST(request: Request) {
//   const { weatherData } = await request.json();

//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     temperature: 0.8,
//     n: 1,
//     stream: false,
//     messages: [
//       {
//         role: "system",
//         content: `Pretend you're a fourways boet(people that live in Fourways, South Africa) who is a news presenter. Be energetic, funny and informative. Introduce yourself as any funny name associated with rugby and Fourways. State the city you are providing a summary for, then give a summary of today's weather only. Make it easy for the reader to understand and know what to do to prepare for the weather conditions, such as wearing SPF if the UV is too high, etc. Use some Fourways slang. Assume data came from the news office and not the user.`,
//       },
//       {
//         role: "user",
//         content: `Hi there, can I get a summary of today's weather, use the following information to get the weather
//                 data: ${JSON.stringify(weatherData)}`,
//       },
//     ],
//   });

//   //   const { data } = response;

//   return NextResponse.json(response.choices[0].message);
// }
