module.exports = function multiply(first, second) {
  let a = first.split('').reverse(),
      b = second.split('').reverse(),
      c = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      c[i+j] = (c[i+j]) ? c[i+j] + +a[i] * +b[j] : +a[i] * +b[j];  
    }
  }

  for (var i = 0; i < c.length; i++) {
    let transfer = Math.floor(c[i] / 10);
    c[i] = c[i] % 10;
    if (c[i + 1])
      c[i + 1] += transfer;
    else if (transfer != 0)
      c[i + 1] = transfer;
  }

  return c.reverse().join('');
}
