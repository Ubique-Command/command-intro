# IT사역팀 소개 페이지

이 프로젝트의 목적은 결과물만 만드는 것이 아니라, 팀원 모두가 웹 프로젝트의 한 사이클을 직접 경험해보는 것입니다.

- 저장소 받아오기
- 의존성 설치
- 브랜치 따기
- 자기 페이지 수정
- 커밋
- 머지

전공자는 물론이고, GitHub나 개발이 처음인 팀원도 자신의 페이지를 하나 완성하고 협업 흐름을 경험할 수 있도록 구조를 단순하게 잡았습니다.

## 기술 스택

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- npm

## 처음 시작하기

### 1. 저장소 받기

이미 저장소 주소를 받은 경우 아래처럼 프로젝트를 복제합니다.

```bash
git clone <저장소-주소>
cd command-intro
```

이미 폴더를 받은 상태라면 해당 폴더로 이동하면 됩니다.

### 2. Node.js 확인

이 프로젝트는 Next.js 16 기반입니다. Node.js가 너무 낮으면 실행이 안 될 수 있습니다.

권장:

- Node.js 20.19 이상

버전 확인:

```bash
node -v
npm -v
```

### 3. 패키지 설치

프로젝트 루트에서 아래 명령어를 실행합니다.

```bash
npm install
```

이 프로젝트는 `prettier`를 프로젝트에 포함해서 사용합니다.
즉, 팀원 모두가 `npm install`을 실행하면 같은 코드 포맷터를 함께 설치하게 됩니다.

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:3000
```

### 5. 코드 포맷 맞추기

작업 시작 전이나 커밋 전에 아래 명령어를 실행하는 것을 권장합니다.

```bash
npm run format
```

포맷이 맞는지만 확인하려면:

```bash
npm run format:check
```

## 작업 시작 전 기본 흐름

각자 바로 `main` 브랜치에서 작업하지 않고, 자기 브랜치를 따서 작업합니다.

예시:

```bash
git checkout -b feature/hong-gildong-page
```

브랜치 이름 예시:

- `feature/hong-gildong-page`
- `feature/kim-hana-page`
- `feature/member-profile-update`

작업이 끝나면:

1. 변경 파일 확인
2. 커밋
3. 원격 브랜치에 푸시
4. Pull Request 또는 머지 요청

예시:

```bash
git status
git add .
git commit -m "Add Hong Gildong member page"
git push origin feature/hong-gildong-page
```

## 폴더 구조

```text
docs/
  prd.md
  architecture.md
src/
  app/
    layout.tsx
    page.tsx
    members/
      page.tsx
      [name]/
        page.tsx
  components/
    MemberCard.tsx
    ScrollToTopOnRouteChange.tsx
  data/
    members.ts
  member-pages/
    HongGildongPage.tsx
    KimHanaPage.tsx
    index.ts
  types/
    member.ts
```

## 어떤 파일을 수정해야 하나요?

### 1. 공통 레이아웃 수정

수정 파일:

- `src/app/layout.tsx`

이 파일에서는:

- 상단 네비게이션
- 공통 레이아웃
- 전역 공통 요소

를 관리합니다.

### 2. 메인 페이지 수정

수정 파일:

- `src/app/page.tsx`

이 파일에서는:

- 메인 소개 문구
- 히어로 섹션
- 팀 소개 섹션

를 관리합니다.

### 3. 팀원 목록 페이지 수정

수정 파일:

- `src/app/members/page.tsx`
- `src/components/MemberCard.tsx`

이 파일에서는:

- 팀원 목록 화면
- 카드 UI

를 관리합니다.

### 4. 팀원 상세 페이지 수정

가장 중요합니다.

각 팀원은 `src/member-pages/` 안에서 자기 페이지 파일을 수정하면 됩니다.

예시:

- `src/member-pages/HongGildongPage.tsx`
- `src/member-pages/KimHanaPage.tsx`

즉, 비전공자 팀원은 복잡한 라우팅 파일을 건드리지 않고 자기 소개 페이지 파일 하나만 수정해도 됩니다.

## 새 팀원 페이지를 추가하는 방법

새 팀원이 들어오면 아래 3가지만 하면 됩니다.

### 1. 새 페이지 파일 만들기

위치:

- `src/member-pages/`

파일명 규칙:

- React 컴포넌트 파일이므로 `PascalCase.tsx`

예시:

- `src/member-pages/ParkSomangPage.tsx`

기본 예시:

```tsx
import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "park-somang",
  name: "박소망",
  role: "운영 지원",
  bio: "팀 운영과 콘텐츠 흐름을 지원합니다.",
  image: "https://images.unsplash.com/photo-example",
  email: "somang@example.com",
  strengths: ["운영", "문서화", "커뮤니케이션"],
};

export default function ParkSomangPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1>{member.name}</h1>
        <p>{member.role}</p>
      </section>
    </main>
  );
}
```

### 2. `src/member-pages/index.ts`에 등록하기

이 파일은 팀원 페이지 목록을 연결하는 파일입니다.

수정 파일:

- `src/member-pages/index.ts`

해야 할 일:

- 새 파일 import 추가
- `memberPageModules` 배열에 새 팀원 추가

예시:

```tsx
import ParkSomangPage, {
  member as parkSomangMember,
} from "@/member-pages/ParkSomangPage";

export const memberPageModules: MemberPageModule[] = [
  // 기존 팀원들...
  {
    member: parkSomangMember,
    Page: ParkSomangPage,
  },
];
```

### 3. 확인하기

개발 서버 실행 후 아래를 확인합니다.

- `/members`에서 카드가 보이는지
- `/members/park-somang`으로 접속되는지

## 절대로 수정하지 않아도 되는 파일

처음 작업하는 팀원 기준으로, 아래 파일은 보통 직접 수정하지 않아도 됩니다.

- `src/app/members/[name]/page.tsx`
- `src/data/members.ts`
- `src/types/member.ts`

설명:

- `src/app/members/[name]/page.tsx`는 라우팅용 파일입니다.
- `src/data/members.ts`는 `member-pages`에서 데이터를 모아오는 역할만 합니다.
- `src/types/member.ts`는 타입 정의 파일입니다.

## 추천 작업 순서

처음 개발하는 팀원은 아래 순서대로 진행하면 됩니다.

1. 브랜치 생성
2. `npm install`
3. `npm run format:check`
4. `npm run dev`
5. `src/member-pages/내이름Page.tsx` 수정 또는 생성
6. `src/member-pages/index.ts` 등록
7. 브라우저에서 확인
8. `npm run format`
9. 커밋
10. 푸시
11. PR 또는 머지 요청

## 네이밍 규칙

현재 프로젝트 규칙:

| 대상 | 규칙 |
| --- | --- |
| 폴더 | `kebab-case` |
| React 컴포넌트 | `PascalCase.tsx` |
| 일반 TS 파일 | `kebab-case.ts` |
| 커스텀 훅 | `use-*.ts` |
| 함수·변수 | `camelCase` |
| 타입·인터페이스 | `PascalCase` |
| 상수 | `UPPER_SNAKE_CASE` |
| 라우트 | `kebab-case` |
| Next 특수 파일 | `page.tsx`, `layout.tsx` 등 공식 이름 유지 |
| 테스트 | `*.test.ts(x)` |
| 스토리 | `*.stories.tsx` |
| CSS Module | `ComponentName.module.css` |

## 자주 쓰는 명령어

개발 서버 실행:

```bash
npm run dev
```

Lint 확인:

```bash
npm run lint
```

코드 포맷 적용:

```bash
npm run format
```

코드 포맷 검사:

```bash
npm run format:check
```

배포용 빌드 확인:

```bash
npm run build
```

## 문서

기획/개발 기준 문서:

- `docs/prd.md`
- `docs/architecture.md`

기능 추가나 구조 변경이 생기면 이 문서도 함께 업데이트하는 것을 권장합니다.
