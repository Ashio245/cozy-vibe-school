export const prompts = [
  {
    title: "Sip & Read Cafe Cafe Website",
    description: "A cozy homepage for a small cafe with signature teas and a warm aesthetic.",
    promptText: "Create a simple single-page website for a cozy tea cafe called 'Sip & Read'. It should have a warm peach background, a header that says 'Sip & Read', a list of three signature teas with description and prices, and a friendly welcome note. Use soft, friendly font styles.",
    category: "websites",
    difficulty: "Beginner"
  },
  {
    title: "Sweet Cravings Bakery Storefront",
    description: "Showcase baked goods, operating hours, and a friendly booking form.",
    promptText: "Create a webpage for a local bakery called 'Sweet Cravings'. Design it with pastel pink and warm cream colors. Show a welcome message, a listing of 4 daily pastries (croissants, cookies, cupcakes, muffins) with cute emojis, the address and opening hours, and a simple newsletter signup form at the bottom (name and email input). Make sure the button has a soft pulse hover animation.",
    category: "websites",
    difficulty: "Beginner"
  },
  {
    title: "Cozy Book Club Page",
    description: "A page to track current reads, meetings, and register members.",
    promptText: "Build a single-page website for a community book club named 'Midnight Page Turners'. It should have a deep forest green header and cream body. List the book of the month (title, author, book cover description, and a 2-sentence summary), the date of the next meeting, and a button to RSVP. When RSVP is clicked, show a text message: 'Yay! You are registered for the next discussion.'",
    category: "websites",
    difficulty: "Beginner"
  },
  {
    title: "Daily Focus Timer",
    description: "A premium pomodoro productivity app with break states and custom durations.",
    promptText: `Create a single-page pomodoro focus timer called "Cozy Focus".

Visual Design:
- Background: A soft warm peach (#fff7ed) that changes to soft green (#f0fdf4) during break sessions.
- Center Card: A clean white card containing a large, elegant countdown clock.
- Typography: Outfit font for headers, Inter font for the clock numbers and buttons.
- Buttons: Soft rounded buttons with smooth hover animations (grow slightly on hover).

Interactivity & Logic:
- A large digital countdown timer starting at 25:00 (minutes and seconds).
- Buttons below the clock: "Start", "Pause", and "Reset".
- Clicking "Start" begins the countdown. If it hits 00:00, show a pop-up modal saying "Time for a tea break! ☕" and switch the timer automatically to a 5-minute break session, changing the background color to green.
- Toggle tabs at the top of the card: "Focus (25m)", "Short Break (5m)", and "Long Break (15m)". Clicking a tab pauses the current timer and loads the new duration.
- Update the browser tab title dynamically (e.g. "(24:59) Cozy Focus") so the user can see their progress while looking at other tabs.`,
    category: "tools",
    difficulty: "Intermediate"
  },
  {
    title: "Houseplant Water Tracker",
    description: "Log your plants, set watering intervals, track due dates, and persist data.",
    promptText: `Create a web app for tracking house plants named "Leafy Log".

Visual Design:
- Background: A soft, calming sage green tint (#f4f7f5).
- Layout: A clean top navigation bar with a leaf logo and a grid below for plant cards.
- Add Plant Form: A compact floating sidebar or top panel containing input fields.
- Plant Cards: Rounded corners, subtle drop shadows, and tags showing watering status.

Interactivity & Logic:
- Form inputs: Plant Name (text input) and Watering Interval in Days (number input, defaulting to 3).
- Clicking "Add Plant" creates a plant card in the grid.
- Each plant card must show:
  1. The name and watering interval (e.g., "Water every 7 days").
  2. A status tag: "Watered Today" (green) or "Overdue! ⚠️" (soft yellow/red border).
  3. A dynamic countdown: "Needs water in X days" based on when they last clicked watered.
- A "Watered" button on each card. Clicking it resets the last-watered date to right now and recharges the countdown.
- Persistence: Save the list of plants to the browser's localStorage so that reloading the page does not erase their garden.
- Empty State: If there are no plants, show a cozy illustration placeholder and a message saying "Your garden is empty. Add your first green friend above!"`,
    category: "tools",
    difficulty: "Intermediate"
  },
  {
    title: "Daily Gratitude Journal",
    description: "Reflect on daily moments, select mood emojis, filter by mood, and search past logs.",
    promptText: `Build a daily reflection journal app named "Smile Logs".

Visual Design:
- Theme: Cozy lavender aesthetics using light purple backgrounds (#faf5ff) and deep purple accents (#6b21a8).
- Typography: Soft serif style fonts for the title and Outfit for buttons.
- Layout: Split-screen desktop layout (inputs on the left, past logs feed on the right) collapsing into a single column on mobile.

Interactivity & Logic:
- Journal Form: A textarea asking "What made you smile today?", a dropdown selector for Mood (Happy, Peaceful, Inspired, Tired), and a "Log Moment" submit button.
- When submitted:
  1. Add the entry to a feed on the page showing the date/time, the mood emoji, and their reflection text.
  2. Animate the new entry card fading into the feed list.
- Search & Filters:
  1. A search bar above the logs feed that dynamically filters entries by keywords as the user types.
  2. Four category filter pills: "Show All", "Happy ☀️", "Peaceful 🌸", "Inspired ✨". Clicking a pill filters the logs feed by mood.
- Clear Option: A "Clear All Reflections" button that requests confirmation before wiping the localStorage logs database.`,
    category: "tools",
    difficulty: "Intermediate"
  },
  {
    title: "Simple Memory Match Card Game",
    description: "A 4x4 card grid puzzle using emojis, move tracking, custom timer, and 3D card flips.",
    promptText: `Create a browser-based card matching memory game.

Visual Design:
- Background: A cozy dark purple (#1e1b4b) to make the cards pop.
- Game Board: A centered 4x4 grid.
- Cards: Square shapes with a custom card-back design (a golden leaf outline on deep indigo). Cards should flip using a smooth 3D CSS rotate transition.
- Celebrations: A full-screen overlay modal with confetti effects upon winning.

Interactivity & Logic:
- A grid of 16 cards comprising 8 matching emoji pairs (🍵, 🍪, 🌸, 📚, 🥑, 🎨, 🧸, 🐱).
- Game Stats: A panel showing "Moves: 0" and "Time: 00s" ticking up since the first click.
- Game Loop:
  1. Clicking a card flips it face-up. Only 2 cards can be face-up at a time.
  2. If they match: Keep them flipped, add a green success glow, and lock them.
  3. If they mismatch: Wait 0.8 seconds, flip them back face-down.
  4. Increment the Moves counter on every turn.
- Win State: When all 8 pairs are matched, stop the timer, show the Congratulations Modal displaying their final time and move count, and offer a "Play Again" button to scramble cards and reset stats.`,
    category: "games",
    difficulty: "Advanced"
  },
  {
    title: "Word Scramble Challenger",
    description: "Unscramble words with hints, point multipliers, streak tracking, and local leaderboards.",
    promptText: `Build a vocabulary puzzle game called "Scribble Scramble".

Visual Design:
- Style: Cozy schoolhouse classroom blackboard mockup theme (dark slate card background with chalk-like white text).
- Layout: Large scrambled letters displayed in the center, an input text field, and game stats aligned at the top.

Interactivity & Logic:
- Word Database: A list of cozy words (vibe, school, builder, sandbox, coffee, tea, garden, leafy).
- Game Play:
  1. Scramble the letters of a chosen word and display them.
  2. The player types their guess and hits "Guess".
  3. Correct Guess: Turn the input background soft green, show a checkmark, add points to their score, increase their "Correct Streak" count, and load a new word after 1.5 seconds.
  4. Incorrect Guess: Shake the input field, turn it soft red, and show a helpful hint ("Try starting with the letter [X]").
- Hint Button: Reveals the first letter of the word but halves the points rewarded for that word.
- Scoring & Leaderboard: Save the player's highest score streak to localStorage as "Personal Best" and display it on the sidebar.`,
    category: "games",
    difficulty: "Intermediate"
  }
];
