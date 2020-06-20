https://www.jianshu.com/p/e984206553c2

1唯一数据源
整个应用的state都被存储到一个状态树里面，并且这个状态树，只存在于唯一的store中

2保持只读状态
state是只读的，唯一改变state的方法就是触发action，action是一个用于描述以发生时间的普通对象

3数据改变只能通过纯函数来执行
使用纯函数来执行修改，为了描述action如何改变state的，你需要编写reducers

作者：该用户太帅没有设置昵称
链接：https://www.jianshu.com/p/e984206553c2
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。