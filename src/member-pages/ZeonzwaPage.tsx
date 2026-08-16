import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "zeonzwa",
  name: "Zeonzwa",
  role: "IT 사역팀 · Web Learner",
  bio: "새로운 기술을 배우고, 작은 시도를 실제 화면으로 완성해 가는 팀원입니다.",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  email: "hello@example.com",
  strengths: ["새로운 것 배우기", "문제 끝까지 파고들기", "기록하고 공유하기"],
};

const profileNotes = [
  {
    number: "01",
    title: "Learn",
    description:
      "모르는 것을 숙제로 남겨두기보다, 작게라도 직접 만들며 배웁니다.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "아이디어가 사람이 실제로 사용할 수 있는 화면이 되는 과정을 좋아합니다.",
  },
  {
    number: "03",
    title: "Share",
    description:
      "배운 것과 막힌 지점을 기록해 다음 사람의 시작을 좀 더 쉽게 만듭니다.",
  },
];

export default function ZeonzwaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-stone-950 text-stone-100">
      <section className="relative mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-48 top-16 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl"
        />
        <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              <span className="h-px w-10 bg-amber-300" />
              Sample profile
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              배운 것을,
              <br />
              <span className="text-amber-300">실제 화면으로.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
              안녕하세요, {member.name}입니다. 새로운 기술을 배우고 직접 만들어
              보며 이해하는 과정을 좋아합니다. 작은 아이디어도 눈에 보이는
              결과물로 옮기고, 그 과정을 팀과 함께 나누고 싶습니다.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${member.email}`}
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
              >
                메일로 인사하기
              </a>
              <p className="text-sm text-stone-400">{member.email}</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-amber-300/40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-800">
              <Image
                src={member.image}
                alt="노트북과 디지털 작업 환경"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
                preload
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                  {member.role}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {member.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid w-full max-w-7xl divide-y divide-white/10 px-6 sm:px-10 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-12">
          {profileNotes.map((note) => (
            <article className="py-10 lg:px-8 lg:py-14" key={note.number}>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">
                  {note.title}
                </h2>
                <span className="font-mono text-sm text-amber-300">
                  / {note.number}
                </span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-stone-400">
                {note.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="grid gap-10 rounded-[2rem] bg-amber-300 p-8 text-stone-950 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em]">
              My strengths
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              함께 만들며
              <br />
              성장합니다.
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {member.strengths.map((strength, index) => (
              <li
                key={strength}
                className="flex min-h-32 flex-col justify-between rounded-2xl border border-stone-950/20 bg-white/30 p-5"
              >
                <span className="font-mono text-xs">0{index + 1}</span>
                <span className="text-base font-semibold">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
