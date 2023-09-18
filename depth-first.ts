import { Graph, initializedGraph } from "./graph";

// Iteratively
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

// Recursively
function depthFirstPrintRecursive<T> (graph: Graph<T>, source: T) {

  const visited = new Set<T>();
  if (visited.has(source)) {
    return;
  }
  console.log('current recursive: ' + source);
  visited.add(source);

  for (const neighbor of graph.nodes.get(source) ?? []) {
    depthFirstPrintRecursive(graph, neighbor);
  }
}

// Initialized Graph

const graph = initializedGraph();
const source = 'a';

depthFirstPrint(graph, source);
depthFirstPrintRecursive(graph, source);