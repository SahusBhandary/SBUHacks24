import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


const openai = new OpenAI({
    organization: "org-luARjjyTeb5FLVVoL8Ok8PRy",
    apiKey: "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",
});

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {

    const { message } = req.body;

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "user", content: `${message}`},
        ]
    })

    res.json({
        completion: completion.choices[0].message
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
