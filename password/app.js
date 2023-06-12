let answer = Math.floor(Math.random() * 100);

let n1 = 0;
let n2 = 100;
while (true) {
  let guess = Number(prompt("請輸入猜測數值 (" + n1 + " ~ " + n2 + ")"));

  if (guess < n1 || guess > n2) {
    alert("無效猜測");
    continue;
  }
  if (guess == answer) {
    alert("正確!!正確答案為" + answer);
    break;
  } else if (guess < answer) {
    n1 = guess;
  } else if (guess > answer) {
    n2 = guess;
  }
}
