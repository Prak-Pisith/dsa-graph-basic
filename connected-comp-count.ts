import { Graph } from "./graph";

function connectedComponentCount (graph: Graph<string>): number {

  const visited = new Set<string>();

  let count = 0;

  for (const node of Array.from(graph.nodes.keys())) {
    if (!visited.has(node)) {
      // Start of a new connected component
      count++;
      explore(graph, node, visited);
    }
  }

  return count;

}

function explore(graph: Graph<string>, currentNode: string, visited: Set<string>): void {

  visited.add(currentNode);

  for (const neighbor of graph.nodes.get(currentNode) ?? []) {
    if (!visited.has(neighbor)) 
      explore(graph, neighbor, visited);
  }
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



console.log(connectedComponentCount(myGraph));