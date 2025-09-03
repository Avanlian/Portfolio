*Unity (2024) · Solo Project*  

---

## Overview
**Wizard Wars** was a rapid prototype built to showcase how **quickly a game can be developed in Unity**.  
The project is a **boss rush** where the player faces 3 unique boss encounters while mastering a small set of abilities.  

My goal was not polish, but speed — to see how fast I could implement core mechanics, test them, and get a playable prototype running.  

---

## Core Gameplay
### Abilities
  - **Basic Attack** – Left-click to attack.  
  - **Magic Redirect** – Right-click to convert incoming damage into mana loss instead of health loss.  
  - **Critical Flow System** – Random chance for critical hits (2× damage). Landing a crit triggers **Flow** for ~5 seconds: higher crit chance + HP/MP regeneration.  
  - **Dash** – Quick dodge on spacebar.  
  - **Hexcast** – Place an **AOE spell** that lasts ~5 seconds. It was designed to be highly configurable: radius, duration, tick rate, and damage could all be easily modified.  

### Enemies
  - Very simple AI: enemies make a direct line toward the player.  
  - This simplicity was intentional to keep the project manageable under tight time constraints.  

---

## My Contributions
- Designed and implemented all **combat systems** (attacks, redirect, crit/flow system, dash, AOE).  
- Configured **Hexcast ability** for flexible parameters (size, damage, tick rate, duration).  
- Built a simple **arena map** from downloaded assets (Kay Lousberg, itch.io).  
- Rigged character models and set up animations with attached scripts.  
- Programmed lightweight **enemy AI** for a working boss rush loop.
- Created custom images using **Adobe Photoshop**  

---

## Key Features
- **Boss rush gameplay**: 3 fights with distinct pacing.  
- **Flow mechanic**: A crit-based feedback loop that changes the pace of combat.  
- **Fast prototyping**: From empty project to playable loop in a very short timeframe.  

---

## Reflection
### What I learned:  
- Unity allows **mechanics to be prototyped extremely quickly** when focusing on iteration over polish.  
- I gained confidence in using Unity for rapid development and in building core mechanics from scratch.  
- Keeping the scope **small and achievable** is the best way to actually finish a project.  

### What I wish I had done differently:  
- My “move fast” mindset led to **spaghetti code**, making it harder to scale or refactor later.  
- I relied on oversimplified AI (straight-line chasing), which made fights repetitive. A **state machine + pathfinding** would have improved depth and replayability.  
- I would have liked to structure the codebase with **better foundations** (clearer systems, separation of concerns) for future scalability.  

### Biggest challenge:  
- Resisting the urge to “make a big game.” I learned that **finishing something simple** is more valuable than starting something overly ambitious and never completing it.  

---

## Media & Links 
- [Download Link](https://avanlian.itch.io/wizard-wars)  
