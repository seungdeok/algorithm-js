function bfs(start, dest) {
  const queue = [];
  queue.push([start, 0]);

  while (queue.length !== 0) {
    let [cur, time] = queue.shift();

    if (cur === dest) {
      return time;
    }

    for (let v of [cur - 1, cur + 1, cur * 2]) {
      if (!visited[v] && v >= 0 && v < 100000) {
        paths[v] = cur;
        visited[v] = 1;
        queue.push([v, time + 1]);
      }
    }
  }
}
