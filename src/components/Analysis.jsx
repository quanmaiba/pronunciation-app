import React from "react";
import { lookupPhonemes } from "../services/cmudict";
import distance from "../utils/levenshtein";

export default function Analysis({ target, transcript }) {
  const expected = target.toLowerCase().split(" ");
  const spoken = transcript.toLowerCase().split(" ");

  return (
    <div style={{ marginTop:20 }}>
      <h3>Analysis</h3>
      {expected.map((w,i)=> {
        const s = spoken[i] || "";
        const ePhones = lookupPhonemes(w);
        const sPhones = lookupPhonemes(s);
        return (
          <div key={i} style={{marginBottom:10}}>
            <b>{w}</b> → <span className={w===s?"correct":"wrong"}>{s||"(missing)"}</span>
            <br/>Expected: {ePhones.join(" ")}
            <br/>You said: {sPhones.join(" ")}
            <br/>Phoneme diff: {distance(ePhones.join(" "), sPhones.join(" "))}
          </div>
        );
      })}
    </div>
  );
}
