import React, { useState } from "react";
import Recorder from "./components/Recorder";
import Analysis from "./components/Analysis";

function App() {
  const [target, setTarget] = useState("She sells seashells by the seashore");
  const [transcript, setTranscript] = useState("");

  return (
    <div style={{maxWidth:800, margin:"0 auto", background:"white", padding:20}}>
      <h1>Pronunciation Practice</h1>
      <textarea value={target} onChange={e=>setTarget(e.target.value)} style={{width:"100%"}} />
      <Recorder onTranscript={setTranscript} />
      <Analysis target={target} transcript={transcript} />
    </div>
  );
}

export default App;
