/**
 * @file 数据结构和算法
 * @author haoran
 */
import main from '../../src/main';

const { DS, liquors } = main;

const {
  // StackFromArray,
  // StackFromObj,
  // Queue,
  // BinarySearchTree,
  Graph,
} = DS;

const {
  breadthFirstSearch,
} = liquors;

// let stackFromArray = new StackFromArray();
// let stackFromObj = new StackFromObj();

// console.log(stackFromArray);
// console.log(stackFromObj);

// let objectSymbols = Object.getOwnPropertySymbols(stackFromArray);
// console.log(objectSymbols);
// stackFromArray[objectSymbols[0]].push(1);
// console.log(stackFromArray.size());

// let queue = new Queue();
// console.log(queue);
// console.log(queue.isEmpty());

// const tree = new BinarySearchTree();
// tree.insert(11);
// tree.insert(15);
// tree.insert(5);

// const printNode = (value) => console.log(value);
// tree.inOrderTraverse(printNode);
// console.log('-----------');
// tree.preOrderTraverse(printNode);
// console.log('-----------');
// tree.postOrderTraverse(printNode);
// console.log('-----------');
// let minTest = tree.min();
// console.log(minTest);
// console.log('-----------');
// let maxTest = tree.max();
// console.log(maxTest);

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) { // {13} 
  graph.addVertex(myVertices[i]); 
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C'); 
graph.addEdge('A', 'D'); 
graph.addEdge('C', 'D'); 
graph.addEdge('C', 'G'); 
graph.addEdge('D', 'G'); 
graph.addEdge('D', 'H'); 
graph.addEdge('B', 'E'); 
graph.addEdge('B', 'F'); 
graph.addEdge('E', 'I');

console.log(graph.toString());

console.log(breadthFirstSearch);

const printVertex = (value) => console.log('Visited vertex: ' + value);

breadthFirstSearch(graph, myVertices[0], printVertex);

// const bfsCanvas = document.getElementById('BFS');
// const ctx = bfsCanvas.getContext('2d');

document.getElementById('bfs-init').addEventListener('click', () => {
  console.log(graph.getAdjList());
})