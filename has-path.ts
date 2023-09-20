/* 
  Has Path
*/

import { Graph, initializedGraphV2 } from "./graph";

// Depth First - Recursive
function hasPathDFS<T> (graph: Graph<T>, src: T, dest: T): boolean {

  if (src === dest) return true;

  for (const neighbor of graph.nodes.get(src) ?? []) {
    if (hasPathDFS (graph, neighbor, dest) === true) return true;
  }

  return false;
}

// Breadth First - Iterative 
function hasPathBFS<T> (graph: Graph<T>, src: T, dest: T): boolean {

  const queue = [ src ];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dest) return true;

    for (const neighbor of graph.nodes.get(current!) ?? []) {
      queue.push(neighbor);  
    }

  }
  return false;
}

// Initialized Graph
const graph = initializedGraphV2();
const src = 'f';
const dest = 'k';

console.log(hasPathDFS(graph, src, dest));
console.log(hasPathBFS(graph, src, dest));