/* 
  Graph Class
*/

export class Graph<T> {
  nodes: Map<T, T[]>;

  constructor() {
    this.nodes = new Map<T, T[]>();
  }

  addNode(node: T, neighbors: T[]): void {
    this.nodes.set(node, neighbors);
  }
}

// Initialized

export function initializedGraph (): Graph<string> {

  const graph = new Graph<string>();
  graph.addNode('a', ['b', 'c']);
  graph.addNode('b', ['d']);
  graph.addNode('c', ['e']);
  graph.addNode('d', ['f']);

  return graph;
}