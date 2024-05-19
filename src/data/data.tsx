import styled from "@emotion/styled";
import { ReactNode } from "react";

export interface Data {
  id: number;
  title: string;
  duration: string;
  description: string;
  content?: ReactNode | null;
  icon: string;
  isPersonal: boolean;
  company: string;
  tags: string[];
  link?: string;
}

export const Wrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PROJECT_DATA: Data[] = [
  {
    id: 0,
    title: "DKT",
    duration: "21.05 ~ 21.12",
    icon: "https://olennis.github.io/portfolio/images/dktechin.png",
    isPersonal: false,
    company: "dk techin",
    tags: ["vue", "nuxt", "jQuery", "ejs"],
    description: `#### Introduce\n dk techin에서 카카오 공동체의 랜딩페이지, 이벤트 페이지 작업을 진행했습니다.
    \n 

    - 카카오 엔터테인먼트 랜딩 페이지 (https://kakaoent.com) 작업
    - 카카오 i laas 랜딩 페이지 (https://kakaoilaas.com) 작업
    - 카카오 뷰 이벤트 페이지 (카카오 이모티콘 증정) 작업
    - 카카오 T 이벤트 페이지 (음주운전 예방) 작업
    `,
    content: (
      <Wrapper>
        <img
          src="https://olennis.github.io/portfolio/images/project/dkt1.png"
          width="100%"
          height="auto"
          alt="kakao_ent"
        />
        <img
          src="https://olennis.github.io/portfolio/images/project/dkt2.png"
          width="100%"
          height="auto"
          alt="kakao_ent"
        />
      </Wrapper>
    ),
  },

  {
    id: 1,
    title: "URCLASS",
    link: "urclass.codestates.com",
    duration: "21.12 ~ 22.08",
    icon: "https://olennis.github.io/portfolio/images/codestates.png",
    isPersonal: false,
    company: "codestates",
    tags: ["typescript", "react", "apollo", "graphQL", "styled-component"],
    description: `#### Introduce\n urclass는 코드스테이츠 수강생들의 학습을 돕기 위한 서비스입니다. 수강생들은 urclass에서 영상, 텍스트, 퀴즈 형태의 콘텐츠로 학습 할 수 있습니다.
    \n 또한 urclass는 수강생들의 학습뿐만 아니라 코드스테이츠 과정 지원, 지원자 선별, 파트너사 연결, 수강료 납부 등의 기능으로 유저에게 가치를 전달합니다.
    \n 저는 urclass에서 교육,콘텐츠 퍼널에서 프론트엔드 개발을 담당했고 출결시스템 개발과 학습페이지 개발을 진행했습니다.
    `,
    content: (
      <Wrapper>
        <img
          src="https://olennis.github.io/portfolio/images/project/urclass1.png"
          width="100%"
          height="auto"
          alt="urclass_main"
        />
        <img
          src="https://olennis.github.io/portfolio/images/project/urclass2.png"
          width="100%"
          height="auto"
          alt="urclass_content"
        />
        <img
          src="https://olennis.github.io/portfolio/images/project/urclass3.png"
          width="100%"
          height="auto"
          alt="urclass_째깍이"
        />
      </Wrapper>
    ),
  },
  {
    id: 2,
    title: "COZ 어드민",
    duration: "21.12 ~ 22.08",
    icon: "https://olennis.github.io/portfolio/images/urclass-admin.png",
    isPersonal: false,
    company: "codestates",
    tags: ["typescript", "react", "apollo", "graphQL", "styled-component"],
    description: `#### Introduce\n coz admin은 코드스테이츠 크루들의 업무를 돕기 위한 서비스입니다. 크루들은 수강생이 학습에 필요한 콘텐츠를 만들거나 수강생의 데이터를 확인 할 수 있습니다.
    \n coz admin은 수강생들의 학습뿐만 아니라 코드스테이츠 과정 지원, 지원자 선별, 파트너사 연결, 수강료 납부 등의 기능을 관리하게 되고 이를 통해 코드스테이츠 크루들은 보다 더 업무 효율을 높일 수 있습니다.\n

    - 어드민 페이지 마크업
    - 어드민 컴포넌트 구현
    - 출결시스템 기능 구현
    `,
  },
  {
    id: 3,
    title: "BOWL",
    link: "bowl.codestates.com",
    duration: "22.08 ~ 23.08",
    icon: "https://olennis.github.io/portfolio/images/bowl.png",
    isPersonal: false,
    company: "codestates",
    tags: ["typescript", "nextJS", "react-query", "emotion"],
    description: `#### Introduce\n BOWL은 코드스테이츠 수강생들의 학습을 돕기 위한 서비스입니다. 기존 urclass 제품이 유저가 일방적으로 수용할 수 밖에 없는 형태였기 때문에, 프로젝트 기반의 LMS 필요성이 높아져 BOWL을 개발 하게 됐습니다. 
    \n 수강생 유저는 카테고리에 맞게 프로젝트를 진행 할 수 있고, 제출 할 수 있습니다. 수강생 유저의 제출을 확인하면 리뷰어 유저에게 알림이 가게 되고, 리뷰가 진행됩니다. 1차 리뷰 이후 수강생 유저는 수정을 거쳐 최종 리뷰를 받을 수 있게 되고 2차 리뷰를 끝으로 프로세스는 종료됩니다.
    \n 추후 urclass의 이전을 목표로 콘텐츠 뷰어의 기능까지 개발하였고, 영상 콘텐츠 및 텍스트 콘텐츠의 전달과 수강생 유저의 진도율을 확인 할 수 있었습니다.
    `,
    content: (
      <Wrapper>
        <img
          src="https://olennis.github.io/portfolio/images/project/bowl1.png"
          width="100%"
          height="auto"
          alt="bowl_main"
        />
        <img
          src="https://olennis.github.io/portfolio/images/project/bowl2.png"
          width="100%"
          height="auto"
          alt="bowl_review"
        />
      </Wrapper>
    ),
  },
  {
    id: 4,
    title: "BOWL 어드민",
    duration: "22.08 ~ 23.08",
    icon: "https://olennis.github.io/portfolio/images/bowl-admin.png",
    isPersonal: false,
    company: "codestates",
    tags: ["typescript", "nextJS", "react-query", "emotion"],
    description: `#### Introduce\n BOWL admin은 코드스테이츠 크루들의 업무를 돕기 위한 서비스입니다. 크루들은 수강생이 학습에 필요한 콘텐츠를 만들거나 수강생의 데이터를 확인 할 수 있습니다.
    \n BOWL admin에서 크루들은 프로젝트와 프로그램을 생성 할 수 있고, 리뷰어와 유저의 현재 진행 상태를 관리 할 수 있습니다.
    \n 또한 프로그램별 유저의 진도율과 유저가 속해있는 모든 프로그램의 진도율, 평균 진도율등을 확인 할 수 있어 수강생의 학습 목표 설정이 가능하고 콘텐츠의 난이도를 조절 할 수 있습니다. \n

    - 어드민 페이지 마크업 및 어드민 Table 컴포넌트 구현
    - 수강생 진도율 확인 기능 구현
    - xlsx, csv로 데이터 추출 기능 구현
    `,
  },
  {
    id: 5,
    title: "Spacecloud",
    duration: "23.10 ~ 현재",
    icon: "https://olennis.github.io/portfolio/images/spacecloud.png",
    isPersonal: false,
    company: "nspace",
    tags: ["vue", "nuxt"],
    description: `#### Introduce\n spacecloud는 공간 공유 플랫폼 입니다. 
    \n 유저들은 spacecloud를 통해 사용 목적에 맞는 공간을 찾을 수 있고, 시간 및 패키지를 선택하여 예약 할 수 있습니다. 

    - spacecloud guest 사이드 유지/보수
    - 장기 미접속 유저 대상 이벤트 페이지 개발
    - 업무 효율화를 위한 개발 환경 설정 (sentry)
    - unit test case 작성
    - 애플 로그인 기능 추가
    - 레거시 코드 리팩토링
    `,
    content: (
      <Wrapper>
        <img
              src="https://olennis.github.io/portfolio/images/project/spacecloud1.png"
              width="100%"
              height="auto"
              alt="spacecloud_main"
        />
        <img
              src="https://olennis.github.io/portfolio/images/project/spacecloud2.png"
              width="100%"
              height="auto"
              alt="spacecloud_event_page"
        />
      </Wrapper>
      )
  },
];
