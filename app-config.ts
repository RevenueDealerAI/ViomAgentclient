import type { AppConfig } from "./lib/types";

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: "ViomAI",
  pageTitle: "ViomAI Voice Agent",
  pageDescription: "A voice agent built for you by ViomAI",

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: "/lk-logo.png",
  accent: "#f6ff00",
  logoDark: "/lk-logo.png",
  accentDark: "#959595ff",
  startButtonText: "Chat Now",

  agentName: undefined,
};
