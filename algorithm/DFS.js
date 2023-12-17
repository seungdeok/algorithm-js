let visitedDFS = Array().fill(false);
let dfsPaths = [];

function dfs(start) {
  visitedDFS[start] = true;
  dfsPaths.push(start);

  for (const next of list[start]) {
    if (next && !visitedDFS[next]) {
      dfs(next);
    }
  }
}
