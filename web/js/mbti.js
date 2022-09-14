const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const result2 = document.querySelector("#result2");
const img = document.querySelector("#resultImg");
const endPoint = 8; //문제의 수
const type = [0, 0, 0, 0]

function start() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

function goNext(qIdx) {
  if (qIdx == endPoint) {
    goResult();
    return;
  }
  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  q.classList.add("my-3");
  q.classList.add("py-3");
  q.classList.add("mx-auto");

  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var countstatusNum = document.querySelector(".countStatus");
  countstatusNum.innerHTML = qIdx + 1 + "/" + endPoint;

  var status = document.querySelector(".progress-bar");
  status.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector(".aBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("my-3");
  answer.classList.add("py-3");
  answer.classList.add("mx-auto");
  answer.classList.add("fadeIn");

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        var target = qnaList[qIdx].a[idx].type;
        for(let i = 0; i < target.length; i++){
          type[target[i]] += 1;
        }
  
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
          
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}

function goResult() {
  qna.style.webkitAnimation = "fadeOut ls";
  qna.style.animation = "fadeOut ls";
  setTimeout(() => {
    result.style.webkitAnimation = "fadeIn ls";
    result.style.animation = "fadeOut ls";
    result2.style.webkitAnimation = "fadeIn ls";
    result2.style.animation = "fadeOut ls";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
      result2.style.display = "block";
    }, 450);
  }, 450);
  setResult();
}
function calResult(){
  var result = type.indexOf(Math.max(...type));
  return result;


function setResult() {
  let mbti_result = calResult();
  console.log(mbti_result)

  const resultName = document.querySelector(".resultName");
  const resultDesc1 = document.querySelector(".resultDesc1");
  const resultDesc2 = document.querySelector(".resultDesc2");

  switch(mbti_result){
    case 0:
      document.getElementById("resultImg").src = infoArray[0].img;
      resultName.innerHTML = infoArray[0].name;
      resultDesc1.innerHTML = infoArray[0].explain;
      resultDesc2.innerHTML = infoArray[0].obj;
      break;
    case 1:
      document.getElementById("resultImg").src = infoArray[1].img;
       resultName.innerHTML = infoArray[1].name;
      resultDesc1.innerHTML = infoArray[1].explain;
      resultDesc2.innerHTML = infoArray[1].obj;
      break;
    case 2:
      document.getElementById("resultImg").src = infoArray[2].img;
      resultName.innerHTML = infoArray[2].name;
      resultDesc1.innerHTML = infoArray[2].explain;
      resultDesc2.innerHTML = infoArray[2].obj;
      break;
    case 3:
      document.getElementById("resultImg").src = infoArray[3].img;
      resultName.innerHTML = infoArray[3].name;
      resultDesc1.innerHTML = infoArray[3].explain;
      resultDesc2.innerHTML = infoArray[3].obj;
      break;
  }
}
}
