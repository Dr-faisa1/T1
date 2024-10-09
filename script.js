// قائمة المكافآت ونسب السحب
const rewards = [
  // المكافآت الشائعة
  { name: "بطاطس ليز جبن 🍟🧀", rarity: "common", chance: 20 },
  { name: "بطاطس ليز حار 🍟🌶️", rarity: "common", chance: 20 },
  { name: "بطاطس تشيتوس 🍟🍅", rarity: "common", chance: 20 },
  { name: "اشرب كأس حليب أو أكل ملعقة عسل أو تمرة", rarity: "common", chance: 13 },
  { name: "بطاطس عمان 🍟", rarity: "common", chance: 15 },
  { name: "بسكوت أعواد الشوكولاته", rarity: "common", chance: 15 },

  // المكافآت النادرة
  { name: "وجبة من ماك 🍔", rarity: "rare", chance: 10 },
  { name: "تشتري من البقالة اللي تبي 😍", rarity: "rare", chance: 10 },
  { name: "15 ريال 💸", rarity: "rare", chance: 10 },

  // المكافآت الخرافية
  { name: "اطلب اللي تتمنى 🤩", rarity: "mythical", chance: 5 }
];

// الوظيفة التي تقوم بالسحب
function getRandomReward() {
  const random = Math.random() * 100;
  let accumulatedChance = 0;

  for (const reward of rewards) {
    accumulatedChance += reward.chance;
    if (random <= accumulatedChance) {
      return reward.name;
    }
  }
}

// التعامل مع الضغط على زر السحب
document.getElementById("gachaButton").addEventListener("click", function() {
  const reward = getRandomReward();
  document.getElementById("rewardDisplay").innerText = `حصلت على: ${reward}`;
});
