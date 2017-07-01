#  提示

## 如何让旋转依据图形中心进行

> canvas中的旋转只能针对左上角圆点进行，所以如果我们想要依据中心来进行旋转的话，我们需要先移动到图形的中心，再进行旋转操作。

```javascript

let angleInRadians = 45 * (Math.PI / 180)
let x = 100
let y = 100
let width = 50
let height = 50

context.translate(x + 0.5 * width, y + 0.5 * height)
context.rotate(angleInRadians)
context.fillStyle = 'red'
context.fillRect(-0.5 * width, -0.5 * height, width, height)

```

## 清除画布的方法

### 填充背景色

使用一个新的背景色填充整个画布可以实现清除
```javascript
context.fillStyle = '#000000'
context.fillRect(0, 0, canvas.width, canvas.height)
```

### 重置画布的宽和高

当画布的宽高被重新赋值后，当前画布内容会被移除
```javascript
canvas.width = canvas.width
canvas.height = canvas.height
```

### 使用`clearRect`函数

`clearRect`函数可以指定起始点的x、y位置以及宽度和高度来清除画布

```javascript
context.clearRect(0, 0, canvas.width, canvas.height)
```
