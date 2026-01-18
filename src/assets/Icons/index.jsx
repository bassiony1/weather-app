import * as Icons from "lucide-react";

const weatherUI = {
  0: {
    label: "Clear sky",
    path: "/assets/images/icon-sunny.webp",
  },
  1: {
    label: "Mainly clear",
    path: "/assets/images/icon-sunny.webp",
  },
  2: {
    label: "Partly cloudy",
    path: "/assets/images/icon-partly-cloudy.webp",
  },
  3: {
    label: "Overcast",
    path: "/assets/images/icon-overcast.webp",
  },
  45: {
    label: "Fog",
    path: "/assets/images/icon-fog.webp",
  },
  48: {
    label: "Depositing rime fog",
    path: "/assets/images/icon-drizzle.webp",
  },
  51: {
    label: "Drizzle: Light",
    path: "/assets/images/icon-drizzle.webp",
  },
  53: {
    label: "Drizzle: Moderate",
    path: "/assets/images/icon-drizzle.webp",
  },
  55: {
    label: "Drizzle: Dense",
    path: "/assets/images/icon-drizzle.webp",
  },
  56: {
    label: "Freezing Drizzle: Light",
    path: "/assets/images/icon-drizzle.webp",
  },
  57: {
    label: "Freezing Drizzle: Dense",
    path: "/assets/images/icon-drizzle.webp",
  },
  61: {
    label: "Rain: Slight",
    path: "/assets/images/icon-rain.webp",
  },
  63: {
    label: "Rain: Moderate",
    path: "/assets/images/icon-rain.webp",
  },
  65: {
    label: "Rain: Heavy",
    path: "/assets/images/icon-rain.webp",
  },
  66: {
    label: "Freezing Rain: Light",
    path: "/assets/images/icon-rain.webp",
  },
  67: {
    label: "Freezing Rain: Heavy",
    path: "/assets/images/icon-rain.webp",
  },
  71: {
    label: "Snow fall: Slight",
    path: "/assets/images/icon-snow.webp",
  },
  73: {
    label: "Snow fall: Moderate",
    path: "/assets/images/icon-snow.webp",
  },
  75: {
    label: "Snow fall: Heavy",
    path: "/assets/images/icon-snow.webp",
  },
  77: {
    label: "Snow grains",
    path: "/assets/images/icon-snow.webp",
  },
  80: {
    label: "Rain showers: Slight",
    path: "/assets/images/icon-rain.webp",
  },
  81: {
    label: "Rain showers: Moderate",
    path: "/assets/images/icon-rain.webp",
  },
  82: {
    label: "Rain showers: Violent",
    path: "/assets/images/icon-rain.webp",
  },
  85: {
    label: "Snow showers: Slight",
    path: "/assets/images/icon-snow.webp",
  },
  86: {
    label: "Snow showers: Heavy",
    path: "/assets/images/icon-snow.webp",
  },
  95: {
    label: "Thunderstorm",
    path: "/assets/images/icon-storm.webp",
  },
  96: {
    label: "Thunderstorm with hail",
    path: "/assets/images/icon-storm.webp",
  },
  99: {
    label: "Thunderstorm with heavy hail",
    path: "/assets/images/icon-storm.webp",
  },
};

export const getIconPath = (code) =>
  weatherUI[code]?.path || "/assets/images/icon-error.svg";

// Icons[code] => 'url'
