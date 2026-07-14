---

## Overview  
The AI Accountability Bot was my first introduction to self-hosting. Running n8n through docker, it acted as a personal productivity assistant designed to help me stay accountable to my goals while automating parts of my daily routine. 

---

## Core Functionality
> **Daily Check ins**
>> Three times a day, the bot sends the user a telegram message asking for them to check in Responses get processed through the Telegram and Notion APIs, automatically creating entries in a personal Notion database that tracks the user's mood, activities, progress, and daily reflections.

> **Secondary Knowledge**
>> The bot also has access to a separate Notion database containing personal goals, reminders, quotes, and notes I wanted to keep in mind. It uses this information to generate personalized responses during each check-in, tailoring its feedback around the goals and principles I had previously recorded.

> **Calendar Agent**
>> The bot also takes advantage of the Google API. This opened the door for a personal calendar assistant. By sending a telegram message to the bot, the bot analyzes the message and carries out the requested task. For example, the user could create, delete, or modify a calendar event through a telegram message.

## What I Learned
> This project was my first introduction to homelabbing and self-hosted applications. Before building it, I had very little experience with Docker, workflow automation, or integrating multiple APIs into a single system. By the end, I had built a service capable of running continuously, coordinating between Telegram, Notion, and an LLM to automate daily check-ins and personal data tracking.

> Building the bot also introduced me to the networking side of self-hosting. To allow external services to communicate with my server, I had to configure a private domain, secured it behind Cloudflare, and expose my n8n instance through a reverse proxy tunnel. It's due to those experiences that I learned how webhooks work, how to securely expose services to the internet, and how to manage API credentials across multiple integrations.

> Other than that, this project taught me a valuable lesson beyond the technical aspects. When I originally built the bot, I was really struggling with motivation, and keeping on track with my goals. The purpose of the project was to help me build more discipline in my life and live more intentionally. I eventually realized I was spending more time working on the system than pursuing the goals it was designed to support. While the project achieved its purpose as a learning experience, it also reminded me that software should serve the problem, not become the problem itself.