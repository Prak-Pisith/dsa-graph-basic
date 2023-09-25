import { Graph } from "./graph";

function largestComponent (graph: Graph<string>): number {

  const visited = new Set<string>();

  let largest: number = 0;

  for (const node of Array.from(graph.nodes.keys())) {
    if (!visited.has(node)) {
      const size = exploreSize (graph, node, visited);
      if (size > largest) largest = size;
    }
  }

  return largest;
}

function exploreSize (graph: Graph<string>, currentNode: string, visited: Set<string>): number {

  visited.add(currentNode);

  let size: number = 1;

  for (const neighbor of graph.nodes.get(currentNode) ?? []) {
    if (!visited.has(neighbor)) {
      size += exploreSize(graph, neighbor, visited);
    }
  }
  return size;
}

// Initialized Graph
const myGraph = new Graph<string>();
myGraph.addNode('0', ['8', '1', '5']);
myGraph.addNode('1', ['0']);
myGraph.addNode('5', ['0', '8']);
myGraph.addNode('8', ['0', '5']);
myGraph.addNode('2', ['3', '4']);
myGraph.addNode('2', ['3', '4']);
myGraph.addNode('4', ['3', '2']); // => 2

console.log(largestComponent(myGraph));