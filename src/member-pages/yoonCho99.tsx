import { Member } from "@/types/member";

/**
 *
 * JSP는 대부분 서버 렌더링 주로 서버가 데이터를 넣어 완성된 HTML 페이지
 * TSX는 화면을 재사용 가능한 React 컴포넌트로 만들고, 데이터나 상태가 바뀌면 필요한 화면만 다시 그림
 * SSR / CSR 개념 알아 보기 현 페이지는 ssg 에 가깝다 우리가 npm run bulid 시 생선된거라
 * page 개념 좀 이해 필요
 */

export const member: Member = {
  slug: "yooncho99",
  name: "조윤구",
  role: "백엔드 개발자",
  bio: "부족하지만 잘 부탁드립니다 ㅎㅎ java만 하다가 신기",
  image: "/images/profiles/yooncho99.png",
  strengths: ["섬길 수 있는 실용적인 작업", "서로 배려하기", "함께 성장하기"],
};

export default function YoonCho99Page() {
  return (
    <main className="min-h-screen bg-[#f2ece2] text-stone-950">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center px-6 py-16 sm:px-10">
        <div className="w-full">
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
            안녕하세요,
            <br />
            <span className="text-amber-700">{member.name}</span>입니다.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
            {member.bio} 함께 해서 기쁘네여 Next.js 처음해보는데 신기 하네요
          </p>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            개인적 소망
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {member.strengths.map((strength, index) => (
              <article
                key={strength}
                className="rounded-2xl border border-stone-300/70 bg-white/80 p-6 shadow-[0_16px_40px_rgba(28,25,23,0.06)]"
              >
                <span className="text-xs font-semibold text-amber-700">
                  0{index + 1}
                </span>
                <h2 className="mt-8 text-lg font-semibold">{strength}</h2>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
