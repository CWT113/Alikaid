# Javascript

## 对象

### 合并对象

1. `Object.assign()` 方法

   注意：后面对象的属性会覆盖前面对象的属性。

   ```js
   const obj1 = { a: 1, b: "str", c: true };
   const obj2 = { c: false, d: 6 };
   
   const result = Object.assign(obj1, obj2);  // { a: 1, b: "str", c: false, d: 6 }
   ```

2. lodash 库的 `_.assign()` 方法：

   ```js
   const obj1 = { a: 1, b: "str", c: true };
   const obj2 = { c: false, d: 6 };
   
   _.assign(obj1, obj2);	// // { a: 1, b: "str", c: false, d: 6 }
   ```

   



## map

### map替换if..else..

`if..else..`写法：

```js
const array = [
    { title: "未启用", state: "未反馈" },
    { title: "已启用", state: "已反馈" }
];

array.forEach(item => {
    if (item.title == "未启用") {
        item.title = "0";
    } else if (item.title == "已启用") {
        item.title = "1";
    }
    if (item.state == "未反馈") {
        item.state = "0";
    } else if (item.state == "已反馈") {
        item.state = "1";
    }
});
```

`map` 写法：

```js
const accept = {
    未启用: "0",
    已启用: "1"
};
const appoint = {
    未反馈: "0",
    已反馈: "1"
};

array.forEach(item => {
    item.title = accept[item.title];
    item.state = appoint[item.state];
});
```










