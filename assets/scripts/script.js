const Bin = document.querySelector('.number')
const btnShake = document.querySelector('.btn')
const Display = document.querySelector('.display')

//
btnShake.onclick = function handshake () {
  const arr1 = [1000, 100, 10, 1]
  const arr2 = ['jump', 'close your eyes', 'double blink', 'wink']
  const max = 10000
  const map = {}
  let mapN
  const display = []
  const a = parseInt(Bin.value).toString(2)
  let result = a
  if (result - max >= 0) {
    result -= max
  }

  for (let i = 0; i < arr1.length; i++) {
    if (map[arr1[i]] === undefined) {
      map[arr1[i]] = arr2[i]
      mapN = map[arr1[i]]
    }
    if (a === arr1[i]) {
      display.push(mapN)
      break
    } else {
      if (result - arr1[i] >= 0) {
        result -= arr1[i]
        display.push(mapN)
        if (a >= max) {
          display.reverse()
        }
      }
    }
  }
  Display.innerHTML = display
}
