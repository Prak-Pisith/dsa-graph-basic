import { Graph, initializedGraph } from "./graph";

function depthFirstPrint<T> (graph: Graph<T>, source: T) {

  const visited = new Set<T>();

  const stack: T[] = [ source ];
  
  while (stack.length > 0) {
    const current = stack.pop();
    console.log('current: ' + current);

    if (visited.has(current!)) {
      continue;
    }

    visited.add(current!);

    for (const neighbor of graph.nodes.get(current!) ?? []) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
}

// Initialized Graph

const graph = initializedGraph();
const source = 'a';

depthFirstPrint(graph, source);