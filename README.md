# gideons-microservice
notification implementation
 Notification Microservice
 A REST API-based microservice that allows other applications to trigger system notifications on the host machine. It plays a sound and provides an interactive alert box.

📌 Features
✅ REST API-based notification service.
✅ Displays system notifications with sound.
✅ Supports custom messages.
✅ Includes a health check endpoint.
✅ Simple & lightweight, built with Node.js & Express.

 Installation & Setup
Clone the Repository



git clone <your-repo-url>
cd gideons-microservice
Install Dependencies

sh
npm install
Run the Microservice

sh
node server.js
Verify the Service is Running Open a browser and visit:
http://localhost:3000/health
✔ Expected response:
{ "status": "Notification Service is running" }

 API Endpoints
1️ Health Check
Endpoint: GET /health
Description: Checks if the microservice is running.
Example Request:

sh
curl -X GET "http://localhost:3000/health"


Example Response:
{ "status": "Notification Service is running" }
2️⃣ Send a Notification
Endpoint: POST /send-notification

Description: Triggers a system notification with sound and a pop-up window.

Request Parameters (JSON Body):

text (string) → The message to display in the notification.
Example Request (cURL):


Example Request (Python):

python

import requests
url = "http://localhost:3000/send-notification"
data = { "text": "Reminder: Meeting at 3 PM!" }
headers = { "Content-Type": "application/json" }

response = requests.post(url, json=data, headers=headers)
print(response.json())  # Prints success or error message

Example Request (JavaScript - Fetch API)
js
fetch("http://localhost:3000/send-notification", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: "Don't forget to submit your report!" })
})
.then(response => response.json())
.then(data => console.log("Server Response:", data))
.catch(error => console.error("Error:", error));
Example Response (Success):

json
{
    "status": "success",
    "message": "Notification sent successfully"
}
Example Response (Failure - Missing Text Field):

json
Copy
Edit
{
    "status": "error",
    "message": "Text is required"
}
 How It Works
Another service  makes a POST request to /send-notification with a text field.
The microservice displays a system notification on the host machine.
The service responds with success or failure.

 FAQ
1. Does this work on all operating systems?
It works best on Windows and macOS. Some Linux setups may require additional configuration.
2. Can I modify the notification behavior?
Yes! Modify the notifier.notify() options in server.js to adjust:
The title
The message
The sound
Whether it stays open until dismissed.
3. What if notifications don’t appear?
 Check System Settings → Notifications and allow notifications for Terminal


<img width="910" alt="Screen Shot 2025-02-24 at 5 40 59 PM" src="https://github.com/user-attachments/assets/2593118c-f237-4d66-b92b-f8e53e6ca7fc" />
