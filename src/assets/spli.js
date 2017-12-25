export function spli(str) {
  let index = str.indexOf('7')
  if (index !== 10) {
    return str
  } else {
    let arr = str.split('')
    arr[index] = 3
    return arr.join('')
  }
}
