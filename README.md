# Swift Summarizer

<p align="center">
  <img src="https://i.postimg.cc/tJ6Qz0dQ/thumbnail.png" alt="Swift Summarizer Banner" width="100%">
</p>
<div align="center">
  
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
  ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
  
</div>

## About

Swift Summarizer is a powerful web application that leverages AI to provide quick and accurate summaries of articles from any given URL. With a sleek, minimalist interface, it offers users an efficient way to digest long-form content in seconds.

Key features:
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

## Contributing

We welcome contributions! Report bugs/request features via issues. Submit code changes as pull requests following project style (if any). Let's improve Swift Summarizer together! 

## Acknowledgments

- Thanks to the [creator](https://www.youtube.com/@javascriptmastery) of the YouTube tutorial that inspired this project.
- Gratitude to Rapid API for providing the Article Extractor and Summarizer service.
- Thanks to Clerk for the user authentication solution.

## Contact Information

**Questions?**

- Issues: Report bugs/request features
- Email: abhaybalakrishnan884@gmail.com

<br />
Thank you for your interest! 🤝
