const PROFILE = {
  name: 'Jeongwon Kim',
  nameKo: '김정원',
  status: {
    ko: '2026.06부터 근무 가능',
    en: 'Available from 2026.06',
  },
  location: {
    ko: '서울 · 사업기획 / 서비스기획 / 글로벌사업 / AI·디지털',
    en: 'Seoul · Open to Business, Product, Global & AI Strategy roles',
  },
  heroLocation: {
    ko: 'Seoul, KR · 2026.06부터 근무 가능',
    en: 'Seoul, KR · Available from 2026.06',
  },
  roleFocus: {
    ko: '사업기획 · 서비스기획 · 글로벌사업 · AI/디지털',
    en: 'Business · Product · AI · Global',
  },
  strengths: {
    ko: '문제 발견 · 서비스 구현 · 운영 자동화',
    en: 'Problem discovery · Product execution · Operations automation',
  },
  email: 'jake051096@gmail.com',
  phone: '010-6303-4479',
  linkedin: 'https://www.linkedin.com/in/jeongwon-kim-06231a372',
};

const COPY = {
  metaTitle: {
    ko: '김정원 포트폴리오',
    en: 'Jeongwon Kim — Portfolio',
  },
  nav: {
    links: [
      { href: '#work', label: { ko: '프로젝트', en: 'Work' } },
      { href: '#experience', label: { ko: '경험', en: 'Experience' } },
      { href: '#skills', label: { ko: '역량', en: 'Skills' } },
      { href: '#contact', label: { ko: '연락처', en: 'Contact' } },
    ],
    contact: { ko: '연락하기', en: 'Contact' },
    openMenu: { ko: '메뉴 열기', en: 'Open menu' },
    closeMenu: { ko: '메뉴 닫기', en: 'Close menu' },
  },
  languageToggle: {
    ariaLabel: { ko: '언어 전환', en: 'Switch language' },
  },
  hero: {
    eyebrow: {
      ko: 'Business · Product · AI · Global',
      en: 'Business · Product · AI · Global',
    },
    title: {
      ko: {
        line1: '문제를 발견하고,',
        prefix: '서비스로 직접 ',
        accent: '구현합니다',
        suffix: '.',
      },
      en: {
        line1: 'I find problems',
        prefix: 'and turn them into ',
        accent: 'products',
        suffix: '.',
      },
    },
    keywords: [
      { ko: '#문제발견', en: '#ProblemDiscovery' },
      { ko: '#Product', en: '#Product' },
      { ko: '#AI', en: '#AI' },
      { ko: '#실행', en: '#Execution' },
      { ko: '#운영', en: '#Operations' },
      { ko: '#피드백', en: '#Feedback' },
      { ko: '#글로벌', en: '#Global' },
    ],
    workCta: { ko: '프로젝트 살펴보기', en: 'View work' },
    contactCta: { ko: '채용 문의', en: 'Get in touch' },
    clickHint: { ko: '클릭해보세요', en: 'Click to explore' },
    noteLabel: {
      ko: 'Jeongwon의 짧은 편지',
      en: 'A message from Jeongwon',
    },
    greeting: {
      ko: '안녕하세요 :)',
      en: 'Hi there :)',
    },
    letter: [
      {
        ko: '소소하게 편지로 저를 소개해볼게요.',
        en: 'A short note feels like the best way to introduce myself.',
      },
      {
        ko: '저는 호기심이 많아서\n새로운 것을 배우는 걸 좋아해요.',
        en: 'I am deeply curious,\nand I genuinely enjoy learning new things.',
      },
      {
        ko: '요즘은 러닝·커피·요리·언어 공부에\n빠져 있어요. 돌아보면 그 호기심이\n스포츠 현장, 글로벌 운영,\n서비스 기획으로 이어졌습니다.',
        en: 'Lately I have been into running, coffee, cooking, and language study,\nand looking back, that curiosity has taken me\nfrom sports and global operations\nto product planning.',
      },
      {
        ko: '여러분은 무엇을 좋아하시나요?\n김정원',
        en: 'What are you into these days?\nJeongwon Kim',
      },
    ],
    hobbies: [
      {
        src: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
        alt: { ko: '러닝', en: 'Running' },
      },
      {
        src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
        alt: { ko: '커피', en: 'Coffee' },
      },
      {
        src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
        alt: { ko: '요리', en: 'Cooking' },
      },
      {
        src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
        alt: { ko: '언어', en: 'Languages' },
      },
    ],
  },
  sections: {
    projects: {
      eyebrow: { ko: '주요 프로젝트 · Product in Practice', en: 'Featured Work · Product in Practice' },
      title: {
        ko: 'Business · Product · AI — 아이디어를 실제 서비스와 시스템으로.',
        en: 'Business · Product · AI — from ideas to products and operating systems.',
      },
      sub: {
        ko: '사용자 문제를 발견하고, 서비스 흐름과 운영 시스템으로 구현한 프로젝트.',
        en: 'Projects where I discovered user problems and turned them into product flows and operating systems.',
      },
    },
    experience: {
      eyebrow: { ko: '경험', en: 'Experience' },
      title: {
        ko: 'Global · Operations · Business — 다양한 환경에서 문제를 구조화하다.',
        en: 'Global · Operations · Business — structuring problems across different environments.',
      },
      sub: {
        ko: '프로그램 운영, 글로벌 고객 경험, 사업개발과 국제 협업까지 — 문제를 구조화하고 실행한 경험들입니다.',
        en: 'From program operations and global customer experience to business development and cross-cultural collaboration.',
      },
    },
    skills: {
      eyebrow: { ko: '역량 · 도구', en: 'Skills · Tooling' },
      title: {
        ko: '문제를 정의하고, 서비스와 운영을 설계하는 도구.',
        en: 'Tools for defining problems and designing products and operations.',
      },
      sub: {
        ko: '기획부터 구현·운영·개선까지 직접 연결해본 역량입니다.',
        en: 'Capabilities connecting planning, implementation, operations, and iteration.',
      },
      languagesTitle: { ko: '언어', en: 'Languages' },
      highlightsTitle: { ko: '하이라이트', en: 'Highlights' },
      highlights: [
        {
          ko: "L'Oréal Brandstorm 2025 <b class=\"text-fg\">국내 준결승 진출</b>",
          en: "L'Oréal Brandstorm 2025 <b class=\"text-fg\">Semi-Finalist</b>",
        },
        {
          ko: 'Date-navi <b class="text-fg">App Store 정식 출시</b>',
          en: 'Date-navi <b class="text-fg">Released on the App Store</b>',
        },
        {
          ko: '한국어 <b class="text-fg">원어민</b> · 영어 <b class="text-fg">비즈니스 실무</b> · 프랑스어 <b class="text-fg">중급</b> — 글로벌 커뮤니케이션',
          en: 'Korean <b class="text-fg">Native</b> · English <b class="text-fg">Business level</b> · French <b class="text-fg">Intermediate</b> — global communication',
        },
      ],
    },
    contact: {
      eyebrow: { ko: '함께 이야기해요', en: "Let's Talk" },
      title: {
        ko: '사업과 기술이\n서비스로 만나는 자리에서.',
        en: 'Where business and technology\nmeet in real products.',
      },
      sub: {
        ko: '연락 환영합니다. 보통 <b class="text-fg">24시간 이내</b> 회신드립니다.',
        en: 'I welcome conversations and usually reply within <b class="text-fg">24 hours</b>.',
      },
      statusLabel: { ko: '상태', en: 'Status' },
      statusValue: {
        ko: '사업기획 · 서비스기획 · 글로벌사업 · AI/디지털 포지션 오픈',
        en: 'Open to Business, Product, Global & AI Strategy roles',
      },
      availability: {
        ko: '정규직 시작 가능:',
        en: 'Full-time availability:',
      },
      emailAria: { ko: '이메일', en: 'Email' },
      phoneAria: { ko: '전화', en: 'Phone' },
      linkedinAria: { ko: '링크드인', en: 'LinkedIn' },
      footerPrimary: {
        ko: '© 2026 Jeongwon Kim · Designed in Pretendard',
        en: '© 2026 Jeongwon Kim · Designed in Pretendard',
      },
      footerSecondary: {
        ko: 'Trust Blue 디자인 시스템 기반',
        en: 'Built on the Trust Blue design system',
      },
    },
    preview: {
      label: { ko: '미리보기', en: 'Preview' },
    },
  },
};

const STATS = [
  {
    value: 'App',
    suffix: { ko: ' Store', en: ' Store' },
    label: { ko: '정식 출시', en: 'Released' },
    sub: { ko: 'Date-navi', en: 'Date-navi' },
    compact: true,
  },
  {
    value: '100',
    suffix: { ko: '+', en: '+' },
    label: { ko: '스타트업', en: 'Startups' },
    sub: { ko: '프로그램 운영', en: 'Program Operations' },
  },
  {
    value: 'Paris',
    suffix: { ko: ' 24', en: ' 24' },
    label: { ko: 'Olympics', en: 'Olympics' },
    sub: { ko: 'Global Operations', en: 'Global Operations' },
  },
  {
    value: '5',
    suffix: { ko: '', en: '' },
    label: { ko: '스폰서', en: 'Sponsors' },
    sub: { ko: 'HUFS Marathon · 약 300만 원 후원', en: 'HUFS Marathon · KRW 3M sponsorship' },
  },
];

const PROJECTS = [
  {
    id: 'date-navi',
    tag: 'AI Product / Service Planning',
    period: '2026',
    org: 'Date-navi',
    role: 'Product Planning · UX · AI Recommendation · Development · Operations',
    title: {
      ko: '데이트 계획의 반복 검색을 하나의 추천 흐름으로 바꾸다.',
      en: 'Turning repeated date-planning searches into one recommendation flow.',
    },
    headline: {
      ko: '"사용자 의도를 구조화해 실제 코스로 연결한 AI Product"',
      en: '"An AI product that structures user intent into an actual date course."',
    },
    summary: {
      ko: '데이트할 때마다 장소를 검색하고 후보를 비교한 뒤 코스로 조합해야 하는 불편에서 시작했습니다. 지역·날짜/시간·활동·분위기·카테고리·키워드를 입력하면 AI와 장소 검색 데이터를 활용해 여러 장소를 하나의 데이트 코스로 추천하는 iOS 앱을 직접 기획하고 출시했습니다.',
      en: 'The idea started with the repeated effort of searching for places, comparing candidates, and assembling a date course each time. I planned and released an iOS app that uses AI and place-search data to recommend a multi-stop date course from a user’s region, date and time, activities, mood, categories, and keywords.',
    },
    sections: [
      {
        h: {
          ko: 'Problem · Solution — 데이트 계획을 하나의 흐름으로',
          en: 'Problem · Solution — one flow for date planning',
        },
        body: [
          {
            ko: '장소 검색, 후보 비교, 이동 순서 결정, 코스 구성을 각각 해야 하는 반복적인 불편에서 문제를 정의',
            en: 'Defined the problem as the repeated effort of searching, comparing candidates, deciding the order, and assembling a course separately.',
          },
          {
            ko: '사용자가 지역·날짜/시간·활동·분위기·카테고리·키워드를 입력하면 여러 장소를 하나의 데이트 코스로 연결',
            en: 'Connected multiple places into one date course from the user’s region, date and time, activities, mood, categories, and keywords.',
          },
          {
            ko: '단순 장소 추천이 아니라 데이트 계획 전체를 하나의 제품 흐름으로 설계',
            en: 'Designed the full date-planning journey as one product flow rather than a simple place recommendation.',
          },
        ],
      },
      {
        h: {
          ko: 'Recommendation Design — AI 판단을 단계별로 관리',
          en: 'Recommendation Design — managing AI decisions in stages',
        },
        body: [
          {
            ko: '사용자 의도 구조화 → 검색 후보 생성 → 장소 데이터 수집 → 중복 제거 → 필수 조건 확인 → 품질 평가 → 최종 랭킹 단계로 추천 품질을 관리',
            en: 'Managed recommendation quality through intent structuring → candidate generation → place data collection → duplicate removal → eligibility checks → quality evaluation → final ranking.',
          },
          {
            ko: '사용자 입력을 그대로 AI에 전달하지 않고, 각 단계의 판단 기준과 결과를 분리해 검증 가능한 구조로 설계',
            en: 'Instead of passing raw input directly to AI, separated each stage’s decision criteria and output into a structure that could be checked.',
          },
        ],
      },
      {
        h: {
          ko: 'Iteration · Outcome — 피드백에서 출시 후 개선까지',
          en: 'Iteration · Outcome — from feedback to post-launch iteration',
        },
        body: [
          {
            ko: '초기 사용자 테스트에서 특정 키워드 과반영, 프랜차이즈 반복, 의도와 맞지 않는 장소, 추천 결과 생성 속도 문제를 확인',
            en: 'Early user tests revealed over-weighted keywords, repeated franchise recommendations, irrelevant places, and slow recommendation generation.',
          },
          {
            ko: '추천 단계를 분리하고 단계별 실패 원인을 확인할 수 있도록 구조를 개선',
            en: 'Improved the structure by separating recommendation stages so the cause of failure could be identified at each step.',
          },
          {
            ko: '<b>추천 로딩 속도 약 2~3초 → 0.3~0.6초</b> 수준으로 개선하고, <b>App Store 정식 출시</b> 및 Kakao Map 기반 장소 확인 기능 구현',
            en: 'Improved <b>recommendation loading from roughly 2–3 seconds to 0.3–0.6 seconds</b>, then <b>released on the App Store</b> with Kakao Map-based place verification.',
          },
        ],
      },
    ],
    media: [
      { type: 'img', src: 'assets/date-navi/home.png', label: { ko: '홈 화면', en: 'Home screen' } },
      { type: 'video', src: 'assets/date-navi/Course generate video.mp4', label: { ko: '코스 생성 영상', en: 'Course generation video' } },
      { type: 'img', src: 'assets/date-navi/recommendation-result.png', label: { ko: 'AI 추천 결과', en: 'AI recommendation result' } },
    ],
    badges: ['Product Planning', 'AI Service Design', 'UX', 'Recommendation Logic', 'React Native · Expo', 'Supabase', 'Kakao Map'],
    metrics: [
      { v: 'App Store', l: { ko: '정식 출시', en: 'Official release' } },
      { v: '0.3–0.6s', l: { ko: '추천 로딩 속도', en: 'Recommendation loading' } },
      { v: 'Kakao Map', l: { ko: '장소 확인 기능', en: 'Place verification' } },
    ],
    accent: 'from-trust to-trustdark',
  },
  {
    id: 'next-challenge',
    tag: 'Business Operations / Digital Product',
    period: '2026.04 — Present',
    org: 'Next Challenge — Global HQ',
    role: 'Business Operations · Digital Operations',
    title: {
      ko: '100개 스타트업 프로그램 운영을 하나의 디지털 시스템으로',
      en: 'Turning a 100-startup program into one digital operating system',
    },
    headline: {
      ko: '"흩어진 프로그램 운영을 하나의 디지털 시스템으로 만든 운영 기획"',
      en: '"A digital operations planner who connected a fragmented program into one system."',
    },
    summary: {
      ko: '약 100개 스타트업이 참여하는 구글플레이 창구 프로그램의 웹서비스, DB, 콘텐츠, 운영 흐름을 구축하고 반복 업무를 자동화한 프로젝트. 운영 문제를 발견하고 디지털 시스템으로 연결한 케이스.',
      en: 'A project that built the web service, database, content, and operating flows for a Google Play ChangGoo program serving around 100 startups, while automating repetitive work. It connects operational problems to a digital system.',
    },
    sections: [
      {
        h: {
          ko: 'Program System — 웹서비스와 운영 흐름 구축',
          en: 'Program System — building the service and operating flows',
        },
        body: [
          {
            ko: '프로그램 정보·신청·공지·자료·Q&A를 관리하는 공식 웹서비스 기획·개발·운영',
            en: 'Planned, developed, and operated the official web service for program information, applications, notices, resources, and Q&A.',
          },
          {
            ko: '약 100개 스타트업의 정보를 한곳에서 관리할 수 있도록 운영 DB와 정보 구조 설계',
            en: 'Designed the operating database and information structure to manage around 100 startups in one place.',
          },
          {
            ko: '프로그램 참여자와 운영 담당자가 같은 정보를 기준으로 움직일 수 있도록 흐름 정리',
            en: 'Organized the flows so program participants and operators could work from the same source of information.',
          },
        ],
      },
      {
        h: {
          ko: 'Data & Automation — 반복 업무를 줄이는 운영 구조',
          en: 'Data & Automation — reducing repetitive operations',
        },
        body: [
          {
            ko: '뉴스 모니터링 자동화와 AI 기반 데이터 분류·텍스트 정제로 운영 데이터 관리 개선',
            en: 'Improved operational data management through automated news monitoring, AI classification, and text cleanup.',
          },
          {
            ko: '프롬프트 기반 자동화 스크립트로 반복적인 카피·리스트 생성 업무 단순화',
            en: 'Simplified repetitive copy and list generation with prompt-driven automation scripts.',
          },
          {
            ko: '운영 담당자가 수작업보다 기획과 의사결정에 집중할 수 있도록 업무 흐름 개선',
            en: 'Improved the workflow so operators could spend more time on planning and decisions than manual work.',
          },
        ],
      },
      {
        h: {
          ko: 'Information Operations — 콘텐츠와 기업 정보의 일관성',
          en: 'Information Operations — consistent content and company data',
        },
        body: [
          {
            ko: 'Figma 기반 콘텐츠·랜딩 페이지 UI 정리와 프로그램 정보 구조 개선',
            en: 'Organized content and landing-page UI in Figma while improving the program information structure.',
          },
          {
            ko: '선정 기업 비즈니스 DB를 체계화하고 외부 커뮤니케이션의 기준 정리',
            en: 'Structured the selected companies’ business database and established standards for external communication.',
          },
        ],
      },
    ],
    url: 'https://ncf-aroundx.com/',
    media: [
      { type: 'iframe', src: 'https://ncf-aroundx.com/', label: { ko: '홈페이지', en: 'Website' } },
      { type: 'img', src: 'assets/next-challenge-admin.png', label: { ko: '관리자 페이지 화면', en: 'Admin panel screen' } },
      { type: 'img', src: 'assets/next-challenge-automation.png', label: { ko: '반복 업무 자동화', en: 'Repetitive work automation' } },
      { type: 'img', src: 'assets/next-challenge-figma-ui.png', label: { ko: 'Figma 기반 랜딩페이지/UI 설계', en: 'Figma-based landing page / UI design' } },
    ],
    badges: ['Business Operations', 'Service Planning', 'Digital Ops', 'Automation', 'AI / LLM', 'Data Management'],
    metrics: [
      { v: '100+', l: { ko: '스타트업 운영 DB', en: 'Startup operations records' } },
      { v: 'Web + DB', l: { ko: '프로그램 운영 시스템', en: 'Program operating system' } },
      { v: 'Automation', l: { ko: '반복 업무 개선', en: 'Repetitive work improved' } },
    ],
    accent: 'from-trust to-trustdark',
  },
];

const EXPERIENCES = [
  {
    id: 'next-challenge',
    tag: 'Business Operations · Automation',
    period: '2026.04 — Present',
    org: 'Next Challenge — Global HQ',
    role: 'Business Operations · Digital Operations',
    title: {
      ko: '100개 스타트업 프로그램의 웹서비스·DB·운영 흐름 구축',
      en: 'Built the web service, database, and operating flows for a 100-startup program',
    },
    bullets: [
      {
        ko: '약 100개 스타트업 대상 프로그램의 공식 웹서비스 기획·개발·운영',
        en: 'Planned, developed, and operated the official web service for a program serving around 100 startups.',
      },
      {
        ko: '프로그램 정보·신청·공지·자료·Q&A와 스타트업 DB 관리',
        en: 'Managed program information, applications, notices, resources, Q&A, and the startup database.',
      },
      {
        ko: '뉴스 모니터링과 반복적인 데이터·콘텐츠 운영 업무 자동화',
        en: 'Automated news monitoring and repetitive data and content operations.',
      },
      {
        ko: '운영 문제를 정보 구조와 디지털 시스템으로 연결한 경험',
        en: 'Connected operational problems to information structures and digital systems.',
      },
    ],
    badges: ['Business Operations', 'Digital Ops', 'Automation', 'Service Planning'],
  },
  {
    id: 'paris-2024',
    tag: 'Global Customer Experience · Event Operations',
    period: '2024.07 — 2024.08',
    org: 'Paris 2024 Olympics · Korea House',
    role: 'VIP Lounge Operations Coordinator',
    title: {
      ko: 'Korea House VIP Lounge — 글로벌 고객 경험과 현장 운영',
      en: 'Korea House VIP Lounge — global customer experience and event operations',
    },
    bullets: [
      {
        ko: 'Korea House VIP Lounge에서 다국적 VIP 응대와 현장 운영 지원',
        en: 'Supported multinational VIP guests and on-site operations at the Korea House VIP Lounge.',
      },
      {
        ko: '하루 20명 이상의 VIP 체크인·일정·재고 흐름 관리',
        en: 'Managed check-in, schedules, and inventory flows for 20+ VIP guests per day.',
      },
      {
        ko: '영어 및 기본 프랑스어로 현지 운영진과 한국 대표단 실시간 조율',
        en: 'Coordinated in English and basic French between local operators and the Korean delegation.',
      },
      {
        ko: '현장 이슈에 대응하며 글로벌 고객 경험과 크로스컬처 커뮤니케이션 수행',
        en: 'Handled on-site issues while delivering global customer experience and cross-cultural communication.',
      },
    ],
    badges: ['Global Ops', 'VIP Operations', 'Customer Experience', 'Cross-cultural Comm'],
  },
  {
    id: 'sports-events',
    tag: 'Business Development · Sponsorship',
    period: '2023.03 — 2023.06',
    org: {
      ko: '한국외국어대학교',
      en: 'Hankuk University of Foreign Studies',
    },
    role: 'Sponsorship & Administration · Team Project',
    title: {
      ko: '교내 마라톤 대회 — 파트너십과 사업개발',
      en: 'Campus marathon — business development and sponsorship',
    },
    bullets: [
      {
        ko: '약 150개 기업에 연락해 외부 파트너십 기회 발굴',
        en: 'Contacted around 150 companies to identify external partnership opportunities.',
      },
      {
        ko: '<b>스폰서 5개사 유치, 약 300만 원 후원, 약 150명 참가</b>',
        en: '<b>Secured 5 sponsors, raised about KRW 3M, and attracted around 150 participants.</b>',
      },
      {
        ko: '스폰서 제안서와 브랜드 노출·상호 혜택 구조 설계',
        en: 'Designed sponsorship proposals with visibility and mutual-benefit structures.',
      },
      {
        ko: '예산 집행, 기업 커뮤니케이션, 일정·운영 계획 문서화 담당',
        en: 'Handled budget execution, company communication, and documentation of schedules and operating plans.',
      },
      {
        ko: '돌발 상황에 대응하며 행사를 계획부터 현장 실행까지 운영',
        en: 'Operated the event from planning through on-site execution while responding to unexpected issues.',
      },
    ],
    badges: ['Business Development', 'Partnership', 'Sponsorship', 'Budget Mgmt'],
  },
  {
    id: 'neoma',
    tag: 'Global Communication · Cross-cultural Experience',
    period: 'International Experience',
    org: 'NEOMA Business School',
    role: 'International Student Experience',
    title: {
      ko: '영어 기반 수업과 국제 학생 협업',
      en: 'English-based coursework and cross-cultural collaboration',
    },
    bullets: [
      {
        ko: '영어 기반 수업과 다양한 국적의 학생들과의 팀 프로젝트 경험',
        en: 'Took English-based courses and worked on team projects with students from different countries.',
      },
      {
        ko: '국제 학생들과 협업하며 다른 관점과 업무 방식을 조율',
        en: 'Aligned different perspectives and ways of working through collaboration with international students.',
      },
      {
        ko: '프랑스 생활을 통해 문화적 맥락을 이해하고 글로벌 커뮤니케이션 시야 확장',
        en: 'Expanded my global communication perspective through life in France and cultural immersion.',
      },
      {
        ko: '언어와 문화가 다른 구성원 사이에서 협업하는 기반 형성',
        en: 'Built a foundation for collaborating across different languages and cultures.',
      },
    ],
    badges: ['Global Communication', 'Cross-cultural', 'Team Collaboration', 'France'],
  },
];

const SKILLS = [
  { group: 'Product', items: ['Product Planning', 'UX Flow', 'User Research · Feedback', 'Service Operations'] },
  { group: 'AI', items: ['LLM', 'Prompt Design', 'AI-assisted Prototyping', 'Recommendation Logic', 'Vision AI Understanding'] },
  { group: 'Data / Tech', items: ['Supabase', 'SQL', 'GA4', 'Firebase', 'API Integration', 'Git · GitHub'] },
  { group: 'Design', items: ['Figma', 'Photoshop'] },
  { group: 'Business', items: ['Business Planning', 'Program Operations', 'Partnership', 'Global Communication'] },
];

const LANGUAGES = [
  {
    lang: { ko: '한국어', en: 'Korean' },
    sub: { ko: '원어민', en: 'Native' },
    level: 1.0,
  },
  {
    lang: { ko: '영어', en: 'English' },
    sub: { ko: '비즈니스 실무', en: 'Business level' },
    level: 0.85,
  },
  {
    lang: { ko: '프랑스어', en: 'French' },
    sub: { ko: '중급', en: 'Intermediate' },
    level: 0.65,
  },
];

Object.assign(window, { PROFILE, COPY, STATS, PROJECTS, EXPERIENCES, SKILLS, LANGUAGES });
