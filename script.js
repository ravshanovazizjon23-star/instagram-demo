
const BOT_TOKEN = ""
const CHAT_ID = "";

const form = document.getElementById("loginForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  const text =
    "📩 Yangi demo xabar\n\n" +
    "Login: " + username + "\n" +
    "Xabar: " + message;

  statusText.textContent = "Yuborilmoqda...";

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text
        })
      }
    );

    const result = await response.json();

    if (result.ok) {
      statusText.textContent = "Xabar yuborildi!";
      form.reset();
    } else {
      statusText.textContent = "Xatolik yuz berdi.";
    }
  } catch (error) {
    statusText.textContent = "Internet yoki server xatosi.";
  }
});
