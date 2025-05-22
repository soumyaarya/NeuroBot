const dotenv = require("dotenv");
dotenv.config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function test() {
  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });
    const result = await model.generateContent("Hello, how are you?");
    const response = await result.response;
    console.log("✅ Gemini API Response:", response.text());
  } catch (err) {
    console.error("❌ Gemini API Error:", err);
  }
}

test();
