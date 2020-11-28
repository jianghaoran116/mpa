/**
 * @file 广度优先遍历
 */
import { Queue } from '../datastructures/queue'

const Colors = {
  WHITE: 0,
  CREY: 1,
  BLACK: 2,
}

const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }

  return color;
}

/**
 * 广度优先遍历
 * @param {*} graph
 * @param {*} startVertex 
 * @param {*} callback 
 * @description 
 * 1. 创建一个队列Q
 * 2. 如果v为被发现的，将v入队列Q
 * 3. Q非空
 *   3.1 将 u 从 Q 中出队列；
 *   3.2 标注 u 为被发现的（灰色）；
 *   3.3 将 u 所有未被访问过的邻点（白色）入队列；
 *   3.4 标注 u 为已被探索的（黑色）。
 */
export const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();

  queue.enqueue(startVertex);

  while(!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;

    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
    if (callback) {
      callback(u);
    }
  }
}