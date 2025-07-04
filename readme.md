# Solana AI Multimodal Agent!

Thanks for checking out this project. This is a super cool AI agent that can do all sorts of things on the blockchain (like Solana, Ethereum, and more). You can use it to play with on-chain apps, games, or just mess around and see what it can do. No need to be a pro—just have fun!

---

## 🧠 What I Built

I've developed an AI agent using **Eliza OS** that makes blockchain stuff super easy for users! Here's what it does:

### 🎯 Smart Wallet Magic
- **Auto-creates smart wallets** when users log in
- **Handles commands automatically** to execute transactions
- **Manages wallet balances** without you lifting a finger

### 🔧 How It Works
1. **First:** I integrated the AI agent with **Thirdweb** - so when users log in, their smart wallet gets created automatically
2. **Second:** Built auto transaction management and wallet management - the AI handles all the boring stuff
3. **Third:** Deployed **TEE** (Trusted Execution Environment) for extra security

### 📹 Check It Out
I'd be super happy if you could check out my video to see it in action!

---

## 💌 Need Help or Wanna Chat?

If you get stuck or just wanna say hi, you can always ping me on Telegram: [@snip](https://t.me/snipmaxi)

---

## 🚀 Quick Start (Let's Get This Running!)

### What You'll Need
- Node.js 16+
- pnpm (for installing stuff)
- Bun (for running examples)
- Docker Desktop (for the database stuff)

### How to Start

1. **Install everything:**
   ```bash
   pnpm install
   ```
2. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```
3. **Start up Docker:**
   ```bash
   ./docker.sh
   ```

That's it! You're ready to go. (If you like Makefiles, there's one for you too!)

---

## 🕹️ Try Some Examples

Wanna see what this thing can do? Here are some fun commands:

- **Basic Agent:**
  ```bash
  bun run basic
  ```
- **Goal Planner:**
  ```bash
  bun run goals
  ```
- **Twitter Bot:**
  ```bash
  bun run twitter
  ```
- **API Example:**
  ```bash
  bun run api
  ```

---

## 🤔 What's Going On Here?

This project is like a smart robot brain for the blockchain. Here's what it can do:

- **Think about stuff** (using something called "Chain of Thought")
- **Break big goals into smaller steps**
- **Remember things** (it has a memory!)
- **Talk to other apps and users**
- **Work with different blockchains**
- **Create and manage smart wallets automatically**
- **Handle transactions without you sweating it**

You don't need to know all the techy details, but if you're curious, here's a peek under the hood:

- **Orchestrator:** The boss that tells everyone what to do
- **Handlers:** Little helpers that do things like talk to APIs or send messages
- **Goals:** What the agent is trying to achieve
- **Memory:** So it doesn't forget what happened before
- **Smart Wallets:** Automatically created and managed for users

---

## 🧑‍💻 For the Curious (A Bit More Techy)

If you wanna tinker, you can:
- Add your own handlers (make the agent do new things)
- Change how it thinks (edit the code in `packages/core`)
- Connect it to your own blockchain apps
- Integrate with Thirdweb for wallet management
- Deploy your own TEE for enhanced security

---

## 🎉 That's It!

Have fun! Don't be afraid to break things and experiment. If you make something cool, let me know!

Happy hacking! 🚀
