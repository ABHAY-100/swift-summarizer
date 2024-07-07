> **Swift Summarizer (WIP)** ️ - This project is under active development, and we're constantly improving its capabilities and adding exciting new features! Stay tuned for updates.

# Swift Summarizer

This web application uses AI to quickly create concise summaries of articles from any URL. Paste a link, click a button, and get the gist of the content instantly. This approach keeps the description clear, concise, and focuses on the core functionality: summarizing articles quickly and efficiently.

**Key features:**
- Instant article summarization
- Clean, user-friendly interface
- Secure authentication system
- History tracking for easy access to past summaries


## Technologies Used

- React: JavaScript library for building user interfaces
- Vite: Modern build tool for rapid development
- Tailwind CSS: Utility-first CSS framework for rapid styling
- Redux Toolkit: State management library for complex applications
- Clerk: User authentication platform
- Rapid API: Article Extractor and Summarizer


## Getting Started

**Prerequisites:**

- Git: A version control system for tracking changes in code. You can download it from https://git-scm.com/downloads.
- Node.js (version 14 or later): https://nodejs.org/en

<br />

**Installation:**

1. Clone the repository:
```bash
  git clone https://github.com/ABHAY-100/swift-summarizer.git
```

2. Navigate to the project directory:
```bash
cd swift-summarizer
```

3. Install dependencies:
```bash
npm install
```

<br />

**Setting Environment Variables:**

1. Create a file named ``` .env.local ``` in the project root directory.
   
> ***Important:*** *exclude this file from version control using ``` .gitignore ```*

2. Inside the ``` .env.local ``` file, add the following environment variable, replacing ``` <YOUR_API_KEY> ```  with your actual Rapid API key for the chosen summarization service:
```env
VITE_RAPID_API_ARTICLE_KEY=<YOUR_API_KEY>
VITE_CLERK_PUBLISHABLE_KEY=<YOUR_API_KEY>
```

> ***Important:*** *Never commit your API key to a public repository.*

> ***Note:*** *You can obtain your API keys from their respective websites: [Rapid API](https://rapidapi.com) and [Clerk](https://clerk.dev/).*

<br />

**Usage:**

1. Start the development server:
```bash
npm run dev
```
2. Open http://localhost:3000 in your browser.
3. Paste the URL of the article you want to summarize in the input field.
4. Click the "Send"  button.
5. The application will display a concise summary of the article.

##  API Reference

abt the api

## Contributing

We welcome contributions to improve Swift Summarizer! To contribute, please follow these guidelines:

- Report bugs or request features by opening an [issue](https://github.com/ABHAY-100/swift-summarizer/issues).
- Submit code changes as pull requests following the project's code style.

## Acknowledgments

I'm thrilled to express my gratitude to those who supported me throughout this project. It's been an incredible journey this summer, diving headfirst into the world of frontend development and bringing this project to life. The experience has been both challenging and rewarding, and I'm grateful for the guidance and support that helped me along the way.

## Contact Information

**Have questions or suggestions?**

- Feel free to contact us via email: abhaybalakrishnan884@gmail.com
- Connect with me on [LinkedIn](https://in.linkedin.com/in/abhaybalakrishnan)

<br />
We value your feedback and contributions! If you find Swift Summarizer useful, please consider starring the repository (★) on GitHub to show your support. Let's build something great together with Swift Summarizer.
