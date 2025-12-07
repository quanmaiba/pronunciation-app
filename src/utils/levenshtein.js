export default function levenshtein(a="", b="") {
  const A = a.split(" ");
  const B = b.split(" ");
  const dp = Array(A.length+1).fill().map(()=>Array(B.length+1).fill(0));
  for (let i=0;i<=A.length;i++) dp[i][0]=i;
  for (let j=0;j<=B.length;j++) dp[0][j]=j;
  for (let i=1;i<=A.length;i++)
    for (let j=1;j<=B.length;j++)
      dp[i][j] = Math.min(
        dp[i-1][j]+1,
        dp[i][j-1]+1,
        dp[i-1][j-1] + (A[i-1]===B[j-1]?0:1)
      );
  return dp[A.length][B.length];
}
