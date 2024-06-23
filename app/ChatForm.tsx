// "use client";

// import React, { useState } from 'react';

// const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

// // Mocked API handler function
// async function generateContent(prompt: string): Promise<string> {
//   const { GoogleGenerativeAI } = await import('@google/generative-ai');

//   const genAI = new GoogleGenerativeAI(apiKey);

//   // Initialize the Gemini model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   // Generate content
//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = await response.text();
//   return text;
// }

// const ChatForm = () => {
//   const [prompt, setPrompt] = useState('');
//   const [story, setStory] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const text = await generateContent(prompt);
//       setStory(text);
//     } catch (error) {
//       console.error('Error:', error);
//       setStory('An error occurred. Please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="ml-64 chat-ui p-4">
//       <h1 className="text-2xl font-bold mb-4">Generative AI Content</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           className="text-black p-2 w-full border rounded-lg mb-4"
//           type="text"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Enter a prompt"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Loading...' : 'Generate Story'}
//         </button>
//       </form>
//       {story && <div className="mt-4 whitespace-pre-wrap">{story}</div>}
//     </div>
//   );
// };

// export default ChatForm;
