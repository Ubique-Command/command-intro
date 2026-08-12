# IT사역팀 소개 페이지 Architecture

## 기술 스택

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- 배포 대상: Vercel

## 디렉토리 구조

```text
docs/
  architecture.md
  prd.md
src/
  app/
    members/
      [name]/
        page.tsx
      page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    MemberCard.tsx
  data/
    members.ts
  member-pages/
    HongGildongPage.tsx
    KimHanaPage.tsx
    LeeJunePage.tsx
    ParkSomangPage.tsx
    index.ts
  types/
    member.ts
```

## 라우팅 구조

- `/`: 랜딩 페이지
- `/members`: 팀원 카드 목록
- `/members/[name]`: 팀원 상세 페이지

현재 구현은 `member.slug`를 기본 URL 식별자로 사용하고, 필요 시 `name`으로도 매칭한다. 팀원 상세 콘텐츠는 `src/member-pages/*` 파일에서 직접 렌더링되고, `app/members/[name]`는 적절한 파일을 찾아 보여주는 라우터 역할만 한다.

## 입력 → 처리 → 출력

### 랜딩 페이지

- 입력: 없음
- 처리: 팀 소개용 정적 섹션 렌더링
- 출력: 팀 비전/목적/협업 방식 카드와 `/members` 이동 버튼

### 팀원 목록 페이지

- 입력: `src/member-pages`에서 집계한 `members` 배열
- 처리: `MemberCard` 컴포넌트로 카드 목록 생성
- 출력: 반응형 그리드 카드 UI

### 팀원 상세 페이지

- 입력: 동적 라우트 파라미터 `params.name`
- 처리:
  - `decodeURIComponent`로 한글 경로를 안전하게 디코딩
  - `findMemberPageModule`로 `slug` 또는 `name` 매칭
  - 매칭된 팀원 파일의 기본 컴포넌트를 렌더링
  - 미일치 시 `notFound()` 호출
- 출력: 팀원별 개별 구성의 상세 페이지

## 데이터 구조

`Member` 인터페이스:

- `name`: 표시 이름
- `slug`: 기본 URL 식별자
- `role`: 직책/역할
- `bio`: 소개
- `image`: 프로필 이미지 URL
- `email`: 연락처성 정보
- `strengths`: 강점 목록

`MemberPageModule` 인터페이스:

- `member`: 목록 및 매칭에 사용하는 메타데이터
- `Page`: 해당 팀원의 실제 상세 소개 컴포넌트

## 상태 관리

- 현재 단계에서는 서버 컴포넌트 기반 정적 렌더링을 사용한다.
- 별도 전역 상태 관리 도구는 사용하지 않는다.
- 목록 데이터는 `src/member-pages/index.ts`에서 집계한다.
- 각 팀원은 자기 소개 페이지 파일만 수정하면 된다.

## API 경계

- 현재 외부 API 호출 없음
- 향후 CMS/DB 연동 시 `src/data`를 대체하거나 `lib` 계층을 추가해 조회 로직을 분리한다.
- 현재 구조는 정적 모듈 레지스트리 방식이므로, 새 팀원을 추가할 때 `src/member-pages/index.ts`에 등록이 필요하다.

## 예외 처리 기준

- 상세 페이지에서 매칭 실패 시 404 처리
- URL 디코딩 실패 시 원본 값을 사용해 한 번 더 매칭 시도

## 협업 기준

- Next.js App Router 프로젝트에서 `src/pages`는 실제 라우트 디렉토리로 해석될 수 있으므로 작업용 소개 페이지 저장소로 사용하지 않는다.
- 비전공자 팀원의 수정 범위를 줄이기 위해 상세 콘텐츠는 `src/member-pages/*.tsx` 개별 컴포넌트 파일에 둔다.
- 공통 라우팅 책임은 `src/app/members/[name]/page.tsx`에 유지한다.

## 보안 기준

- 민감한 개인정보는 저장하지 않는다.
- 현재 예시 이메일은 더미 데이터다.
- 추후 외부 데이터 연동 시 서버 전용 환경 변수는 Vercel 프로젝트 설정에서 관리한다.

## 배포 메모

- 일반적인 Next.js App Router 프로젝트이므로 별도 `vercel.json` 없이 배포 가능하다.
- 다만 현재 `create-next-app@latest`로 생성된 Next 16 계열은 Node `20.19+` 또는 상위 버전을 요구할 수 있으므로, 로컬 및 배포 환경의 Node 버전을 해당 기준에 맞추는 것이 안전하다.
