import { dictionary } from "cmu-pronouncing-dictionary";

export function lookupPhonemes(word){
  if(!word) return [];
  const w = word.toUpperCase();
  const p = dictionary[w];
  if(!p) return [];
  return p[0].split(" ").map(x=>x.replace(/[0-9]/g,""));
}
