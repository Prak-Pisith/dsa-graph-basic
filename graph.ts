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

const graph = new Graph();
graph.addNode('a', ['b', 'c']);
graph.addNode('b', ['d']);
graph.addNode('c', ['e']);
graph.addNode('d', ['f']);

console.log(graph.nodes);