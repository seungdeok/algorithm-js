/**
 * 가중치가 없으면 -> BFS
 * 양의 가중치 -> 다익스트라
 * 음의 가중치 -> 벨만-포드
 * 모든 정점 사이의 최단 경로 -> 플로이드-워셜(Floyd-Warshall)
 */

/**
 * BFS
 */
function BFS(N, road, K) {
  const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const lines = Array.from(Array(N + 1), () => []);

  road.forEach((value) => {
    // 연결되어 있는 경로를 모두 lines배열에 저장한다.
    let [a, b, c] = value;
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  });

  const queue = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  while (queue.length) {
    const cur = queue.pop();

    for (const next of lists[cur.to]) {
      // 모든 경로를 탐색
      if (arr[next.to] > arr[cur.to] + next.cost) {
        // 기존에 경로의 값보다 우회하는 값이 더 작으면 해당 값을 저장함
        arr[next.to] = arr[cur.to] + next.cost;
        queue.push(next);
      }
    }
  }

  return arr.filter((item) => item <= K).length; // 경로의 제한인 K보다 cost가 작은 경로의 수를 반환을 함
}

/**
 * 다익스트리
 */
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

/**
 * 플로이드-워셜(Floyd-Warshall)
 */
function floydWarshall(N, E, arr) {
  const dist = Array.from(Array(N), () => Array(N).fill(0));

  for (let i = 0; i < E; i++) {
    const [from, to, cost] = arr[i];
    dist[from - 1][to - 1] = cost;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        if (!dist[i][j]) {
          dist[i][j] = Infinity;
        }
      }
    }
  }

  for (let k = 0; k < N; k++) {
    //경유지
    for (let i = 0; i < N; i++) {
      //출발 정점
      for (let j = 0; j < N; j++) {
        if (dist[i][k] === Infinity || dist[k][j] === Infinity) {
          continue;
        }

        //도착 정점
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  console.log(dist);
}
