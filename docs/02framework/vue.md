https://zhuanlan.zhihu.com/p/135843274

https://www.jianshu.com/p/b1fb5d549fcd

https://zhuanlan.zhihu.com/p/92407628

vue 2.0 Object.defineProperty() vue 3.0 Proxy https://www.jianshu.com/p/2af90a8e5d39

无法监听数组变化
只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历，如果属性值也是对象那么需要深度遍历
兼容性好

可以直接监听对象而非属性，所以不必遍历监听属性
Proxy可以直接监听数组的变化
作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利
不兼容IE，是 ES6 为了操作对象而提供的新 API

作者：冰雪_666
链接：https://www.jianshu.com/p/2af90a8e5d39
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。