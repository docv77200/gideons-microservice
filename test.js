import fetch from "node-fetch"; // Works because we are using ES Modules

async function sendNotification() {
    const response = await fetch("http://localhost:3000/send-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: "Hello from the test script!" })
    });

    const result = await response.json();
    console.log("📨 Server Response:", result);
}

sendNotification();
