import OpenAI from "openai";


const openai = new OpenAI({
    organization: "org-luARjjyTeb5FLVVoL8Ok8PRy",
    apiKey: "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",
});

const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {role: "user", content: "What is 2 + 2?"},
    ]

})

console.log(completion.choices[0].message);
