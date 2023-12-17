function solution(operations) {
  const answer = [];

  for (const operation of operations) {
    const [v, n] = operation.split(" ");
    const num = Number(n);

    if (v === "I") {
      answer.push(num);
      answer.sort((a, b) => b - a);
    } else if (v === "D" && num === 1) {
      answer.shift();
    } else if (v === "D" && num === -1) {
      answer.pop();
    }
  }

  return answer.length ? [answer[0], answer[answer.length - 1]] : [0, 0];
}
