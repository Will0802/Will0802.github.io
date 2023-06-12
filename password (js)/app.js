//宣告DOM
const guessInput = document.getElementById("guess_input");
const hintArea = document.querySelector(".hint");
const guessBtn = document.getElementById("guess_btn");
const restartBtn = document.getElementById("restart_btn");
const answerBtn = document.getElementById("answer_btn");

//宣告變數
let minNum, maxNum, answerNum, guessNum;

//DOM事件掛載
answerBtn.addEventListener("click", function () {
  alert(answerNum);
});

restartBtn.addEventListener("click", function () {
  init();
});

guessBtn.addEventListener("click", guess);

window.addEventListener("load", function () {
  console.log("load event");
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event");
});

window.onload = function () {
  init();
};

function guess() {
  const val = guessInput.value.trim();
  if (val === "" || isNaN(val) || val[0] === "0") {
    alert("輸入正確數字");
    guessInput.value = "";
    return;
  }
  guessNum = parseInt(val);

  if (ischeckNum()) {
    return;
  }

  if (guessNum === answerNum) {
    alert(`答案是 ${answerNum}`);
    init();
    return;
  } else if (guessNum < answerNum) {
    minNum = guessNum;
  } else if (guessNum > answerNum) {
    maxNum = guessNum;
  }
  guessInput.value = "";
  showHint();
}

function ischeckNum() {
  if (guessNum < minNum || guessNum > maxNum) {
    showHint();
    guessInput.value = "";
    alert("請輸入範圍");
    return true;
  }
  return false;
}

function showHint() {
  hintArea.textContent = `請輸入${minNum} - ${maxNum} 之間的數字`;
}

//預設值處理
function init() {
  guessInput.value = "";
  minNum = 1;
  maxNum = 100;
  answerNum = generateAnswer();
  hintArea.textContent = `請輸入${minNum} - ${maxNum} 之間的數字`;
}

function generateAnswer() {
  return getRandomIntIcclusive(1, 100);
}
function getRandomIntIcclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function insertNum(event) {
  guessInput.value += event.target.textContent;
}

const btngp = document.querySelectorAll(".btn_num").forEach((el) => {
  el.addEventListener("click", insertNum);
});

// 迴圈方式
for (let el of btngp) {
  el.addEventListener("click", insertNum);
}
