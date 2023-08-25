import {
  img_cremao_gif,
  img_cremao_thumbnail,
  img_ittang_gif,
  img_ittang_thumbnail,
  img_maplody_gif,
  img_maplody_thumbnail,
  img_meal_to_meal_gif,
  img_meal_to_meal_thumbnail,
} from '../assets';

export const MY_INFO = {
  name: '임현성',
  birthday: '1995.10.25',
  email: 'hgud55@gmail.com',
  address: '서울시 사당동 거주',
  githubUrl: 'https://github.com/Hendrix1995',
  blogUrl: 'https://hyeonsi.tistory.com',
  resume: 'https://url.kr/57nytx',
};

export const MY_HISTORY = [
  {
    from: '2022.03',
    to: '현재',
    contents: '오아시스비즈니스 (부동산, 금융 프롭핀테크(PropFinTech) 스타트업)',
  },
  {
    from: '2021.05',
    to: '2021.12',
    contents: '코드스테이츠 (Code States) Advanced software engineering, IP (33기 수료)',
  },
  {
    from: '2020.01',
    to: '2020.05',
    contents: '싱가포르 해외 취업, 바차커피(Bacha Coffe) 근무',
  },
];

export const MY_SKILLS = [
  { name: 'Language', contents: ['Typescript', 'JavaScript'] },
  { name: 'Framework & Library', contents: ['React', 'GraphQL', 'react-query', 'tailwind(twind)', 'naver-maps-api'] },
  {
    name: 'Tools',
    contents: ['Git', 'AWS (S3, Rout53, Code Pipeline, CloudFront)', 'Figma', 'Slack', 'Notion', 'Confluence', 'Jira'],
  },
];

export const MY_PROJECTS = [
  {
    name: 'CREMAO',
    info: 'Naver-Maps-API 및 chart.js등을 이용한 상업용 부동산 검토 및 Tool',
    color: '#6A77FF',
    thumbnail: img_cremao_thumbnail,
    gif: img_cremao_gif,
    stack: [
      'turborepo',
      'React',
      'vite',
      'typescript',
      'twind(tilwindcss)',
      'apollo/client(GrapeQL)',
      'Chart.js',
      'Naver-Maps-API',
    ],
    result: [
      'rest-api를 이용한 초기 버전 구현 (2022.03 ~ 2022.06) 및 오픈',
      '디자인 리뉴얼',
      '회원기능 및 결제기능 추가, B to B -> B to C로 서비스 방식 변경 대응',
      '2.0 버전 리뉴얼 (보고서 기능 추가 및 PDF 출력 -> canvas 이용) (2022.06 ~ 2022.09)',
      '지도 기능 개편 및 보고서 사용성 개선 (2022.09 ~ 2022.12)',
      '보고서 데이터 및 페이지 개편 (2022.12 ~ 2023.02)',
      '보고서 공유 기능 추가 (2023.02 ~ 2023.03)',
      '수지분석 기능 업데이트 (2023.03 ~ 2023.07)',
    ],
    site: 'https://cremao.co.kr/map',
  },
  {
    name: 'ITTANG',
    info: 'Naver-Maps-API를 이용한 가상 창업 서비스',
    color: '#E63038',
    thumbnail: img_ittang_thumbnail,
    gif: img_ittang_gif,
    stack: ['Next.js', 'React', 'typescript', 'Naver-Maps-API'],
    result: ['유저 이용가이드 구현', '서비스 유지 보수', '서비스 데이터 변경 대응'],
    site: 'https://ittang.co.kr/',
  },
  {
    name: 'MEAL TO MEAL',
    info: '내가 먹은 맛있는 한 끼를 다른 이웃에게 나눌 수 있는 기부 플랫폼',
    color: '#F9CC1F',
    thumbnail: img_meal_to_meal_thumbnail,
    gif: img_meal_to_meal_gif,
    stack: ['React', 'React-Hooks', 'SASS / SCSS', 'Google Maps'],
    result: [
      '모든 페이지 디자인 및 기기에 따른 반응형 레이아웃 구현',
      'Google Maps 와 Geocoding을 사용하여 주소와 좌표의 변환을 이용한 마커의 생성',
      '가게의 카테고리, 상호, 주소 등을 이용한 검색 기능 구현 및 디자인',
      '마커를 클릭하거나 검색된 결과를 이용한 zoom과 화면 변경',
      '상황에 맞는 Alert 구현(예약 성공, 예약 실패, 가게 주인이 가게에서 먹기 버튼을 누를 경우, 결제 감사등)',
      '로그인, 회원가입 유효성 검사 구현',
      'React S3를 이용한 이미지 업로드와 미리 보기 구현',
      '장바구니 상품 추가 및 수량 조절, 삭제 구현',
      'Kakao API를 이용한 주소 검색기능',
      '결제 시스템에 필요한 정보를 Axios를 통해 서버로 데이터 전송',
      '모바일 내비게이션 디자인 및 기능의 구현',
    ],
    git: 'https://github.com/codestates/Meal-To-Meal',
    notion: 'https://codestates.notion.site/19-SUDO_HIRED-Meal-To-Meal-9d33d82100c94dc5bc999d1304113822',
    retrospection: 'https://hyeonsi.tistory.com/109',
  },
  {
    name: 'MAPLODY',
    info: '추억이 있는 음악을 들었던 장소와 함께 기록하는 서비스',
    color: '#2D2D2C',
    thumbnail: img_maplody_thumbnail,
    gif: img_maplody_gif,
    stack: ['React', 'React-Hooks', 'Styled Component', 'Google Maps', 'YouTube V3 API'],
    result: [
      'Landing Page, Loading Page, Main Page, Post, Post 등록, My Page Sidebar 등 전반적인 디자인과 구현',
      'Google Maps API Map 렌더 및 기능구현',
      'Marker 생성 시 Google Maps 좌표를 이용해 Geocoding을 이용해 일반적 주소로 변환 구현',
      'Marker 클릭 시 InfoWindow로 글 등록 시스템구현',
      '유저 정보 조회 및 작성 글 조회 기능을 Axios를 이용해 서버 연결 구현',
      '회원가입 및 회원 정보수정 유효성 검사 구현',
      'YouTube V3 API로 음악 동영상 검색 및 재생 구현',
    ],
    git: 'https://github.com/codestates/Maplody',
    retrospection: 'https://hyeonsi.tistory.com/108',
  },
];
