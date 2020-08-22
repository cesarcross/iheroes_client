import { toast } from "react-toastify";

export const match = (dangerLevel, hero) => {
  if (
    (dangerLevel === "Gold" && hero.rank === "S") ||
    (dangerLevel === "Silver" && hero.rank === "A") ||
    (dangerLevel === "Copper" && hero.rank === "B") ||
    (dangerLevel === "Wood" && hero.rank === "C")
  ) {
    return toast.success(` ${hero.name} Won!! ✌️`);
  }

  return toast.error(` ${hero.name} was defeated... 💀`);
};
