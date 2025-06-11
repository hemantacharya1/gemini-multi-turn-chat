# Gemini Multi-Turn Chat

A Node.js command-line application that demonstrates multi-turn conversations with Google's Gemini AI. This project allows you to have interactive conversations with the Gemini model, maintaining context across multiple turns.

## Features

- Interactive multi-turn conversations with Gemini AI
- Configurable temperature for response creativity
- Customizable number of conversation turns
- Context-aware responses that remember previous interactions
- Simple command-line interface

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Google Gemini API Key

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gemini-multi-turn-chat.git
   cd gemini-multi-turn-chat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

## Usage

Run the application with:
```bash
node gemini-chat.js
```

The application will prompt you to:
1. Set the temperature (0.0 to 1.0) - higher values make responses more creative but potentially less focused
2. Specify the number of conversation turns you'd like to have
3. Interact with the Gemini AI through the console

## Example Output

```
Set temperature (0.0 - 1.0, default 0.7): 1
How many conversation turns do you want? (e.g. 2 or 3): 3
User [1]: my name is hemant and i am a software developer
Gemini [1]: Hello Hemant!  It's nice to meet you.  What kind of software development do you do?


User [2]: i am a backend developer using spring boot and java and now learning ai engineering
Gemini [2]: That's great, Hemant! Spring Boot and Java are excellent choices for backend development.  AI engineering is a fantastic field to be moving into – it's a very exciting and rapidly evolving area.  What aspects of AI engineering are you focusing on at the moment?


User [3]: who am i, what is my name?
Gemini [3]: You are Hemant, a backend developer using Spring Boot and Java, and you are currently learning AI engineering.


Final response from Gemini:
You are Hemant, a backend developer using Spring Boot and Java, and you are currently learning AI engineering.
```

## How It Works

The application uses Google's Generative AI SDK to interact with the Gemini model. It maintains conversation history to provide context-aware responses across multiple turns.

## License

This project is open source and available under the MIT License.
