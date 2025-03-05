import { useState } from "react";

export default function SendEmail() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = async () => {
    setStatus("Sending...");
    const res = await fetch("/api/send-email.ts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to: email, subject, message }),
    });

    if (res.ok) {
      setStatus("Email sent successfully!");
    } else {
      setStatus("Failed to send email.");
    }
  };

  return (
    <div>
      <h1>Send Email via SES</h1>
      <input
        type="email"
        placeholder="Recipient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendEmail}>Send Email</button>
      <p>{status}</p>
    </div>
  );
}
