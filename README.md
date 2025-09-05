# Olive & Ember BotBly Widget Integration (Next.js)

This document explains how the [BotBly](https://botbly.com) chat widget is added to a Next.js App site, which options are used to customize it, and how to run the project locally.

**Live demo:** [Olive & Ember Restaurant](https://oliveemberrestaurant.vercel.app/)


## What is included

- A small loader component that injects the BotBly widget script and creates the widget once
- A global type declaration for `window`
- Environment variables for widget configuration
- Mounting the loader in the app layout so the widget is present on every page

## Files and structure

### 1) Environment variables

Create `.env` in the project root.

```
NEXT_PUBLIC_BOTBLY_BOT_ID=92f3d920-3429-4522-9ff7-e93bd86eefc6
NEXT_PUBLIC_BOTBLY_BOT_NAME=Ember
NEXT_PUBLIC_BOTBLY_WIDGET_URL=https://cdn.jsdelivr.net/gh/botbly/widget-public@main/botbly-widget.js
```

Note

- Do not commit `.env*` files

### 2) Global types

Create `types/botbly.d.ts`

```ts
declare global {
  interface Window {
    botblySettings?: any;
    botblyWidget?: any;
    __botblyLoaded?: boolean;
  }
}
export {};
```

If TypeScript does not pick up the types, ensure the `types` folder is included by your TS config and restart the dev server.

### 3) Widget loader component

Create `components/BotblyWidget.tsx`

```tsx
"use client";

import { useEffect } from "react";

const WIDGET_ID = "botbly-widget-script";

export function BotblyWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById(WIDGET_ID)) return;
    if ((window as any).__botblyLoaded) return;

    (window as any).botblySettings = {
      botId: process.env.NEXT_PUBLIC_BOTBLY_BOT_ID,
      botName: process.env.NEXT_PUBLIC_BOTBLY_BOT_NAME,
      primaryColor: "#D2691E",
      accentColor: "#D2691E",
      initialGreeting: "Hello. I am Ember. I can set up a reservation and share our most loved dishes if you like",
      enableSounds: true,
      enableSuggestions: true,
      launcherIcon: "message-circle",
      launcherIconSize: 32
    };

    const s = document.createElement("script");
    s.id = WIDGET_ID;
    s.src = process.env.NEXT_PUBLIC_BOTBLY_WIDGET_URL || "https://cdn.jsdelivr.net/gh/botbly/widget-public@main/botbly-widget.js";
    s.async = true;
    s.onload = () => {
      (window as any).__botblyLoaded = true;
      (window as any).botblyWidget?.create?.();
    };
    document.body.appendChild(s);
  }, []);

  return null;
}
```

Note
- You can also use the BotBly Widget Customizer to adjust your preferences

### 4) Mounting the widget

Mount the loader once in the app layout so the widget is available on all routes.

`app/layout.tsx`

```tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BotblyWidget } from "@/components/BotblyWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Olive and Ember - Modern Mediterranean Cuisine",
  description: "Fire-kissed Mediterranean plates with seasonal Virginia produce. Located in Arlington, VA."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream text-charcoal">
        <BotblyWidget />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

## Widget options used

These options are set in `window.botblySettings` inside `BotblyWidget.tsx`.

- `botId` unique identifier for the assistant
- `botName` label shown in the widget UI
- `primaryColor` hex color string for primary UI accents
- `accentColor` hex color string for secondary accents
- `initialGreeting` message shown to first time visitors
- `enableSounds` boolean that toggles UI sounds
- `enableSuggestions` boolean that toggles suggested prompts
- `launcherIcon` icon name for the floating launcher
- `launcherIconSize` numeric pixel size for the launcher icon

To customize, edit the values above or map them from your theme system and environment variables.

## Running the site locally

1. Clone the repository
2. Create `.env` with the variables shown above
3. Install dependencies

```bash
npm install
```

4. Start the dev server

```bash
npm run dev
```

Important

- The widget script will load in development
- Sending and receiving real messages will likely fail on `http://localhost` because the chat backend is not configured to accept localhost origins and tokens in this demo setup
- For a full end to end test, deploy to a preview or production domain that is allowed by your bot backend configuration

## Troubleshooting

- If you see multiple launchers, ensure `BotblyWidget` is rendered only once
- If the script fails to load, verify `NEXT_PUBLIC_BOTBLY_WIDGET_URL` and check the network request in the browser dev tools
- If TypeScript reports `window.botblyWidget` as unknown, confirm `types/botbly.d.ts` is included by your TS config and restart the dev server
