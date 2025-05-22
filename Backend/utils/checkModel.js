const dotenv = require("dotenv");
dotenv.config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.GEMINI_API_KEY;

const checkModels = async () => {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const models = await genAI.listModels();
    console.log("Available Gemini models:");
    models.models.forEach((model) => {
      console.log(`- ${model.name}`);
    });
  } catch (err) {
    console.error("Error listing models:", err.message);
  }
};

checkModels();
