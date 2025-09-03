*Docker · n8n Automations · APIs (Google, Notion, Telegram) · Ongoing Project (July 2025)*  

---

## Overview
This project began as an experiment to build a **personal accountability bot** that could help me stay motivated, plan my day, and track progress.  
It evolved into a **life co-pilot**, combining automation, daily check-ins, and data storage through APIs.  

The chatbot runs inside a Docker container using **n8n automations** and integrates with Google Calendar, Notion, and Telegram.  
Its main purpose is to serve as a **daily digital journal and accountability system**, checking in at set times and logging my responses for later use.  

---

## Problem & Goal
I often struggled with motivation and found that writing my plans and reflections into ChatGPT made me more productive. I'm unsure if it was the act of writing down my issues and intentions, or if it was that something actually responded to them.

One of the inspirations for this project came from *Atomic Habits* by James Clear:  
> “You do not rise to the level of your goals. You fall to the level of your systems.”  

I have big aspirations, but if I don’t stop and take a second to think, it becomes incredibly easy for me to become paralyzed with fear.  

This project is my attempt to build a **safety net** for myself. A system so strong it prevents my worst faults from slipping through the cracks, and keeps me accountable day after day, even when I don't want to be.


---

## How It Works
- **Morning Check-In**  
  - Bot sends me a series of randomly generated questions such as: *What do you want to do today? What kind of person do you want to be? Are these the goals tasks you should be focused on?*  
  - My answers are analyzed, summarized, and then stored in a **Notion database** for tracking.  

- **Daytime Check-Ins**  
  - At scheduled times (e.g., 12 p.m., 3 p.m., 6 p.m.), the bot asks about progress: *Did you finish any goals?*  
  - Timed check-ins have not been fully tested yet. The program is in the process of being migrated to a dedicated server for 24/7 access
  - Updates Notion with successes and struggles.  

- **Nightly Reflection**  
  - Summarizes the day: *What went well? What could be improved?*  
  - Analyzes the day's activities and considers if actions were in line with the user's goals.

- **Utility Functions**  
  - Google Calendar agent: schedule, delete, or edit events via chatbot commands.  
  - Telegram webhook: allows mobile access from anywhere.  

---

## My Contributions
- Built the system using **n8n workflows** inside a Docker container.  
- Integrated multiple APIs:
  - **Google Calendar API** for scheduling and event editing.  
  - **Notion API** to store check-in and reflection data.  
  - **Telegram API** to send/receive messages through a webhook.  
- Designed the **check-in system** using n8n's visual scripting tool.
- Configured **Cloudflare tunnel + domain setup** for secure remote access from anywhere in the world.

---

## Reflection
### What I learned:  
- How to design and implement **end-to-end automation pipelines** with n8n and Docker.  
- Practical experience with **API authentication and data exchange** (Google, Notion, Telegram).  
- The importance of **scope control** — starting simple (check-ins, basic storage) before layering advanced features.  
- How accountability systems can be both a **technical challenge** and a **personal productivity tool**.  

---

## Future Plans
- The bot currently requires manual startup, which limits testing. Migrating to a **24/7 home server** is the next step.  
- At the time, I relied on cloud APIs (ChatGPT, etc.), but long-term I want a **locally run LLM** for privacy and control over personal data.  
- **Smarter accountability**: Missed check-ins will trigger reminders or escalations.  
- **Expanded journaling/analytics**: Weekly/monthly reports on productivity trends.  

