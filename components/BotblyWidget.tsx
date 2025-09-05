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
            launcherIconSize: 32,
        };

        const s = document.createElement("script");
        s.id = WIDGET_ID;
        s.src =
            process.env.NEXT_PUBLIC_BOTBLY_WIDGET_URL ||
            "https://cdn.jsdelivr.net/gh/botbly/widget-public@main/botbly-widget.js";
        s.async = true;
        s.onload = () => {
            (window as any).__botblyLoaded = true;
            (window as any).botblyWidget?.create?.();
        };
        document.body.appendChild(s);
    }, []);

    return null;
}
