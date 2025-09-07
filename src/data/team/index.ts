import { TeamYear } from "./types";
import { team2025_26 } from "./2025-26";
import { team2024_25 } from "./2024-25";
import { team2023_24 } from "./2023-24";
import { team2022_23 } from "./2022-23";
import { team2021_22 } from "./2021-22";

export const teams: Record<string, TeamYear> = {
  "2025-26": team2025_26,
  "2024-25": team2024_25,
  "2023-24": team2023_24,
  "2022-23": team2022_23,
  "2021-22": team2021_22,
};

export const orderedYears = Object.keys(teams).sort((a, b) => (a > b ? -1 : 1));

export {};
