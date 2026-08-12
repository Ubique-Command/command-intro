import Link from "next/link";

const visionItems = [
  {
    title: "정체성",
    description:
      "IT 기술을 통해 교회와 이웃을 섬기고, 청년들이 각자의 은사와 직무를 하나님 나라를 위해 사용할 수 있도록 돕는 공동체입니다.",
  },
  {
    title: "비전",
    description:
      "하나님께서 주신 지혜와 기술로 아직 보이지 않는 시대의 변화를 믿음으로 준비하며, 교회와 이웃을 살리는 프로덕트를 만들고 사람을 세웁니다.",
  },
  {
    title: "핵심 고백",
    description:
      "주신 지혜로 배우고, 맡기신 기술로 섬기며, 명하신 뜻대로 행합니다.",
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden bg-stone-950 text-white">
      <section className="relative isolate bg-stone-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.24),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(251,191,36,0.18),_transparent_22%),linear-gradient(180deg,_#17120d_0%,_#0c0a09_100%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-7xl flex-col justify-center px-6 pb-24 pt-8 sm:px-10 sm:pt-16 lg:px-12 lg:pt-20">
          <div className="grid items-end gap-14 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                IT Ministry Team
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-none tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                주신 지혜와 기술로
                <br />
                교회와 이웃을 섬깁니다.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
                Command는 하나님께 받은 지혜와 기술을 사용해 교회와 공동체에
                필요한 일을 책임 있게 감당하는 IT 사역 공동체입니다. 배우는 것에
                머무르지 않고, 각자의 은사와 역할로 공동체를 섬기며 사람을
                세우는 방향으로 기술을 사용합니다.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/members"
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-7 py-3.5 text-sm font-semibold text-stone-950 transition hover:bg-amber-200"
                >
                  팀원 소개 보기
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <article className="rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                  Mission
                </p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  교회와 이웃을 위한 기술
                </p>
              </article>
              <article className="rounded-[2rem] border border-white/10 bg-stone-900/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                  Workflow
                </p>
                <p className="mt-4 text-lg leading-7 text-stone-200">
                  프로젝트와 교육을 선택적 활동이 아니라 공동체를 섬기기 위해
                  맡겨진 역할로 받아들이고 함께 감당합니다.
                </p>
              </article>
              <article className="rounded-[2rem] bg-amber-300 p-6 text-stone-950">
                <p className="text-xs font-semibold uppercase tracking-[0.24em]">
                  Focus
                </p>
                <p className="mt-4 text-lg font-semibold leading-7">
                  프로덕트 제작, 중보기도, IT 인재 육성
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="team-overview"
        className="bg-[#f7f3ea] pb-24 pt-20 text-stone-950"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
                Team Overview
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-[2.8rem] lg:text-[3rem]">
                기술을 활용해
                <br />
                함께 섬기고
                <br />
                함께 세우는 팀
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {visionItems.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_24px_80px_rgba(28,25,23,0.08)]"
                >
                  <p className="text-sm font-semibold text-amber-700">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-stone-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
