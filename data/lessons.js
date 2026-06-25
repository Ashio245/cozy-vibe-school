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
    description: "Discover the friendly Google AI tool where you chat to build websites and web apps.",
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
          "Antigravity is a special workspace created by Google. Instead of showing you a blank screen and thousands of lines of code, it shows you a friendly chat box.",
          "You talk to it just like a chat application, and on the right side of the screen, you see your website appear instantly. When you ask it to change something, you can watch it edit the files and update the preview live."
        ]
      },
      {
        title: "The Three Areas of Antigravity",
        paragraphs: [
          "When you open Antigravity, there are three main sections to keep an eye on:",
          "1. The Chat Area (Left): This is where you talk to the AI agent. You type what you want to change, and read the agent's friendly updates.",
          "2. The Files Area (Center): This is where the files are stored. The AI agent creates and changes them for you. You don't need to edit them yourself, but it's neat to watch them change!",
          "3. The Preview Area (Right): This is your live website. As soon as the AI agent makes a change, the website refreshes to show the changes immediately."
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
    introText: "Let's put our knowledge to the test! Go ahead and open your Antigravity workspace to build a cozy cafe page.",
    sections: [
      {
        title: "Step 1: Open Antigravity",
        paragraphs: [
          "By now, you've seen what Antigravity is. Head over to antigravity.google. You should see your dashboard. Simply click 'New Project' to spin up your private builder workspace.",
          "Take a quick second to look at the three columns (chat on the left, file tree in the middle, and browser preview on the right) which we discussed in the previous lesson."
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
          "Watch as the AI agent begins modifying files in the center column. You'll see the Sip & Read cafe website load in your preview window on the right within a few seconds!"
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
          "Since your project is already open in Antigravity, making changes is as simple as chatting with the AI agent. You don't need to dive into any code files.",
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
          "We will ask the agent to add a button that reveals a random recipe when clicked. Copy the prompt below, paste it in your active Antigravity workspace chat, and test the button in the preview window on the right!"
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
    nextSlug: null,
    introText: "Congratulations on reaching the final lesson! You are ready to build a tracking application from scratch.",
    sections: [
      {
        title: "Starting Leafy Log",
        paragraphs: [
          "In this final lesson, you will build a plant tracking app. Go back to your Antigravity dashboard, click 'New Project', and paste this graduation prompt in your new workspace.",
          "You'll create an interactive database-like tracker for watering house plants. Once the builder is finished, test it out and feel free to ask for extra tweaks like dark mode!"
        ]
      }
    ]
  }
];

export function getLessonBySlug(slug) {
  return lessons.find((l) => l.slug === slug);
}
