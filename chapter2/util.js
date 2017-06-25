window.util = {
  getAngle (radian) {
    return (Math.PI / 180) * radian
  },
  getRadian (angle) {
    return angle / (Math.PI / 180)
  }
}

// test
// $(win => {
//   let u = win.util
//   let angle = u.getAngle(95)
//   let radian = u.getRadian(angle)
//   console.log(radian)
// }, window)
// test end
