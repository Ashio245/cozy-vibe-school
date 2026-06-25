export const lessons = [
  {
    slug: "lesson-0-your-first-vibe",
    title: "Lesson 0: Your First Vibe",
    description: "Learn what vibe coding is and practice writing an idea in plain English. No setup or tools needed.",
    category: "concept",
    order: 0,
    difficulty: "Beginner",
    estimatedMinutes: 5,
    prompt: null,
    nextSlug: "lesson-1-meet-antigravity",
    introText: "Welcome to Cozy Vibe School! Let's start with the absolute basics. You don't need a single piece of software installed today.",
    sections: [
      {
        title: "What is Vibe Coding?",
        paragraphs: [
          "Traditionally, building a website or app meant learning complex programming syntax — symbols, logic, and files. But with 'Vibe Coding', you write in everyday language. You describe what you want, and an AI agent takes care of compiling the code, placing files, and generating the result.",
          "Think of it like ordering at a cafe. You don't need to know the chemical formula of milk or the mechanics of an espresso machine. You just say: 'I would like an iced oat latte, please.' Vibe coding works the same way: you ask for what you want, and the AI agent behaves like the barista."
        ]
      },
      {
        title: "Your First Exercise: Describe an Idea",
        paragraphs: [
          "To vibe code, you write instructions called 'vibe prompts'. A good prompt describes two simple things: what the app should do, and how it should look.",
          "Try writing down an idea in the box below. Don't worry about being perfect or using technical words! Just talk like you're explaining a sketch to a friend."
        ]
      }
    ]
  },
  {
    slug: "lesson-1-meet-antigravity",
    title: "Lesson 1: Meet Antigravity",
    description: "Discover the friendly Google AI IDE where you chat to build websites and web apps.",
    category: "concept",
    order: 1,
    difficulty: "Beginner",
    estimatedMinutes: 5,
    prompt: null,
    nextSlug: "lesson-2-opening-the-sandbox",
    introText: "Now that you understand vibe coding, let's look at the tool you'll use to do it: Antigravity.",
    sections: [
      {
        title: "What is Antigravity?",
        paragraphs: [
          "Antigravity is a special AI-powered IDE (Integrated Development Environment) created by Google. In fact, it is the very application you are using to view this school page right now! Instead of showing you a blank screen and thousands of lines of code, it provides a friendly chat box on the left, your files in the center, and a live preview on the right.",
          "You talk to it just like a chat application. When you ask it to change something, you can watch it write code files on your computer and update the browser preview instantly."
        ]
      },
      {
        title: "The Three Areas of Antigravity",
        paragraphs: [
          "Since you have Antigravity open, take a look at the three main sections of your editor window:",
          "1. The Chat Area (Left): This is where you talk to the AI assistant. You type what you want to change, and read the assistant's updates.",
          "2. The Files Area (Center): This shows the folder on your computer. The AI assistant creates and modifies these files for you. You don't need to write them yourself, but it's neat to watch them change!",
          "3. The Preview Area (Right): This is your live app. As soon as the assistant makes a file change, the preview refreshes to show the changes immediately (just like how you are reading this course on the preview side!)."
        ]
      }
    ]
  },
  {
    slug: "lesson-2-opening-the-sandbox",
    title: "Lesson 2: Your First Tiny App",
    description: "Open the sandbox and paste a tiny prompt to see a real website appear in seconds.",
    category: "tool",
    order: 2,
    difficulty: "Beginner",
    estimatedMinutes: 10,
    prompt: "Create a simple single-page website for a cozy tea cafe called 'Sip & Read'. It should have a warm peach background, a header that says 'Sip & Read', a list of three signature teas with description and prices, and a friendly welcome note. Use soft, friendly font styles.",
    nextSlug: "lesson-3-making-changes",
    introText: "Let's put our knowledge to the test! Go ahead and open a folder inside your Antigravity IDE to build a cozy cafe page.",
    sections: [
      {
        title: "Step 1: Open Your Folder in Antigravity",
        paragraphs: [
          "In your Antigravity IDE, select the 'Open Folder' button. Pick an empty folder on your computer that you created for this cafe project (e.g. named `sip-and-read`).",
          "Once selected, you'll see the three workspace columns active and pointing to your empty folder, ready to start."
        ]
      },
      {
        title: "Step 2: Copy your first Vibe Prompt",
        paragraphs: [
          "Below is a pre-written prompt. It describes a tea cafe website in simple words. Copy this prompt using the button below, then paste it directly into your Antigravity chat box on the left and hit Enter!"
        ]
      },
      {
        title: "Step 3: Watch it build!",
        paragraphs: [
          "The AI assistant will start writing files (like `index.html` and `styles.css`) directly inside your folder. You'll see the Sip & Read cafe website load in your preview window on the right within a few seconds!"
        ]
      }
    ]
  },
  {
    slug: "lesson-3-making-changes",
    title: "Lesson 3: Making Changes",
    description: "Learn how to tweak and refine your cafe page by telling Antigravity what to edit.",
    category: "tool",
    order: 3,
    difficulty: "Beginner",
    estimatedMinutes: 8,
    prompt: "Change the background of the cafe page to a light sage green (#f0f5f2). Then, add a new tea to the menu called 'Chamomile Meadow' for $4.50 with the description: 'A calming chamomile brew with organic lavender buds and local honey.' Make sure the new menu item matches the list style.",
    nextSlug: "lesson-4-adding-a-journal",
    introText: "A key part of vibe coding is refining. You don't have to get everything perfect in your first prompt! You can change anything by chatting.",
    sections: [
      {
        title: "Tweaking Your Active Project",
        paragraphs: [
          "Since your project folder is already open in the Antigravity IDE, making changes is as simple as chatting with the AI assistant. You don't need to edit any code files directly.",
          "Let's add a calming chamomile tea and change the background to a lovely sage green. Copy the prompt below, paste it into your active project's chat box, and hit send!"
        ]
      }
    ]
  },
  {
    slug: "lesson-4-adding-a-journal",
    title: "Lesson 4: Adding a Live Feature",
    description: "Add an interactive button to the cafe page that displays a daily recipe when clicked.",
    category: "tool",
    order: 4,
    difficulty: "Intermediate",
    estimatedMinutes: 12,
    prompt: "Add a new section to the bottom of the cafe website called 'Daily Recipe'. Inside this section, add a button that says 'Show Today's Recipe'. When a user clicks it, randomly show one of three simple recipes: '1. Lemon Mint Iced Tea', '2. Honey Chamomile Latte', or '3. Spiced Chai'. Ensure the recipe text displays below the button and matches the cozy green color theme.",
    nextSlug: "lesson-5-going-further",
    introText: "Websites are more fun when users can interact with them. Let's add a button that does something dynamic when clicked.",
    sections: [
      {
        title: "Adding Logic to Your Project",
        paragraphs: [
          "In traditional programming, making things interactive requires writing Javascript. In vibe coding, you just describe the behavior you want.",
          "We will ask the assistant to add a button that reveals a random recipe when clicked. Copy the prompt below, paste it in your active Antigravity workspace chat, and test the button in the preview window on the right!"
        ]
      }
    ]
  },
  {
    slug: "lesson-5-going-further",
    title: "Lesson 5: Your Graduation Project",
    description: "Build your own custom digital plant journal and save your progress.",
    category: "tool",
    order: 5,
    difficulty: "Intermediate",
    estimatedMinutes: 15,
    prompt: "Create a web app for tracking house plants called 'Leafy Log'. It should have a soft warm white background, a nice header, a section to input a plant name and click 'Add Plant', and a list showing the added plants. Each plant in the list should have a 'Watered Today' button which shows a tiny checkmark and green text when clicked. Add some friendly message if there are no plants yet.",
    nextSlug: "lesson-6-the-art-of-good-prompts",
    introText: "Congratulations on reaching the final lesson! You are ready to build a tracking application from scratch.",
    sections: [
      {
        title: "Starting Leafy Log",
        paragraphs: [
          "In this final lesson, you will build a plant tracking app. In your Antigravity IDE, open a brand new empty folder on your computer named `leafy-log` and paste this graduation prompt in the chat.",
          "You'll create an interactive database-like tracker for watering house plants. Once the builder is finished, test it out and feel free to ask for extra tweaks like dark mode!"
        ]
      }
    ]
  },
  {
    slug: "lesson-6-the-art-of-good-prompts",
    title: "Lesson 6: The Art of Good Prompts",
    description: "Learn how to write clear, effective vibe prompts using our 3-part formula.",
    category: "advanced",
    order: 6,
    difficulty: "Advanced",
    estimatedMinutes: 10,
    prompt: null,
    nextSlug: "lesson-7-guardrails",
    introText: "Now that you've built a few apps with Antigravity, let's learn how to level up your vibe prompts. The words you choose make a huge difference in the final code.",
    interactiveType: "prompt-polish",
    sections: [
      {
        title: "Why Prompt Quality Matters",
        paragraphs: [
          "When vibe coding, the AI builder reads your prompt exactly like a chef reads a recipe. If you write: 'Make a coffee app,' the AI has to guess everything else. It might give you a site for a cafe, a recipe blog, or a bean inventory tracker.",
          "To get exactly what you want, you should be descriptive and structured. A great vibe prompt doesn't need computer code or jargon. It just needs clarity, layout styling instructions, and simple behavioral details."
        ]
      },
      {
        title: "The 3-Part Prompt Formula",
        paragraphs: [
          "A professional vibe prompt usually contains three parts:",
          "1. Role & Purpose: What is this app? (e.g. 'A simple study timer for students')",
          "2. Visual Design: How does it look? Be specific about colors, fonts, and spacing. (e.g. 'Use a warm cream background, soft brown text, and cozy rounded boxes')",
          "3. Interactivity & Logic: What happens when the user clicks or types? (e.g. 'When I click Start, a 25-minute timer should count down in minutes and seconds, showing a checkmark when done.')"
        ]
      },
      {
        title: "Try It: The 'Prompt Polish' Exercise",
        paragraphs: [
          "Let's practice! Below is a weak prompt that a beginner might write. In the text area, try rewriting it using our 3-part formula to make it clearer and more descriptive, then click 'Reveal Polish' to see how we'd improve it."
        ]
      }
    ]
  },
  {
    slug: "lesson-7-guardrails",
    title: "Lesson 7: Guardrails & Limitations",
    description: "Understand what AI can and cannot build, and how to recover when it gets stuck.",
    category: "advanced",
    order: 7,
    difficulty: "Advanced",
    estimatedMinutes: 8,
    prompt: null,
    nextSlug: "lesson-8-safety-and-risks",
    introText: "AI is incredibly capable, but it is not magic. Knowing its limitations will save you hours of confusion.",
    interactiveType: "ai-quiz",
    sections: [
      {
        title: "What AI Does Well",
        paragraphs: [
          "Modern AI builders like Antigravity excel at standard web tasks. They are great at creating layouts, styling with CSS, setting up simple interactive buttons, and making forms (like inputting a name to add a plant).",
          "If you ask for common website structures, tools, or games, the AI will usually build them beautifully in a single try."
        ]
      },
      {
        title: "Where AI Struggles",
        paragraphs: [
          "AI builders start to struggle when you ask for:",
          "• Extremely large features all at once (e.g. 'Build a complete Facebook clone')",
          "• Precise custom animations or exact pixel-perfect matches without detailed descriptions",
          "• Heavy server-side logic like secure credit card transactions or live multi-player databases",
          "• Conflicting instructions (e.g. asking for a 'dark minimalist layout' and then a 'bright, colorful, complex dashboard' in the same prompt)"
        ]
      },
      {
        title: "How to Recover When it Gets Stuck",
        paragraphs: [
          "If Antigravity writes code that breaks or displays error messages, don't panic! Here's how to recover:",
          "1. Ask the Chat: Simply copy the error message or describe what's wrong (e.g. 'The delete button doesn't work when clicked, please fix it'). The assistant will rewrite the code to correct it.",
          "2. Break it Down: Instead of asking for 5 features, ask for 1 at a time. Let it build, verify it works, then ask for the next.",
          "3. Use Git: Antigravity works on files on your computer. You can use version control to discard changes if a prompt goes completely wrong."
        ]
      },
      {
        title: "Test Your Knowledge",
        paragraphs: [
          "Let's see if you can spot which tasks are easy for an AI builder and which ones are tricky or need extra care. Read each scenario below and make your guess!"
        ]
      }
    ]
  },
  {
    slug: "lesson-8-safety-and-risks",
    title: "Lesson 8: Stay Safe — Risks & Precautions",
    description: "Learn vital safety habits for vibe coding, including API key hygiene and security basics.",
    category: "advanced",
    order: 8,
    difficulty: "Advanced",
    estimatedMinutes: 8,
    prompt: null,
    nextSlug: "lesson-9-rate-limits-and-credits",
    introText: "Building apps with AI is fast and fun, but it comes with responsibilities. Let's cover key safety guidelines.",
    interactiveType: "checklist",
    sections: [
      {
        title: "You are the Captain",
        paragraphs: [
          "When you build an app using vibe coding, the AI writes the code, but *you* are the owner. If the app has security flaws or breaks for a user, you are responsible. Because AI writes code by predicting patterns, it can sometimes introduce outdated libraries or security gaps.",
          "Always test your app carefully. Click every button, fill every form, and double-check that the behavior matches your expectations."
        ]
      },
      {
        title: "Never Share Secrets",
        paragraphs: [
          "This is the golden rule of software safety: **Never put private keys, passwords, or API credentials into your prompts.**",
          "If you are building an app that talks to a weather service or OpenAI, the AI assistant might ask for an 'API Key'. If you paste that key directly into your prompt, it might get written into files that are visible to the public. Instead, ask the assistant: 'How do I use environment variables (.env) to keep my keys safe?'"
        ]
      },
      {
        title: "Be Wary of 'Hallucinations'",
        paragraphs: [
          "Sometimes an AI builder will tell you: 'I have added payment support' or 'I secured the login page.' However, the code behind it might just be a mockup that looks correct but doesn't actually secure anything. Always verify by asking questions like: 'Is this login page actually hashing passwords, or is it just a prototype?'"
        ]
      },
      {
        title: "Your Vibe Coding Safety Pledge",
        paragraphs: [
          "Before graduating, check off the key security and caution practices below to show you're ready to build safe, secure applications in the real world!"
        ]
      }
    ]
  },
  {
    slug: "lesson-9-rate-limits-and-credits",
    title: "Lesson 9: Rate Limits & Credits",
    description: "Learn about message limits, why they exist to keep the service free, and what to do when you run out of credits.",
    category: "advanced",
    order: 9,
    difficulty: "Advanced",
    estimatedMinutes: 6,
    prompt: null,
    nextSlug: "lesson-10-launching-to-the-world",
    introText: "AI builders take a lot of server brainpower. Let's understand rate limits, credit limits, and how to pace your building sessions.",
    interactiveType: "cooldown-simulator",
    sections: [
      {
        title: "Why is there a Limit?",
        paragraphs: [
          "When you type a prompt in Antigravity, a large AI model reads your description, updates several files, and compiles the project. This process takes a massive amount of computing power.",
          "To keep the service fast, reliable, and completely free for everyone, Google has hourly and daily limit safety valves (known as 'Rate Limits' or 'Quotas')."
        ]
      },
      {
        title: "What if You See a 'Limit Reached' Error?",
        paragraphs: [
          "If you write many prompts in a short period, you might see a message saying: 'You have reached your limit' or 'Out of free credits.'",
          "When this happens: **Don't panic, and you don't need to pay anything.** The service is free. The simplest solution is to **just wait**. Quota limits reset automatically, usually within an hour or at midnight. Let it rest, grab a cup of tea, and come back fresh!"
        ]
      },
      {
        title: "How to Check Your Current Quota Limit",
        paragraphs: [
          "If you want to see exactly how many credits you have left or find out when your limits refresh, you can check your quota within the settings:",
          "1. Look at the top right corner of the Antigravity IDE application window and click on the **Gear Settings icon ⚙️**.",
          "2. From the dropdown menu, select **Open Antigravity IDE User Settings**.",
          "3. In the settings tab that opens, select **Models** from the left-hand menu. Here, you'll see a list of active AI Models, your remaining quota progress bars, and exactly when they will refresh!"
        ]
      },
      {
        title: "Tips to Save Your Credits",
        paragraphs: [
          "To make your credits last longer, follow these smart prompting habits:",
          "• Group Your Requests: Instead of sending 5 single messages for small changes, combine them. Say: 'Make the title brown, increase the font size, and add a bottom margin.'",
          "• Check the Preview: Before sending your next request, test the live preview first to verify what actually needs changing.",
          "• Take it Step-by-Step: Plan your steps in a notebook or simple text file so you don't waste edits backtracking."
        ]
      }
    ]
  },
  {
    slug: "lesson-10-launching-to-the-world",
    title: "Lesson 10: Launching to the World",
    description: "Learn the simplest possible way to publish your project using GitHub and Vercel, and paste your final links to graduate.",
    category: "advanced",
    order: 10,
    difficulty: "Advanced",
    estimatedMinutes: 12,
    prompt: null,
    nextSlug: null,
    introText: "Right now, your custom website only exists on your computer. Let's make it live on the web so anyone with a phone or computer can visit it!",
    interactiveType: "deploy-project",
    sections: [
      {
        title: "What are GitHub and Vercel?",
        paragraphs: [
          "To put a website on the internet, you need two simple accounts:",
          "1. GitHub: Think of this like Google Drive or Dropbox, but built specifically for project folders. It is a free website that saves your folder safely in the cloud so other services can read it.",
          "2. Vercel: This is a publishing service. It takes your files from GitHub and turns them into a real, live link (like a phone number for your website) that anybody can visit."
        ]
      },
      {
        title: "Step 1: Save Your Folder to GitHub (The Cloud Locker)",
        paragraphs: [
          "First, we need to upload your project folder to the cloud. You don't need any complex command-line tool. There are two simple ways to do it:",
          "• The Chat Way (Easiest): Open your project folder in the Antigravity IDE. Type in the chat box on the left: 'Create a new GitHub repository for this project and upload my files.' Antigravity will pop up a window asking you to authorize your GitHub account, and then upload all files automatically!",
          "• The Drag & Drop Way: If you prefer using your browser, go to github.com and sign up for a free account. Click the green 'New' button to create a folder locker (called a 'repository'). Give it a name like 'my-first-site', then simply drag and drop your project files directly from your computer into the website window to upload them!"
        ]
      },
      {
        title: "Step 2: Connect to Vercel (The Live Publisher)",
        paragraphs: [
          "Now that your files are in the cloud, let's publish them live to the web:",
          "1. Go to vercel.com and sign up for a free Hobby account. Click 'Continue with GitHub' to login using the GitHub account you just made.",
          "2. Once inside your Vercel Dashboard, click the 'Add New' button on the top right, and select 'Project'.",
          "3. You will see your GitHub profile connected. Look at the list, find your repository (e.g. 'my-first-site'), and click the 'Import' button next to it.",
          "4. Click the blue 'Deploy' button. Wait about 15 seconds while a tiny rocket animation loads. That's it! Vercel will give you a live link (like 'my-first-site.vercel.app') that you can copy and send to your friends!"
        ]
      },
      {
        title: "The Graduation Project: Publish Your Vibe App",
        paragraphs: [
          "To graduate from Vibe Coding School, create a new empty folder on your computer, open it in Antigravity, and vibe code any small app you want (e.g. a cozy timer, a daily journal, or a personal list).",
          "Once you are happy with it, upload it to GitHub, deploy it to Vercel, and paste both links below to receive your graduation certificate!"
        ]
      }
    ]
  }
];

export function getLessonBySlug(slug) {
  return lessons.find((l) => l.slug === slug);
}
