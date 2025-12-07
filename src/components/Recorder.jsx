import React, { useEffect, useRef, useState } from "react";

export default function Recorder({ onTranscript }) {
  const [listening, setListening] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;

    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = true;

    rec.onresult = (e) => {
      let text = "";
      for (let r of e.results) text += r[0].transcript + " ";
      onTranscript(text.trim());
    };

    rec.onend = () => setListening(false);
    ref.current = rec;
  }, []);

  return (
    <div>
      <button onClick={() => { listening?ref.current.stop():ref.current.start(); setListening(!listening); }}>
        {listening ? "Stop" : "Start Recording"}
      </button>
    </div>
  );
}
