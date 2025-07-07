import Replicate from "replicate";
import dotenv from "dotenv";
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function analyzeImageWithPrompt(imageUrl, prompt) {
  const stream = replicate.stream(
    "yorickvp/llava-13b:80537f9eead1a5bfa72d5ac6ea6414379be41d4d4f6679fd776e9535d1eb58bb",
    {
      input: {
        image: imageUrl,
        prompt: prompt
      }
    }
  );

  let result = "";
  for await (const event of stream) {
    result += event.toString();
  }

  return result.trim();
}
