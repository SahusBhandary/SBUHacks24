import{ Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-luARjjyTeb5FLVVoL8Ok8PRy",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        {role: "user", content: "Hello World"},
    ]

})

console.log(completion.data.choices[0].message);
