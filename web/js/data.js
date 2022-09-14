const qnaList = [
  //1번 질문
  {
    q: "나는 어플리케이션 개발에....",
    a: [
      {
        answer: "관심이 많다",
        type: ["0"],
      },
      {
        answer: "별로 관심이 없다",
        type: ["1", "2", "3"],
      },
    ],
  },
  // 2번 질문
  {
    q: "알파고가 바둑으로 사람을 이긴 것은....",
    a: [
      {
        answer: "매우 흥미로우며 다양한 분야에 인공지능을 접목시켜보고싶다.",
        type: ["1"],
      },
      {
        answer:
          "체스나 장기같은 게임은 이미 이긴 전적이 있으므로 바둑을 이긴것이 크게 특별하지 않다.",
        type: ["0", "2", "3"],
      },
    ],
  },
  // 3번 질문
  {
    q: "게임, 영화, 방송, 광고 등 다양한 장르의 인터랙티브 콘텐츠 제작에 관심이 있다.",
    a: [
      {
        answer: "네",
        type: ["2"],
      },
      {
        answer: "아니요",
        type: ["0", "1", "3"],
      },
    ],
  },
  // 4번 질문
  {
    q: "웹 페이지를 꾸미고 관리하는 것이 좋다.",
    a: [
      {
        answer: "네",
        type: ["3"],
      },
      {
        answer: "크게 흥미롭지는 않다",
        type: ["0", "1", "2"],
      },
    ],
  },
  // 5번 질문
  {
    q: "앱/포털/게임/공공서비스 개발자 및 관리자는...",
    a: [
      {
        answer: "아주 좋을 것 같다.",
        type: ["0"],
      },
      {
        answer: "단지 서비스를 이용하는게 재밌을 뿐 개발이나 관리는 관심없다.",
        type: ["1", "2", "3"],
      },
    ],
  },
  // 6번 질문
  {
    q: "나는 더욱 전문적인 학습을 위해 대학원에 가는 것을 감수할 수 있다.",
    a: [
      {
        answer: "대학원도 학원일뿐이다. 두렵지않다.",
        type: ["1"],
      },
      {
        answer: "대학원은 좀 부담이 된다.",
        type: ["0", "2", "3"],
      },
    ],
  },
  // 7번 질문
  {
    q: "공학적 사고역량과 협업 프로세스 구축 역량이 뛰어나다.",
    a: [
      {
        answer: "그런편이다.",
        type: ["3"],
      },
      {
        answer: "그쪽으로 특출난 것 같지는 않다.",
        type: ["0", "1", "2"],
      },
    ],
  },
  // 8번 질문
  {
    q: "시나리오, 이벤트 연출, 시스템 설계 등 기획 실무를 담당하는 인터랙티브 콘텐츠는...",
    a: [
      {
        answer: "흥미롭다.",
        type: ["2"],
      },
      {
        answer: "나와는 상관없다.",
        type: ["0", "1", "3"],
      },
    ],
  },
];

//트랙설명
var infoArray = [
  {
    name: "모바일소프트웨어 트랙",
    explain:
      "안드로이드와 iOS로 대표되는 스마트폰의 앱 개발 환경뿐만 아니라 무선 LAN, 무선 PAN 환경에서 동작하는 임베디드 시스템의 기술 개발, IoT 분야의 사물지능통신 분야 등의 산업체 요구에 부응하는 네트워크 지식과 프로그래밍 기술에 대한 이해를 바탕으로 소프트웨어 개발 능력을 배양하여 현장 실무 능력을 갖춘 모바일 소프트웨어 개발 전문가 양성합니다.",
    // obj == 졸업 후 진로
    obj: "ICT 소프트웨어 개발 전문가\r모바일 금융 및 보안 분야의 소프트웨어 개발자",
  },
  {
    name: "빅데이터 트랙",
    explain:
      "기본적인 데이터베이스 이론 및 설계 기술의 습득을 시작으로 다양한 분야에서 다양한 형태로 발생하는 빅데이터를 실질적으로 수집/분석/활용할 수 있는 데이터 마이닝 기술 및 실제 프로젝트 수행 교과목 등을 통해 사회 수요에 맞는 실무 중심의 교육을 실시합니다.",
    // obj == 졸업 후 진로
    obj: "빅데이터를 전문적으로 다루는 데이터 사이언티스트(scientist)\r인공지능 S/W 전문가",
  },
  {
    name: "디지털콘텐츠·가상현실 트랙",
    explain:
      "가상현실, 증강현실, 혼합현실 등 실감 기술을 적용한 디지털콘텐츠 시장의 발전과 더불어 엔터테인먼트 분야는 물론 국방, 재난, 안전, 의료, 교육 등 공공서비스와 제조, 농업, 미디어 등 산업, 과학기술 전 분야에 활용 가능한 디지털콘텐츠 제작 및 가상현실 소프트웨어 개발능력을 갖춘 융합형 소프트웨어 전문가를 양성합니다.",
    // obj == 졸업 후 진로
    obj: "영상기반 콘텐츠 제작자\r게임 그래픽 및 애니메이션 제작자",
  },
  {
    name: "웹공학 트랙",
    explain:
      "빅 데이터, 클라우드, IoT와 같은 신사업이 등장함에 따라 웹 플랫폼은 신사업의 구축 인프라가 되는 중요한 기술입니다. 프론트엔드(겉으로 보여지는 홈페이지)와 백엔드(서버) 기술을 통합한 엔지니어양성을 목표로 합니다.",
    // obj == 졸업 후 진로
    obj: "컴퓨터 보안 전문가\r데이터베이스 설계 및 개발자",
  },
];
