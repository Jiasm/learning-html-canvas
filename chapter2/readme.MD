#  提示

## 如何让旋转依据图形中心进行

> canvas中的旋转只能针对左上角圆点进行，所以如果我们想要依据中心来进行旋转的话，我们需要先移动到图形的中心，再进行旋转操作。

```javascript

let angleInRadians = 45 * (Math.PI / 180)
let x = 100
let y = 100
let width = 50
let height = 50

context.tranlate(x + 0.5 * width, y + 0.5 * height)
context.rotate(angleInRadians)
context.fillStyle = 'red'
context.fillRect(-0.5 * width, -0.5 * height, width, height)

```
