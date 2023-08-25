interface StackItem {
  text: string;
  icon: string;
}

export interface Data {
  id: number;
  title: string;
  duration: string;
  description: string;
  content: string;
  icon: string;
  isPersonal: boolean;
  company: string;
  tags: string[];
}

export const PROJECT_DATA: Data[] = [
  {
    id: 0,
    title: "URCLASS",
    duration: "21.12 ~ 22.08",
    icon: "/images/codestates.png",
    isPersonal: false,
    company: "codestates",
    tags: ["typescript", "react", "apollo", "graphQL", "styled-component"],
    description: `#### 세부내용

    > todo: React component preview markdown text.`,
    content: "유어클래스.gif url",
  },
  {
    id: 1,
    title: "COZ 어드민",
    duration: "21.12 ~ 22.08",
    icon: "/images/urclass-admin.png",
    isPersonal: false,
    company: "codestates",
    tags: ["typescript", "react", "apollo", "graphQL", "styled-component"],
    description: "유어클래스 설명",
    content: "유어클래스.gif url",
  },
  {
    id: 2,
    title: "BOWL",
    duration: "22.08 ~ 23.08",
    icon: "/images/bowl.png",
    isPersonal: false,
    company: "codestates",
    tags: ["typescript", "nextJS", "react-query", "emotion"],
    description: "bowl 설명",
    content: "bowl.gif url",
  },
  {
    id: 3,
    title: "BOWL 어드민",
    duration: "22.08 ~ 23.08",
    icon: "/images/bowl-admin.png",
    isPersonal: false,
    company: "codestates",
    tags: ["typescript", "nextJS", "react-query", "emotion"],
    description: "bowl 어드민 설명",
    content: "bowl 어드민.gif url",
  },
  {
    id: 4,
    title: "DKT",
    duration: "21.05 ~ 21.12",
    icon: "/images/dktechin.png",
    isPersonal: false,
    company: "dk techin",
    tags: ["vue", "nuxt", "jQuery", "ejs"],
    description: "디케이테크인 프로젝트 설명",
    content: "디케이테크인.gif url",
  },
];
