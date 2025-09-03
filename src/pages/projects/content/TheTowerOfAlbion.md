*Unity · Roguelike · State Machines · Event-Driven Architecture· Solo Project · Ongoing Project (2024–2025)*  

---

## Overview  
**Tower of Albion** is a **top-down hack-and-slash roguelike** and the continuation of my earlier prototype, *Wizard Wars*.  
It has been my main focus for over a year, and is currently playable through its first five stages.  

Each run is designed to feel unique through randomized level layouts, power-up choices, and evolving enemy behaviors.  
The project showcases my growth as a developer, with an emphasis on **clean architecture and scalable design**.  

---

## Core Gameplay  
- **Procedural Variability**  
  - 5 playable stages per run.  
  - Each stage randomly selects from **3 map variants**, creating hundreds of possible run combinations.  

- **Power-Ups**  
  - After completing each stage, players choose 1 of 2 upgrades.  
  - Built with **scriptable objects** and an **event bus system**, enabling effects on both players and enemies.  

- **Enemy Design**  
  - Implemented with **state machines** (idle, attack, dead, escape).  
  - Current roster:  
    - **Archer** – fires staggered homing arrows; can lay explosives and retreat if pressured.  
    - **Barbarian** – melee unit with a ground-cast attack and spinning axe (“Beyblade”) move.  
    - **Mage** – summons AoE hex circles with clear telegraphs.  

- **Traps & Hazards**  
  - Includes turrets, spike traps, and explosive barrels (under refinement).  

---

## Technical Highlights  
- **Event-Driven Programming**  
  - Core systems decoupled via a global **event bus**.  
  - Power-ups and enemy actions communicate through events for modularity.  

- **State Machines**  
  - Each enemy behavior separated into states for maintainability.  
  - Example: Archer switches between *three-shot attack* and *escape sequence* depending on player proximity.  

- **Object Pooling**  
  - Implemented a custom **object pooler** to handle repeated instantiations efficiently.  
  - Enemies, projectiles, traps, explosives, and arrows are all pulled from pools instead of instantiated/destroyed each time.  
  - This greatly improved performance and reduced frame drops during combat-heavy encounters. 

- **Pathfinding Improvements**  
  - Enemies now navigate corridors, corners, and traps instead of running directly at the player.  

- **Scalable Power-Up System**  
  - Power-ups follow a **state-inspired cycle** (`onEnter`, `onTick`, `onEnd`), making them reusable and easy to extend.   

- **Art & Assets**  
  - Designed UI elements, hex circles, and other visuals in **Adobe Photoshop**.  
  - Character models sourced from a licensed **itch.io asset pack**, with all additional in-game effects created by me.  
 

---

## Current Status & Next Steps  
- First 5 stages fully playable.  
- Core systems (power-ups, state machines, event bus) implemented.  
- Next: expand enemy roster, polish traps, and optimize performance.  

---

## Media & Links 
If you don't want to download the file, the game is playable on a browser, please make sure to have a keyboard and mouse on hand for the best experience.
- [Download Link](https://avanlian.itch.io/the-tower-of-albion)

## Reflection  
I’ve been working on *Tower of Albion* for a long time now, and it feels incredibly good to finally release it in a state that is both playable and replayable. As of now, I do wish I had added more than the six power-ups I initially implemented — but since players only need to choose from five at each level, it hasn’t limited the experience too much. I wanted to push further, but I’ve found myself a little drained from this project. That said, I’m very proud of how it has turned out.  

State machines, in particular, have been one of the most interesting structures I’ve worked on. Learning to implement it has been a major milestone for me. Looking back, there are things I would absolutely do differently if I could start over. For example, I’d overhaul the universal movement script, which is now obsolete thanks to the improved pathfinding system. I’d also put more effort into keeping my codebase consistently clean. 

This project has taught me the importance of balance — especially in scope. As much as I want to make a “great” game, I’ve had to remind myself that I’m still a student, still learning, and I shouldn’t aim for the moon just yet. Instead, I’ve treated *Tower of Albion* as a long-term learning experience. My philosophy has been simple: as long as I keep improving the game in any way I can think of, whether or not I see it to completion, I’ll continue to grow as a programmer.  

This is single-handedly my longest-running project, and I’m incredibly proud of it. There are still bugs, and this isn’t the finish line, but for now, I can be content with how far it has come.  
 

