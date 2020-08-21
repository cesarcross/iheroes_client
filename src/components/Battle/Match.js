export const match = (dangerLevel, hero) => {
  if (
    (dangerLevel === "Gold" && hero.rank === "S") ||
    (dangerLevel === "Silver" && hero.rank === "A") ||
    (dangerLevel === "Copper" && hero.rank === "B") ||
    (dangerLevel === "Wood" && hero.rank === "C")
  ) {
    return `${hero.name} Won!!`;
  }

  return `${hero.name} was defeated...`;
};
