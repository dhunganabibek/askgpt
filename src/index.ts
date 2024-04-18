import puppeteer from "puppeteer";

async function askGPT(message: string[] = ["How can i help you?"]) {
  console.log("Launching gpt...");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://chat.openai.com/", { waitUntil: "networkidle0" });
  await page.type("#prompt-textarea", message.join(" "));
  await page.keyboard.press("Enter");
}
askGPT();

export default askGPT;
