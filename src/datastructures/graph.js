/**
 * @file 图
 */
import Dictionary from './dictionary';

export class Graph {
  /**
   * @param {boolean} isDirected - 是否有向
   */
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary(); // 用字典的形式来表示邻接表 - 表示边
  }

  // 添加一个新的顶点
  addVertex = (v) => {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  // 添加顶点之间的边
  addEdge = (v, w) => {
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }

    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }

    this.adjList.get(v).push(w);

    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }

  // 返回顶点列表
  getVertices() {
    return this.vertices;
  }

  // 返回边
  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }
}