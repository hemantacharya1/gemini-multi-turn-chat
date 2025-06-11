import readline from 'readline';
import * as genai from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'your-api-key-here';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Setup Gemini
const genAI = new genai.GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Helper to get user input
const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

// Main interactive function
async function runChat() {
  const tempInput = await ask('Set temperature (0.0 - 1.0, default 0.7): ');
  const temperature = parseFloat(tempInput) || 0.7;

  const turnInput = await ask('How many conversation turns do you want? (e.g. 2 or 3): ');
  const turns = parseInt(turnInput) || 2;

  const chat = await model.startChat({ history: [] });

  let finalResponse = '';

  for (let i = 1; i <= turns; i++) {
    const userInput = await ask(`User [${i}]: `);
    const result = await chat.sendMessage(userInput, {
      generationConfig: { temperature }
    });

    finalResponse = result.response.text();
    console.log(`Gemini [${i}]: ${finalResponse}\n`);
  }

  console.log('Final response from Gemini:');
  console.log(finalResponse);

  rl.close();
}

runChat();
