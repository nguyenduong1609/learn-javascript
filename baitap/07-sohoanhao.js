export function sohoanhao(n) {
  if (!Number.isFinite(n) || n <= 1 || n >= 1000) return undefined;
  let sum = 0;
  for (let i = 0; i <= Math.ceil(n / 2); i++) {
    if (n%i ===0) {
      sum +=i
    }
  }
  return sum===n
}
