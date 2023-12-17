let visitedBFS = Array().fill(false);
let bfsPaths = [];

function bfs(start) {
  const queue = [start];
  bfsPaths.push(start);

  while (queue.length) {
    const cur = queue.shift();
    visitedBFS[cur] = true;

    for (const next of list[cur]) {
      if (!visitedBFS[next]) {
        visitedBFS[next] = true;
        queue.push(next);
        bfsPaths.push(next);
      }
    }
  }
}
