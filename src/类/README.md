# TS中的类

**属性**
使用属性列表来描述类中的属性

**属性的初始化检查**
```strictPropertyInitialization: true```

属性的初始化位置：
1. 构造函数
2. 属性默认值

**属性可以修饰为可选的** 

**属性也可以修饰为只读的**


**使用访问修饰符**
访问修饰符可以控制类中的某个成员的访问权限

- public: 默认的访问修饰符，公开的，所有的代码均可访问
- private: 私有的，只有在类中可以访问
- protected: ---------------


**属性简写**
如果某个属性通过构造函数的参数传递，并且不做任何处理的赋值给该属性。可以进行间歇

readonly id: number      //不能改变
    gender: "男" | "女" = "男"
    pid?: string
    private publishNumber: number = 3;      //每天一共可以发布多少篇文章
    private curNumber: number = 0;         //当前可以发布的文章数量

    constructor(public name: string, public age: number)


**访问器**

作用：用于控制属性的读取和赋值