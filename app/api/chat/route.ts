import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-2.0-flash-exp"),
    messages: messages,
    system: "You are a knowledgeable and professional financial assistant chatbot. Your role is to answer financial questions only, such as budgeting, investments, loans, credit, taxes, savings, and other related topics. Provide accurate, concise, and clear information, ensuring compliance with financial regulations. Avoid unrelated topics and always maintain a professional tone.",
  });

  


  console.log(result)

  return result.toDataStreamResponse();
}