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

export function initializedGraphV2 (): Graph<string> {
  const graph = new Graph<string>();
  graph.addNode('f', ['g', 'i']);
  graph.addNode('g', ['h']);
  graph.addNode('h', []);
  graph.addNode('i', ['g', 'k']);
  graph.addNode('j', ['i']);
  graph.addNode('k', []);
  return graph;
}

export function initializedGraphUndirected (): Graph<string> {
  const graph = new Graph<string>();
  graph.addNode('i', ['j', 'k']);
  graph.addNode('j', ['i']);
  graph.addNode('k', ['i', 'm', 'l']);
  graph.addNode('l', ['k']);
  graph.addNode('m', ['k']);
  graph.addNode('n', ['o']);
  graph.addNode('o', ['n']);
  return graph;
}