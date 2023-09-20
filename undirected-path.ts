/* 
  Undirected Graph Path 

*/

import { Graph } from "./graph";

function undirectedPath (edges: string[][], nodeA: string, nodeB: string): boolean {
  const graph = buildUndirectedGraph(edges);
  console.log(graph);

  return hasPath(graph, nodeA, nodeB, new Set());

}

function buildUndirectedGraph (edges: string[][]): Graph<string> {
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

function hasPath (graph: Graph<string>, src: string, dest: string, visited: Set<string>): boolean {
  if (src === dest) return true;

  visited.add(src);

  for (const neighbor of graph.nodes.get(src) ?? []) {
    if (!visited.has(neighbor) && hasPath(graph, neighbor, dest, visited)) return true;
  }
  return false;
}

// Initalizes edges
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

console.log(undirectedPath(edges, 'j', 'm'));
console.log(undirectedPath(edges, 'j', 'x'));