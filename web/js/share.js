//페이스북 공유
function shareFacebook() {
  var sendUrl = "ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ"; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

//카카오톡 공유
function sendLink() {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "나에게 맞는 트랙을 찾아보세요!!",
      description: "나에게 맞는 트랙을 찾아보세요!!",
      imageUrl: "webimg\bugi_codding.png",
      link: {
        mobileWebUrl: "ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
        webUrl: "ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
      },
    },
    buttons: [
      {
        title: "테스트 하러가기!!",
        link: {
          mobileWebUrl: "ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
          webUrl: "ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
        },
      },
    ],
  });
}

//클립보드에 복사
function clip() {
  var url = "ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("클립보드에 복사되었습니다.");
}
