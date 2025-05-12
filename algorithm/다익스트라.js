const heap = new MinHeap();

function dijkstra(start, graph) {
  const dist = new Array(V + 1).fill(Number.MAX_SAFE_INTEGER);
  heap.push([0, start]);
  dist[start] = 0;

  while (heap.size() > 0) {
    const [curDist, curNode] = heap.pop();

    if (curDist > dist[curNode]) continue;

    for (const [nextNode, weight] of graph[curNode]) {
      const nextDist = curDist + weight;

      if (nextDist < dist[nextNode]) {
        dist[nextNode] = nextDist;
        heap.push([nextDist, nextNode]);
      }
    }
  }

  return dist;
}
