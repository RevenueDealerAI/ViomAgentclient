import type { AppConfig } from "./lib/types";

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: "Kushagra Gangwar",
  pageTitle: "Voice Bot",
  pageDescription: "A voice agent built for you by Kushagra Gangwar",

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: "/lk-logo.png",
  accent: "#002cf2",
  logoDark: "/lk-logo.png",
  accentDark: "#959595ff",
  startButtonText: "Chat Now",

  agentName: undefined,
};
