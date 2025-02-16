
import { createOpenAI } from '@ai-sdk/openai'
import {generateText} from 'ai'

export async function POST(req:Request,){
    const openai = createOpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY})
    const {prompt}:{prompt:string}= await req.json();
   const{text}=await generateText(
        {   
            model : openai('gpt-4o',),
            system:"Your are helpful Ai assistant",
            prompt
        }
    )
    return Response.json({text})
}
