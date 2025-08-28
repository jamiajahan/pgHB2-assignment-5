// Initial counts
let coins = 100;
let hearts = 0;
let copies = 0;

// Navbar elements
const coinCount = document.getElementById("coinCount");
const heartCount = document.getElementById("heartCount");
const copyCount = document.getElementById("copyCount");

// Call history
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// --- HEART BUTTONS ---
document.querySelectorAll(".heartBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    hearts++;
    heartCount.textContent = hearts;
    btn.classList.add("text-red-500");
  });
});

// --- COPY BUTTONS ---
document.querySelectorAll(".copyBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Find the hotline number inside this card
    const hotline = btn.closest("div.bg-white").querySelector("p.text-lg").textContent.trim();

    // Copy to clipboard
    navigator.clipboard.writeText(hotline).then(() => {
      copies++;
      copyCount.textContent = copies;
      alert(`Copied: ${hotline}`);
    });
  });
});

// --- CALL BUTTONS ---
document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Find service name & number
    const card = btn.closest("div.bg-white");
    const serviceName = card.querySelector("h3").textContent.trim();
    const hotline = card.querySelector("p.text-lg").textContent.trim();

    // Check coins
    if (coins >= 20) {
      coins -= 20;
      coinCount.textContent = coins;

      // Alert
      alert(`Calling ${serviceName} (${hotline})`);

      // Add to history with time
      const time = new Date().toLocaleTimeString();
      const li = document.createElement("li");
      li.textContent = `${serviceName} - ${hotline} `;
      const span = document.createElement("span");
      span.textContent = time;
      span.classList.add("text-gray-400", "ml-2");
      li.appendChild(span);
      historyList.appendChild(li);

    } else {
      alert("Not enough coins to make a call!");
    }
  });
});
