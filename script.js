let goodDeeds = ["Read Quran", "Do Dhikr ", "Give Charity"];
let inspirationalQuotes = ["Love for others what you love for yourself", "Keep remembering Allah", "he believer's shade on the Day of Resurrection will be his charity"];
let successInIslam = ["Nail your 5 pillars", "Practice Modesty", "Take some time to focus on the Quran"];


// Generate a random message
function generateRandomMessage() {
  const randomDeeds = goodDeeds[Math.floor(Math.random() * goodDeeds.length)];
  const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
  const randomSuccess = successInIslam[Math.floor(Math.random() * successInIslam.length)];

  return `Your random message:\ngoodDeeds: ${randomDeeds}\nQuote: ${randomQuote}\nSuccessInIslam: ${randomSuccess}`;
}

// Display the message
console.log(generateRandomMessage());

