use client";

import { useEffect, useMemo, useState } from "react";

const stages = [
  ["3rd", 0],
  ["4th", 6],
  ["5th", 12],
  ["6th", 18],
  ["7th", 24],
  ["8th", 30],
];

function getStage() {
  const start = new Date(process.env.NEXT_PUBLIC_BATCH_START_DATE || "2026-09-04T00:00:00");
  const now = new Date();
  const months = Math.max(
    0,
    (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth()) -
      (now.getDate() < start.getDate() ? 1 : 0)
  );
  const index = Math.floor(months / 6);
  return index < stages.length ? `CST NEW ${stages[index][0]}` : "Batch 2028";
}

export default function Home() {
  const [title, setTitle] = useState("CST NEW 3rd");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState("inbox");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setTitle(getStage());
  }, []);

  const demoPeople = useMemo(() => ["Rahim", "Karim", "Sakib"], []);

  function signup() {
    if (!name.trim() || !password) return alert("Name and password are required.");
    alert("UI demo ready. Connect Supabase to enable real accounts.");
  }

  function login() {
    if (!name.trim() || !password) return alert("Enter your name and password.");
    setLoggedIn(true);
  }

  function sendMessage() {
    if (!message.trim()) return;
    setMessages((m) => [...m, { text: message, mine: true }]);
    setMessage("");
  }

  if (!loggedIn) {
    return (
      <main className="auth">
        <div className="glow" />
        <section className="authCard">
          <div className="brandIcon">C</div>
          <p className="eyebrow">PRIVATE CST MESSENGER</p>
          <h1>{title}</h1>
          <p className="muted">Friends only. Simple, fast and private.</p>

          <div className="field">
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your unique name" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>

          <button className="primary" onClick={login}>Log in</button>
          <button className="secondary" onClick={signup}>Create account</button>

          <p className="tiny">No email or phone number required.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="app">
      <aside className="sidebar">
        <div className="sideTop">
          <div className="miniLogo">C</div>
          <div>
            <strong>{title}</strong>
            <span>Batch 2028</span>
          </div>
        </div>

        <div className="search">
          <span>⌕</span>
          <input placeholder="Search people..." />
        </div>

        <div className="nav">
          <button className={tab === "inbox" ? "active" : ""} onClick={() => setTab("inbox")}>💬 Inbox</button>
          <button className={tab === "requests" ? "active" : ""} onClick={() => setTab("requests")}>👥 Requests</button>
          <button className={tab === "notes" ? "active" : ""} onClick={() => setTab("notes")}>📝 Notes</button>
        </div>

        <div className="people">
          {demoPeople.map((person) => (
            <button className="person" key={person}>
              <span className="avatar">{person[0]}</span>
              <span><b>{person}</b><small>Online</small></span>
              <i />
            </button>
          ))}
        </div>

        <div className="profile">
          <span className="avatar">{name[0]?.toUpperCase() || "U"}</span>
          <div><b>{name || "You"}</b><small>My profile</small></div>
          <button>⚙</button>
        </div>
      </aside>

      <section className="chat">
        <header className="chatHead">
          <div className="chatUser">
            <span className="avatar">R</span>
            <div><b>Rahim</b><small><span className="dot" /> Online</small></div>
          </div>
          <div className="actions">
            <button title="Audio call">📞</button>
            <button title="Voice message">🎙</button>
          </div>
        </header>

        <div className="storyBar">
          <span>📝 Today&apos;s notes</span>
          <button>Add note</button>
        </div>

        <div className="messages">
          <div className="date">TODAY</div>
          <div className="bubble">Welcome to {title} 👋</div>
          {messages.map((m, i) => (
            <div key={i} className={m.mine ? "bubble mine" : "bubble"}>{m.text}</div>
          ))}
        </div>

        <div className="composer">
          <button>＋</button>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Write a message..."
          />
          <button title="Voice message">🎙</button>
          <button className="send" onClick={sendMessage}>➤</button>
        </div>
      </section>
    </main>
  );
}