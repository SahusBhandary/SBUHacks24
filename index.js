import { Express } from "express";
importOpenAI from "openai";


const openai = new OpenAI({
    organization: "org-luARjjyTeb5FLVVoL8Ok8PRy",
    apiKey: "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",
});

const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {role: "user", content: "Hello World"},
    ]

})

console.log(completion.choices[0].message);
