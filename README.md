<div align="center">

# 🎉 Soc Ops - Social Bingo

### Break the ice, make connections, and have fun!

*A modern web app that transforms networking events into an interactive game*

[🚀 Live Demo](https://maisamrazai.github.io/bingo-game/) • [📖 How to Play](#-how-to-play) • [💻 Tech Stack](#-tech-stack)

---

</div>

## ✨ What is Soc Ops?

**Soc Ops** (Social Operations) is an interactive bingo game designed to make in-person mixers, team events, and social gatherings more engaging and memorable. Instead of awkward small talk, participants explore the room to find people who match interesting prompts on their bingo board.

### 🎯 Perfect For:
- 🏢 Corporate team building events
- 🎓 University orientation programs
- 🤝 Networking meetups
- 🎊 Conference ice breakers
- 👥 Community gatherings

## 🎮 How to Play

1. **Start the Game** - Open the app and tap "Start Game"
2. **Explore the Board** - You'll see a 5×5 grid of interesting prompts (e.g., "Has traveled to 3+ continents", "Speaks more than 2 languages")
3. **Find Matches** - Walk around and find people who match each prompt
4. **Mark Your Board** - Tap a square when you find a match
5. **Get BINGO!** - Complete 5 in a row (horizontal, vertical, or diagonal) to win! 🏆

The game encourages genuine conversations and helps participants discover unexpected commonalities.

## ✨ Features

- 🎲 **Randomized Boards** - Every game is unique with shuffled prompts
- 📱 **Mobile-First Design** - Optimized for phones and tablets
- 🎨 **Modern UI** - Clean, intuitive interface built with React and Tailwind CSS
- ⚡ **Lightning Fast** - Built with Vite for instant load times
- 🎯 **Visual Feedback** - Winning patterns are highlighted
- 🔄 **Easy Reset** - Start a new game anytime
- 🌐 **No Backend Required** - Runs entirely in the browser

## 🚀 Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/MaisamRazai/bingo-game.git
cd bingo-game

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app! 🎉

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 💻 Tech Stack

- **⚛️ React 19** - Modern UI framework with hooks
- **📘 TypeScript** - Type-safe development
- **🎨 Tailwind CSS v4** - Utility-first styling
- **⚡ Vite** - Next-generation frontend tooling
- **🧪 Vitest** - Fast unit testing
- **🚀 GitHub Pages** - Automatic deployment on push to `main`

## 🎯 Customization

Want to use different prompts? Edit the questions in `src/data/questions.ts` to customize the game for your specific event or audience!

```typescript
// Example: Add your own prompts
export const QUESTIONS = [
  "Has worked remotely from another country",
  "Can solve a Rubik's cube",
  "Has met a celebrity",
  // Add more...
];
```

## 📸 Screenshots

<div align="center">
  <i>Coming soon - check out the <a href="https://maisamrazai.github.io/bingo-game/">live demo</a>!</i>
</div>

## 🤝 Contributing

Contributions are welcome! Whether it's:
- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 💡 Suggestions for new prompts

Please check out [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Created by [Harald Kirschner](https://github.com/MaisamRazai) to make social events more fun and interactive.

---

<div align="center">

**Made with ❤️ for building better connections**

⭐ Star this repo if you find it useful!

</div>
