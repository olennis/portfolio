interface StackItem {
  text: string;
  icon: string;
}

interface DockData {
  icon: string;
  name: string;
  duration?: string;
  isIntern?: boolean;
  content: StackItem[];
}

export const CAREERDATA: DockData[] = [
  {
    name: "코드스테이츠",
    duration: "20.11 - 21.03",
    isIntern: true,
    content: [
      { text: "운영자동화 백오피스 개발", icon: "/images/system.png" },
      { text: "팀 편성 알고리즘 구현", icon: "/images/algorithm.png" },
      { text: "수료생 체크인 진행", icon: "/images/checkin.png" },
      { text: "수강생 대상 세션 진행", icon: "/images/session.png" },
    ],
    icon: "/images/codestates.png",
  },
  {
    name: "디케이테크인",
    duration: "21.05 - 21.12",
    content: [
      { text: "카카오 공동체 랜딩 페이지 제작", icon: "" },
      { text: "카카오 뷰 이벤트 페이지 제작", icon: "" },
      { text: "카카오 iLaaS 페이지 제작", icon: "" },
      { text: "카카오 T 이벤트 페이지 제작", icon: "" },
    ],
    icon: "/images/dktechin.png",
  },
  {
    name: "코드스테이츠",
    duration: "21-12 ~ 현재",
    content: [
      { text: "운영자동화 백오피스 개발", icon: "/images/system.png" },
      { text: "팀 편성 알고리즘 구현", icon: "/images/algorithm.png" },
      { text: "수료생 체크인 진행", icon: "/images/checkin.png" },
      { text: "수강생 대상 세션 진행", icon: "/images/session.png" },
    ],
    icon: "/images/codestates.png",
  },
];
export const STUDYDATA: DockData[] = [
  {
    name: "github",
    content: [
      { text: "", icon: "" },
      { text: "", icon: "" },
    ],
    icon: "",
  },
  {
    name: "notion",
    content: [
      { text: "", icon: "" },
      { text: "", icon: "" },
    ],
    icon: "",
  },
];
