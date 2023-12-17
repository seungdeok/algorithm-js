function getPrimes(num) {
  const primes = [false, false, ...Array(num - 1).fill(true)]; // 0, 1은 소수가 아니다.
  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * 2; j <= num; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes.filter(Boolean);
}
