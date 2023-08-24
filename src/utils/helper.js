var nameList = [
  "Time Killer",
  "Past Tester",
  "Cliff",
  "Mountain Player",
  "Rockstar",
  "Red BT",
  "Blue BT",
  "Green BT",
  "Yellow",
  "Gold Player",
  "Demon Tester",
  "Demonic",
  "Panda",
  "Cat XYZ",
  "Kitty",
  "Kitten Tester",
  "Zero Hero",
  "Memory",
  "Trooper",
  "XX Tester",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread Tester",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your Tester",
  "Worst",
  "Enemy",
  "Hostile Tester",
  "Force",
  "Video Player",
  "Gamer Farooq",
  "Germ",
  "Spaz Tester",
  "Shot Player",
  "Echo Tester",
  "Beta Tester",
  "Alpha zombie",
];

const textList = [
  "Hello world 😅",
  "Hey ... 😅😅",
  "Good day",
  "Squid Game 😅",
  "Money 😅😅",
  "Cash 😅",
  "Go Go Go 😅😅",
  "King 💝",
  "Duke 💝💝💝💝",
  "Hello 💝💝💝",
  "Rest 💝💝",
  "Fire is ON",
  "India 💌💌💌",
  "No way 😅😅",
  "Break it !!!",
  "Breaker 😅",
  "Sickly",
  "Hello 🚀🚀",
  "Hello Hello 🚀",
  "More Please 💌💌",
  "Rooster 🚀🚀",
  "Sand 🚀🚀",
  "For you 💌💌",
  "Dessert 🚀🚀",
  "Hurdles ON 🚀🚀",
  "Racer 💌💌💌",
  "Need more..",
  "Crimson 🚀",
  "Honest 🚀🚀",
  "Eagle is coming 💌💌",
  "Walker 💌💌💌",
];
export const generateRandomNameWithText = () => {
  return {
    name: nameList[Math.floor(Math.random() * nameList.length)],
    text: textList[Math.floor(Math.random() * textList.length)],
  };
};