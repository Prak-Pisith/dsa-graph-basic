import { Graph } from "./graph";

function shortestPath (edges: string[][], nodeA: string, nodeB: string): number | null {

  const visited = new Set();
  const graph = buildGraph(edges);
  console.log(graph);

  const queue: [string, number][] = [[nodeA, 0]];

  while (queue.length > 0) { 
    const [current, distance] = queue.shift();

    if (current === nodeB) return distance;

    visited.add(current);

    for (let neighbor of graph.nodes.get(current) ?? []) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return null;

}

function buildGraph (edges: string[][]): Graph<string> {

  const graph = new Graph<string>();

  for (const edge of edges) {
    const [a, b] = edge;
    if (!graph.nodes.has(a)) graph.nodes.set(a, []);
    if (!graph.nodes.has(b)) graph.nodes.set(b, []);
    graph.nodes.get(a)?.push(b);
    graph.nodes.get(b)?.push(a);
  }

  return graph;
}

// Initalizes edges
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
]

const nodeA = 'w';
const nodeB = 'z';

const shortestEdgePath = shortestPath(edges, nodeA, nodeB);
shortestEdgePath !== null
  ? console.log(`Shortest Path (by Edge Count) from ${nodeA} to ${nodeB}: ${shortestEdgePath} edges`)
  : console.log(`No path found from ${nodeA} to ${nodeB}`);