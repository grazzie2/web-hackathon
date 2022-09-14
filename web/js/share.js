//페이스북 공유
function shareFacebook() {
  var sendUrl = "배포 URL을 넣어주세요"; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

//카카오톡 공유
function sendLink() {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "유형 테스트 제목",
      description: "유형테스트 설명",
      imageUrl: "./썸네일 이미지 경로",
      link: {
        mobileWebUrl: "배포 URL을 넣어주세요",
        webUrl: "배포 URL을 넣어주세요",
      },
    },
    buttons: [
      {
        title: "테스트 하러가기!!",
        link: {
          mobileWebUrl: "배포 URL을 넣어주세요",
          webUrl: "배포 URL을 넣어주세요",
        },
      },
    ],
  });
}

//클립보드에 복사
function clip() {
  var url = "배포 URL을 넣어주세요";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("클립보드에 복사되었습니다.");
}
