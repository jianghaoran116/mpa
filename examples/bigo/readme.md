# Big O  
我们需要一个不用具体的测试数据来测试，就可以粗略地估计算法的执行效率的方法  

大O时间复杂度实际上**并不具体表示代码真正的执行时间**，而是表示**代码执行时间随数据规模增长的变化趋势**，所以，也叫作渐进时间复杂度（asymptotic time complexity），简称时间复杂度。

## 如何分析一段代码的时间复杂度  
- 只关注循环执行次数最多的一段代码  
- 加法法则：总复杂度等于量级最大的那段代码的复杂度  
- 乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积  

## 常见的时间复杂度  
- O(logn)、O(nlogn)  
``` javascript  
var i = 1;

while (i <= n) {
  i = i * 2;
}
```  
O(nlogn)也是一种非常常见的算法时间复杂度。比如，归并排序、快速排序的时间复杂度都是O(nlogn)  

- 最好情况时间复杂度（best case time complexity）  
- 最坏情况时间复杂度（worst case time complexity）  
- 平均情况时间复杂度（average case time complexity）  
- 均摊时间复杂度（amortized time complexity）  