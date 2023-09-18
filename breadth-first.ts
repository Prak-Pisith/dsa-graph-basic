/* 
  Breadth First Traversal
*/

import { Graph, initializedGraph } from "./graph";

function BreadthFirstTraversal<T> (graph: Graph<T>, source: T) {
  
  const visited = new Set<T>();

  const queue = [ source ];

  while (queue.length > 0) {
    const current = queue.shift();

    if (visited.has(current!)) {
      continue;
    }
  
    visited.add(current!);

    console.log(current);

    for (const neighbor of graph.nodes.get(current!) ?? []) {
      if(!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

// Initialized Graph

const graph = initializedGraph();
const source = 'a';

BreadthFirstTraversal(graph, source);