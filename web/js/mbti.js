const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 8; //문제의 수

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

  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var countstatusNum = document.querySelector(".countStatus");
  countstatusNum.innerHTML = qIdx + 1 + "/" + endPoint;
  var status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}

function addAnswer(answerText, qIdx) {
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
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450);
  }, 450);
  setResult();
}
function calResult() {
  var cnt0 = 0,
    cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;
  console.log(cnt0, cnt1, cnt2, cnt3);
  cnt0 = parseInt(document.getElementById("0").getAttribute("value"));
  cnt1 = parseInt(document.getElementById("1").getAttribute("value"));
  cnt2 = parseInt(document.getElementById("2").getAttribute("value"));
  cnt3 = parseInt(document.getElementById("3").getAttribute("value"));
  var max;
  max = Math.max(cnt0, cnt1, cnt2, cnt3);
  console.log(max);
  return max;
}

function setResult() {
  let mbti_result = calResult();

  function find_mbti(element) {
    if (element.name === mbti_result) return true;
  }

  const mbti_real_result = infoArray.find(find_mbti);

  const resultNameIntro = document.querySelector(".resultIntro");
  resultNameIntro.innerHTML = mbti_real_result.subtitle;

  const resultTitle = document.querySelector(".resultTitle");
  resultTitle.innerHTML = mbti_real_result.title + mbti_real_result.char;

  var resultImg = document.createElement("img");
  const imgDiv = document.querySelector("#resultImg");
  var imgURL = mbti_real_result.img;

  resultImg.src = imgURL;
  resultImg.classList.add("img-fluid");
  imgDiv.appendChild(resultImg);

  const resultName = document.querySelector(".resultNmae");
  resultName.innerHTML = mbti_real_result.name;

  const resultDesc1 = document.querySelector(".resultDesc1");
  resultDesc1.innerHTML = mbti_real_result.explain;

  const resultDesc2 = document.querySelector(".resultDesc2");
  resultDesc2.innerHTML = mbti_real_result.favorite;

  const resultDesc3 = document.querySelector(".resultDesc3");
  resultDesc3.innerHTML = mbti_real_result.dislike;
}
